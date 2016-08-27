var arrayOfSpecialities = ["#subsectionMobile","#subsectionWeb","#subsectionCyber",
						   "#subsectionAnalitics","#subsectionOthers","#subSectionStudent"];
var students = "#subSectionStudent";

function goToMobile() {

	var arrayLength = 5;
	$.fn.fullpage.destroy('all');
	for(var j=0;j<5;j++){

	var numberOfStudents = arrayOfSpecialities[j]+" .box";
	var slides = arrayOfSpecialities[j]+" .slide";
	var slideCenter = arrayOfSpecialities[j]+" .slideCenter";
    var boxes = $(numberOfStudents).detach();
    var slides =  $(slides);
    var numberOfSlides = slides.length;
    var numberOfBoxes = boxes.length;
    
    if (Math.ceil(numberOfBoxes/9) > numberOfSlides){  // check if we need another slide because we go to mobile 12 -> 9
		var slideCenter = $(slideCenter);	
		var slide = document.createElement('div');
		slide.className = "slide";
    }
    for(var i=0;i<numberOfBoxes;i++){
    	if(i<9)
    		slides[0].appendChild(boxes[i]);
    	else if (i>8 && i<18 && numberOfSlides >1)
    		slides[1].appendChild(boxes[i]);
    	else if ((i>17 && i<27) || numberOfSlides==1 ){
    		slide.appendChild(boxes[i]);
    	}
    }
    
    if(numberOfBoxes <(numberOfSlides+1)*9){
    	var numberOfEmpty = (numberOfSlides+1)*9-numberOfBoxes;
    	for(var i=0;i<numberOfEmpty;i++){
    		 var box = document.createElement('div');// private.
			 box.className = 'box';
			 box.id = "emptyPerson";
			 var img = document.createElement('div');
			 img.className = "image";
			 img.style.backgroundImage = "url('form/images/uploads/profile/emptyPersonMobile.png') ";
			 img.style.backgroundRepeat = "no-repeat";
			 box.appendChild(img);
			 slide.appendChild(box);
    	}
    }
    	slideCenter.append(slide);

    }
     	startFullPage();

}

function backToDesktop(){  //get the number of stuents and make them from 9 in a slide to 12
	
	$.fn.fullpage.destroy('all');
	for(var k = 0;k<5;k++){
	var boxArray = arrayOfSpecialities[k]+" .box";
	var slideArray = arrayOfSpecialities[k]+" .slide";
	var emptyPerson = arrayOfSpecialities[k]+" #emptyPerson";
	
	$(emptyPerson).remove(); // remove the empty persons we created in mobile view.
    var boxes = $(boxArray).detach();
    var slides =  $(slideArray);
    var numberOfSlides = slides.length; 
    var numberOfBoxes = boxes.length;   
   	if(numberOfSlides*12>numberOfBoxes){
   		slides[slides.length-1].remove();
   	}
   	var slideNumber;
    for(var i=0;i<numberOfBoxes;i++){
    	slideNumber =  Math.floor(i/9);
    	if(i<12)
    		slides[0].appendChild(boxes[i]);
    	else if (i>11 && i<24){
    		slides[1].appendChild(boxes[i]);
    		
    	}
    	else if (i>23 && i<36){
    		slides[2].appendChild(boxes[i]);
    	}
    }
   }
    	startFullPage();
}
