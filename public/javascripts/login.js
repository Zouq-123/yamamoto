$(function(){
    
      $('.loginup').on('click',function(){
         var usermail = $('#usermail').val()
         var password = $('#password').val()
         
         $.ajax({
            url:'/login/selectUser',
            type:'post',
            data:{
               mail:usermail,  
             },
            success:(data)=>{
               console.log(data)
               if(data.length){
                var psw = data[0].password
                if(psw==password){
                    window.location.assign('/index')
                }else{
                    alert('密码错误')
                }
               }else{
                 alert('账户不存在')
               }
               },
               error:function(err){
               if(err) return console.error(err)
                }
              })
           
        
      })
     
   })
