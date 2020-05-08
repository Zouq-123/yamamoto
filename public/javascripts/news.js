$(function(){
	$.ajax({
		url:'/new/selectUser',
		type:'post',
		success:function(data){
			// console.log(data)
			fun(data)
		},
		error:function(err){
			if(err) return console.error(err)
		}
	})
	
	var arr = [];
	var flog = true;
	$('.opt>li').on('click',function(){
		if(flog){
			flog = false;
			$('#commodity>li').remove()
			var state = $(this).attr('name')
			if(state==1){
				$(this).find('img').eq(0).hide()
				$(this).find('img').eq(1).show()
				$(this).attr('name','0')
				var val1 = $(this).parent().attr('value')
				var val2 = $(this).attr('value')
				arr.push(val1+'&'+val2)
			}else if(state==0){
				$(this).find('img').eq(1).hide()
				$(this).find('img').eq(0).show()
				$(this).attr('name','1')
				var val1 = $(this).parent().attr('value')
				var val2 = $(this).attr('value')
				var val = val1+'&'+val2
				for(var i=0;i<arr.length;i++){
					if(arr[i]==val){
						arr.splice(i,1)
					}
				}
			}
			// console.log(arr)
			if(arr.length){
				for(var i=0;i<arr.length;i++){
					var opt = arr[i].split('&')
					$.ajax({
						url:'/new/options',//地址
						type:'post',//方式
						data:{
							categ:opt[0],
							name:opt[1]
						},//传值
						success:function(data){
							//console.log(data)//接收到数据库的值
							fun(data)
						},
						error:function(err){//报错
							if(err) return console.error(err)
						}
					})
				}
			}else{
				$.ajax({
					url:'/new/selectUser',
					type:'post',
					success:function(data){
						// console.log(data)
						fun(data)
					},
					error:function(err){
						if(err) return console.error(err)
					}
				})
			}
			flog = true
		}
	})
	$('.screen').on('click',function(){
		var state = $(this).attr('name')
		if(state==1){
			$(this).find('img').eq(0).hide()
			$(this).find('img').eq(1).show()
			$(this).attr('name','0')
			$('.sort').slideDown()
		}else{
			$(this).find('img').eq(1).hide()
			$(this).find('img').eq(0).show()
			$(this).attr('name','1')
			$('.sort').slideUp()
		}
	})
	$('.sorting').on('click',function(){
		event.stopPropagation()
		var name = $(this).attr('name')
		console.log(typeof name)
		var arrq = [];
		var elem = $('#commodity>li')
		var money = $('.message>.messagel>p>a')
		for(var i=0;i<money.length;i++){
			var aaa = money[i].innerHTML
			var bbb = aaa.substring(1)
			arrq.push(bbb)
		}
		arrq.sort(function(a,b){
			return a - b
		})
		if(name == 'rise'){
			sun(arrq,money,elem)
		}else if(name == 'drop'){
			var arre = arrq.reverse()
			sun(arre,money,elem)
		}
	})
	
	$(document).on('click','#commodity>li',function(){
		console.log(1)
		window.location.assign('/clothes')
	})
	
	function fun(data){
		for(var i = 0;i<data.length;i++){
			// console.log(data[i])
			var li = document.createElement('li');
			var html = `<div class="picture">
						<span>NEW</span>
						<img src="images/${data[i].url}" alt="">
						<div></div>
					</div>
					<div class="color">
						
					</div>
					<div class="message">
						<div class="messagel">
							<span><a>${data[i].news}</a></span>
							<p><a>￥${data[i].price}</a></p>
						</div>
						<div class="messager">
							<img src="images/${data[i].brand}" alt="">
						</div>
					</div>`
			li.innerHTML = html;
			document.getElementById('commodity').appendChild(li);
			var color = document.getElementsByClassName('color')[i];
			// console.log(color)
			var arr = data[i].color.split(',')
			for(var j = 0;j<arr.length;j++){
				// console.log(arr[j])
				var div = document.createElement('div');
				var html = `<span style="background:${arr[j]};">`
				div.innerHTML = html;
				color.appendChild(div)
			}
		}
	}
	function sun(a,m,e){
		var arrw = [];
		var num = [];
		for(var i=0;i<a.length;i++){
			var ac = a[i]
			if(arrw.indexOf(ac)==-1){
				arrw.push(ac)
			}
		}
		for(var i=0;i<arrw.length;i++){
			for(var j=0;j<m.length;j++){
				var aaa = m[j].innerHTML
				var bbb = aaa.substring(1)
				if(arrw[i]===bbb){
					num.push(j)
				}
			}
		}
		$('#commodity>li').remove()
		for(var i=0;i<num.length;i++){
			var li = e[num[i]]
			document.getElementById('commodity').appendChild(li);
		}
	}
})