var imagePath = "images/";
var png = ".png";
var names = ["ראובן ז'מי","רותם מתתיהו"];
var teachersNames = ["רושו יונית","רש עמית","לוי אביבית","שלום ברכה-ריבה","חסין צילה","זיידנברג נצר","הופנר יגאל","זר אביב מושון"];
var teacherIndex = 0;
var flagMobileHD = 0;
var flagDesktopHD = 0;
var flagMobileSpec = 0;
var flagDesktopSpec = 0;
var flagMobileStuds = 0;
var flagDesktopStuds = 0;
var flagMobileIndex = 0;
var flagDesktopIndex = 0;
var flagMobileStudPage = 0;
var flagDesktopStudPage = 0;
var flagMobilePro = 0;
var flagDesktopPro = 0;

function setTeachers(){

	for (var i=0; i<24; i++){
		var teacher = new createTeacher(i);
	}
}
function createTeacher(currentTeacher){
	var teacher = document.createElement('div');// private.
	 teacher.className = 'boxTeacher';
	 if(currentTeacher < 8){
 	 document.getElementById('teacherContainer1').appendChild(teacher);
 	}

	 var img = document.createElement('div');
	 var name = document.createElement('article');
	 name.id = "name_"+currentTeacher;
 	 img.className = "image";
 	 name.style.textAlign = "center";
 	 img.style.backgroundImage = "url('"+imagePath+"teachers/"+currentTeacher+png+"') ";
 	 name.innerHTML = teachersNames[teacherIndex++];
	 img.style.backgroundRepeat = "no-repeat";
	 teacher.appendChild(img);
 	 teacher.appendChild(name);
};
function responsiveFnPro(){
	
	width = $( window ).width();
	if(width <= 480){
		if(flagMobilePro == 0){
			var index = 0;
			$("#slideCenter").css("font-size", "100%");
			var run = $("#image");
			$( ".image" ).each(function() {
			$( this ).css("background", "url(images/teachers/"+index+index+".png) no-repeat");
			index++;
			});
		}
	}
}	
function responsiveFnHD() {

width = $( window ).width();
 
	if(width <= 480){
			if(flagMobileHD == 0){
			$.fn.fullpage.destroy('all');
	   		$("#headparagraph").removeClass("lecturerText2");		    			
			var image = $("#headDivisionPos").detach();
	   		var slide = document.createElement('div');
	   		slide.className = 'slide';
	   		slide.setAttribute("id","picSlider");
	   		slide.appendChild(image[0]);
	   		document.getElementById('slideCenter').appendChild(slide);
	   		flagMobileHD++;
	   		flagDesktopHD++;
	   		startFullPage();	
			}
	}
	else{
		if(flagDesktopHD >0){
		$.fn.fullpage.destroy('all');
		$("#headparagraph").attr("class","lecturerText2");
		var img = $("img").detach();
		$("#picSlider").remove();
		$(".mainSection").append(img);
			startFullPage();
			flagDesktopHD++;
			flagMobileHD=0;
			}
		}
		
 };

		
function responsiveFnSpec() {

width = $( window ).width();
	
	if(width <= 480){
		$.fn.fullpage.destroy('all');
		$(".webimage").attr("src","images/responsiveWeb5.png");		    			
		flagMobileSpec++;
		flagDesktopSpec++;
		startFullPage();	
	}
	else{
		if(flagDesktopSpec >0){
		$.fn.fullpage.destroy('all');
		$(".webimage").attr("src","images/mobile.jpg");	
	   	startFullPage();
	   	flagDesktopSpec++;
	   	flagMobileSpec=0;
	   	}
	 } 
 };

function responsiveFnStuds() {

 width = $( window ).width();
 
 if(width <= 480){
	if(flagMobileStuds == 0){
	goToMobile();
	flagMobileStuds++;
	flagDesktopStuds =1;
}
	}
 else{
	if(flagDesktopStuds ==1){
	backToDesktop();
	flagDesktopStuds++;
	flagMobileStuds=0;
	}
}		
};
				
function responsiveFnIndex() {

 width = $( window ).width();

if(width <= 480){
	if(flagMobileIndex == 0){
	goToMobile();
	$(".img").toggleClass("mobileImg");
	$(".box").toggleClass("mobileBoxImg");
	$(".emptyPerson").toggleClass("mobileBoxImg");
	$(".image").toggleClass("mobileImg");

	flagMobileIndex++;
	flagDesktopIndex=1;
}
	}
else{
	if(flagDesktopIndex == 1){
	backToDesktop();
	flagDesktopIndex++;
	flagMobileIndex=0;
	}
 }
		
};		
	
function responsiveFnStudPage() {

width = $( window ).width();
if(width <= 480){
	if(flagMobileStudPage == 0){
		$.fn.fullpage.destroy('all');
	var section = document.createElement('div');
	section.className = "section studentBG";
	section.id = "secondSectionStudent";
	$(".titles4").clone().attr('id','title2Section').appendTo(section);
	var img = $(".boxStandPic").detach();
	section.appendChild(img[0]);
	$("#fullpage").append(section);
	flagMobileStudPage++;
	flagDesktopStudPage++;
	startFullPage();	
	}
}
else{
	if(flagDesktopStudPage >0){
	$.fn.fullpage.destroy('all');
	$('#title2Section').remove();
	var img = $(".boxStandPic").detach();
	$("#secondSectionStudent").remove();
	$(".titles4").after(img[0]);
	startFullPage();
	flagDesktopStudPage++;
	flagMobileStudPage=0;
	}
}
		
};
			