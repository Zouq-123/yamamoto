 $(function(){
    var ismail 
    var istel
    var ispassword
      $('#mail').blur(function(){
        // 获取到输入框内的值
         var usermail = $(this).val()
         //console.log(usermail)
         // 定义正则规范
         var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
         
         if(pattern.test(usermail)){
            // 用户名符合规范		
            // 异步请求数据库，看该注册的用户名是否已存在
            $.ajax({
               url:'/register/selectUser',
               type:'post',
               data:{
                  mail:usermail
               },
               success:(data)=>{
                  //console.log(data)
                  if(data == 'true'){
                     
                     $(this).parent().parent().children('.check_right').css({'display':'block'})
                     ismail = true;
                  }else{
                     $(this).parent().next('.check_error').css({'display':'block'});
                     ismail = false;
                  }
                  },
                  error:function(err){
                  if(err) return console.error(err)
                   }
                 })
              }else{
               $(this).parent().next('.check_error').css({'display':'block'})
               ismail = false;
            }
      })
      //验证电话
      $('#tel').blur(function(){
         var pattern =/^1[3|4|5|7|8]\d{9}$/;
         var usertel = $(this).val()
         //console.log(usertel)
         if(pattern.test(usertel)){
            $(this).parent().parent().children('.check_right').css({'display':'block'})
            istel = true
             }else{
              // console.log(this)
                $(this).parent().next('.check_error').css({'display':'block'})
                istel = false       
         }
      })

      
      
      $('#password').blur(function(){
         var pattern =/^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]+$/
         var password = $(this).val()

         if(pattern.test(password)){
           $(this).parent().parent().children('.check_right').css({'display':'block'})
           ispassword = true;
            }else{
           // console.log(this)
           $(this).parent().next('.check_error').css({'display':'block'})
           ispassword = false;
         }
      })
      $('#confirm').on('click',function(){
         var usermail = $('#mail').val()
         var usertel = $('#tel').val()
         var password = $('#password').val()
         var isform = ispassword&&istel&&ismail
         console.log(ispassword,istel,ismail)
         
         if(isform){
            $.ajax({
               url:'/register/addUser',
               type:'post',
               data:{
                  mail:usermail,
                  tel:usertel,
                  password:password
                },
               success:(data)=>{
                  //console.log(data)
                  if(data == 'true'){
                     $(this).parent().parent().children('.check_right').css({'display':'block'})
                    ismail = true;
                  }else{
                     $(this).css({'background':'red'});
                     $(this).parent().next('.check_error').css({'display':'block'});
                     ismail = false;
                  }
                  },
                  error:function(err){
                  if(err) return console.error(err)
                   }
                 })
            window.location.href = "/";
         }
        
           
         
      })
      $('#back').on('click',function(){
         window.location.href = "/index";

      })
      // submit事件   return true；则允许表单提交   return false阻止表单提交
      $('#form').submit(function(){
         if(true){
            return true;
         }else{
            return false;
         }
      })
   })
