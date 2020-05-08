
$(function(){
	$.ajax({
		url:'/man',
		type:'post',
		success:function(data){
		console.log(data)
		for(var i in data){
			var name = data[i].name;
			var price = data[i].price;
			$('.big').append(
			`<li>
			<img src="images/a${i}.jpg" alt="">
			<p>${name}</p>
			<span>${price}</span>
			</li>`
			)
		}
		},
		error:function(){
			
		}
	});
	
	function change(a){
		$('.si>li').eq(a).fadeIn().siblings().fadeOut();
		$('.cir>li').eq(a).addClass('nb').siblings().removeClass('nb')
	}
	// 自动播放
	var step=0;
	change(step);
	var timer = null;
	function autoplay(){
		timer = setInterval(function(){
		step++;
		if(step === 5){
			step=0;
		}
		change(step)
	},2000)
	}
	autoplay();
	
	// 点击左按钮
	$('.lbtn').click(function(){
		clearInterval(timer)
		step--;
		if(step === -1){
			step=4;
		}
		change(step)
		autoplay();
	})
	// 点击右按钮
	$('.rbtn').click(function(){
		clearInterval(timer)
		step++;
		if(step === 5){
			step=0;
		}
		change(step)
		autoplay();
	})
	// 点击小圆点
	$('.cir>li').click(function(){
		clearInterval(timer);
		step = $(this).index();
		change(step);
		autoplay();
	})
	// 鼠标移入停止播放
	$('.si').mouseover(function(){
		clearInterval(timer);
	})
	$('.si').mouseout(function(){
		autoplay();
	})
	// // 1.获取元素
	// var top = document.getElementsByClassName('top')[0];
	
	// var scrollTop = 0;
	
	// // 2.绑定滚动条滚动事件
	// window.onscroll=function(){
	// 	// 3.获取滚动条的位置
	// 	scrollTop = document.documentElement.scrollTop;
	// 	console.log(scrollTop)
	// 	// 5.获取触发改变的位置
	// 	var endTop = top.offsetTop+top.offsetHeight;
	// 	console.log(endTop)
	// 	// 4.判断滚动条是否到达指定位置
	// 	if(scrollTop>=endTop){
	// 		top.style.position='fixed';
	// 		top.style.top ='0';
	// 		top.style.left='0';
			
	// 	}else{
	// 		top.style.position = 'absolute';
	// 		top.style.top ='50px';
	// 	}
	// 	}
})