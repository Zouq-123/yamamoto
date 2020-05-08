$(function(){
	window.onload = function(){
		$.ajax({
			url:'/shopping/add',
			type:'post',
			success:function(data){
				// console.log(data)
				for(var i = 0;i<data.length;i++){
					var div = document.createElement('div');
					div.setAttribute('class','cartlist')
					var html = `<div class="cartlistimg"><img src="images/${data[i].url}" alt=""></div>
								<div class="cartlistname">
									<div class="brand">${data[i].brand}</div>
									<div class="message">${data[i].news}</div>
									<div class="information">
										<p>SIZE:<b>${data[i].size}</b></p>
										<p>颜色:<b>${data[i].color}</b></p>
										<p>${data[i].model}</p>
									</div>
									<div class="wish"><a>加入愿望清单</a></div>
								</div>
								<div class="cartlistmoney">￥${data[i].price}</div>
								<input class="cartlistqty" type="number" value="1" autocomplete="off">
								<div class="cartlistbutton">Delete</div>`
					div.innerHTML = html;
					document.getElementById('wares').appendChild(div);
					var money = $('.cartlistmoney')
					var qty = $('.cartlistqty')
					var subtotalR = $('.subtotalR')
					var totalR = $('.totalR')
					sun(money,qty,subtotalR,totalR)
				}
			},
			error:function(err){
				if(err) return console.error(err)
			}
		})
		$(document).on('blur','.cartlistqty',function(){
			var money = $('.cartlistmoney')
			var qty = $('.cartlistqty')
			var subtotalR = $('.subtotalR')
			var totalR = $('.totalR')
			sun(money,qty,subtotalR,totalR)
		})
		
		$(document).on('click','.cartlistbutton',function(){
			$(this).parent().remove()
			var res = $('.cartlist').length
			if(res==0){
				$('.subtotalR').html(0)
				$('.totalR').html(0)
			}else{
				var money = $('.cartlistmoney')
				var qty = $('.cartlistqty')
				var subtotalR = $('.subtotalR')
				var totalR = $('.totalR')
				sun(money,qty,subtotalR,totalR)
			}
		})
		
		
		function sun(money,qty,subtotalR,totalR){
			var arr = []
			var arr1 = []
			var total = 0;
			$.each(money,function(i){
				arr.push(money[i])
			})
			$.each(qty,function(i){
				arr1.push(qty[i])
			})
			fun(arr,arr1,total,subtotalR,totalR)
		}
		function fun(a,b,total,c,d){
			if(a.length == 1){
				var money = a[0].innerHTML.substr(1)
				var res = parseInt(money)
				var qty = b[0].value
				var num = parseInt(qty)
				var subtotal = num * res
				total+=subtotal
				// console.log(total)
				c.html('￥'+total)
				d.html('￥'+total)
			}else{
				var money = a[0].innerHTML.substr(1)
				var res = parseInt(money)
				var qty = b[0].value
				var num = parseInt(qty)
				var subtotal = num * res
				total+=subtotal
				a.shift()
				b.shift()
				fun(a,b,total,c,d)
			}
		}
	}
})