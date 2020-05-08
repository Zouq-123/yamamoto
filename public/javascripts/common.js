$(function(){
    // headernav的移入移出
     $('#brand').on('mouseenter',function(){
         $('.header_brand').slideDown(100)
         $('.header_man').slideUp(100)
      })
      $('.header_brand').on('mouseleave',function(){
         $('.header_brand').slideUp(100)
      })
  
  $('#men').mouseenter(function(){
      $('.header_man').slideDown(100)
      $('.header_brand').slideUp(100)
      $('.header_women').slideUp(100)
   })
   $('.header_man').mouseleave(function(){
      $('.header_man').slideUp(100)
   })
      $('#women').mouseenter(function(){
      $('.header_women').slideDown(100)
      $('.header_brand').slideUp(100)
      $('.header_man').slideUp(100)
   })
   $('.header_women').mouseleave(function(){
      $('.header_women').slideUp(100)
   })
    // 侧边栏目录的点击
    $('.menu').on('click',function(){
       $('.sidemenu_inner').animate({left:"0px"},1)
       $('.sidemenu_overlay').css({'display':'block'})
    })
    $('.sidemenu_overlay').on('click',function(){
       $('.sidemenu_inner').animate({left:"-414px"},1)
       $('.sidemenu_overlay').css({'display':'none'})
    })
    // 侧边栏内部点击
    let isBrand=true;
    $('.sidemenu_searchbrand').on('click',function(){
       if(isBrand){
          $('.sidemenu_brand').slideToggle(100);
          $('.sidemenu_searchbrand>img').css({'transform':'rotate(270deg)'})
          isBrand = false;
       }else{
          $('.sidemenu_brand').slideToggle(100);
          $('.sidemenu_searchbrand>img').css({'transform':'rotate(0deg)'})
          isBrand = true
       }
    })
    let isSpecies=true;
    $('.sidemenu_searchspecies').on('click',function(){
       if(isSpecies){
          $('.sidemenu_species').slideToggle(100);
          $('.sidemenu_searchspecies>img').css({'transform':'rotate(270deg)'})
          isSpecies = false;
       }else{
          $('.sidemenu_species').slideToggle(100);
          $('.sidemenu_searchspecies>img').css({'transform':'rotate(0deg)'})
          isSpecies = true
       }
    })
    let isProposal=true;
    $('.sidemenu_proposal').on('click',function(){
       if( isProposal){
          $('.sidemenu_wearproposal').slideToggle(100);
          $('.sidemenu_proposal>img').css({'transform':'rotate(270deg)'})
          isProposal = false;
       }else{
          $('.sidemenu_wearproposal').slideToggle(100);
          $('.sidemenu_proposal>img').css({'transform':'rotate(0deg)'})
          isProposal = true
       }
    })
})
