$(function(){
	
	$.ajax({
		url:'/SYTE',
		type:'post',
		success:function(data){
			// console.log(data)
		for(var i in data){
			var name = data[i].name;
			// console.log(data[i].name)
			var price = data[i].price;
			$('#items').append(
			`
			<ul>
			    
				<img src="images/a${i}.jpg" alt="">
				<li>${name}</li>
				<li>${price}</li>
				
			</ul>
			`
			)
		}
		
		},
		error:function(){
			
		}
	
	})
})