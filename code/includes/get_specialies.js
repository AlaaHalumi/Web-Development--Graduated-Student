$(document).ready(function(){

	$.getJSON("data/specialties.json",function(data){
		var number = 0;
		$.each(data.specialtiesName,function(){
			$('.titles:eq('+number++ +')').append("<h1>" + this.name + "</h1>");
		});
	});
});

