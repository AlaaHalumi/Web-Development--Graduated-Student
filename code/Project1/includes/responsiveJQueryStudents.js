var students = "#subSectionStudent";

function goToMobile(){
	var arrayLength = 5;
	$.fn.fullpage.destroy('all');
	var numberOfStudents = students+" .box";
	var slides = students+" .slide";
	var slideCenter = $(students);
    var boxes = $(numberOfStudents).detach();
    var slides =  $(slides);
    var numberOfSlides = slides.length;
    var numberOfBoxes = boxes.length;

   var slidesToAdd = Math.ceil(numberOfBoxes/9) - numberOfSlides ;

   for( var k=0;k<slidesToAdd;k++){
   	var slide = document.createElement('div');
		slide.className = "slide";
		slides.push(slide);
   	
   }
   var slideNumber;
    for(var i=0;i<numberOfBoxes;i++){
        slideNumber =  Math.floor(i/9);
        slides[slideNumber].appendChild(boxes[i]);
    }
    var numberOfEmpty = slides.length*9-numberOfBoxes;

    	for(var i=0;i<numberOfEmpty;i++){
    		 var box = document.createElement('div');// private.
			 box.className = 'box';
			 box.id = "emptyPerson";
			 var img = document.createElement('div');
			 img.className = "image";
			 img.style.backgroundImage = "url('form/images/uploads/profile/emptyPerson.png') ";
			 img.style.backgroundRepeat = "no-repeat";
			 box.appendChild(img);
			 slides[slides.length-1].appendChild(box);
    	
    }
    	for(var k = numberOfSlides;k<slides.length;k++){
    		slideCenter.append(slides[k]);
    	}
     	startFullPage();
}

function backToDesktop(){  //get the number of stuents and make them from 9 in a slide to 12
	$.fn.fullpage.destroy('all');
	var boxArray = students+" .box";
	var slideArray = students+" .slide";
	var emptyPerson = students+" #emptyPerson";
	
	$(emptyPerson).remove(); // remove the empty persons we created in mobile view.
    var boxes = $(boxArray).detach();
    var slides =  $(slideArray);
    var numberOfSlides = slides.length; 
    var numberOfBoxes = boxes.length;   

   	var slidesNeeded1234 = Math.ceil(numberOfBoxes/15);

    for(var i=0;i<numberOfBoxes;i++){
    	  slideNumber =  Math.floor(i/15);
		  slides[slideNumber].appendChild(boxes[i]);
    }
    

    for(var i=0;i<3;i++){
    	slides[slidesNeeded1234+i].remove();
    }
   		//delete.
    	startFullPage();
   
}
