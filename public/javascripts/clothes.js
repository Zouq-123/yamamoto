$(function(){
	$('.colorinner>div').on('click',function(){
		if($(this).hasClass('xuan')){
			var color = $(this).attr('name')
			$('.color').html(color)
			console.log(color)
		}else{
			$(this).siblings().removeClass('xuan')
			$(this).addClass('xuan')
			var color = $(this).attr('name')
			$('.color').html(color)
		}
	})
	$('.imgfive').on('click',function(){
		var arr = []
		var brand = $('.img').attr('name')
		arr.push(brand)
		var message = $('.message').html()
		arr.push(message)
		var url = $('.url').attr('src')
		var urla = url.substring(7)
		arr.push(urla)
		var color = $('.color').html()
		arr.push(color)
		var money = $('.rightthree').html()
		var moneya = money.substring(1)
		arr.push(parseInt(moneya))
		var ruler = $('.ruler').html()
		arr.push(ruler)
		var model = $('.model').html()
		arr.push(model)
		var name = arr.join(';')
		console.log(name)
		$.ajax({
			url:'/clothes/add',
			type:'post',
			data:{name:name},//传值
			success:function(data){
				//console.log(data)//接收值
			},
			error:function(err){
				if(err) return console.error(err)
			}
		})
		window.location.assign('/shopping')
	})
})