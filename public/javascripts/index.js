$(function(){
  
   // swiper插件
   var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true, 
      loopAdditionalSlides : 12,
      autoplay:true,
      effect : 'fade',
      
      //如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
        clickableClass : 'my-pagination-clickable',
      },
      
      // 如果需要前进后退按钮
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      
     
    })  
    
    var url = '/products/news'
    $.ajax({
      url:url,
      type:'post',
      data:{
         
      },
      success:(data)=>{
         //console.log(data)
       for(var i=0;i<data.length;i++){
          //console.log(data[i].url)
          var item = $(
            `<div class="item">
               <div class="product_new">NEW</div>
               <img class="product_pic" src="../images/${data[i].url}" alt="">
               <div class="product_detail">
                  <a href=""> ${data[i].news} </a>
                  <div class="product_brand"><img src="../images/${data[i].brand}" alt=""></div>
                  <p>￥${data[i].price}</p>
               </div>
             </div>`)
          $('.items').append(item);
       }
       return
      },
      error:function(err){
         //if(err) return console.error(err)
      }
   })   
   $(document).on('mouseenter','.product_pic',function(){
       $(this).css({'opacity':'.6'})
       $(this).prev().css({'z-index':'10'})
      
   })   
   $(document).on('mouseleave','.product_pic',function(){
      $(this).css({'opacity':'1'})
      $(this).prev().css({'z-index':'10'})
     
  }) 
})