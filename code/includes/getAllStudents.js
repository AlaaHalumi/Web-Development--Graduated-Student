pathProfile = "form/images/uploads/profile/";
endPathProfile = "profile.png";
slideIds = ["subsectionMobile","subsectionWeb","subsectionCyber","subsectionAnalitics","subsectionOthers"];

var studentNumber = 0;
var flag = 0;
function getAllStudents() {

	 $.get("getAllStudents.php", function(data, status){
	      showData(data); 
	      startFullPage();

	     });
};

function showData(data){
	
	var obj = JSON.parse(data);
	var studentsNumber = obj.length;
	setStudentsBoxes(studentsNumber,obj,"sub2section");

}

function setStudentsBoxes(numberOfStudents,data,id){
	var numberOfSlides = Math.ceil(numberOfStudents/15);

	for(var i = 0;i<numberOfSlides;i++){
		var outerSlide = document.getElementById('subSectionStudent');
		// I add this for new css//
		var slidePosition = document.createElement('div');
		slidePosition.className = "slideCenter2";
		outerSlide.appendChild(slidePosition);
		//finish//
		
		var slide = document.createElement('div');
		slide.className = "slide";
		slidePosition.appendChild(slide);
		
		for(var j=0;j<15;j++){
			
			//we get inside only if student exists
			if(studentNumber < data.length){
					var studName = data[studentNumber].name;
					var studId =   data[studentNumber].id;
					var studSpecialities = data[studentNumber++].specialities;

			}
		//alert(studId);
		
			 var box = document.createElement('div');// private.
			 box.className = 'box';
			 slide.appendChild(box);
			// var img = document.createElement('a');
			// img.className = "image";
			
			var link = document.createElement('a');
			link.setAttribute("href","studentPage.php?id="+studId);
			box.appendChild(link);
			
			var img = document.createElement('img');
			img.className = "image";

			if(studentNumber < data.length){   // if we got a student

		   		 var gotImage = imageExists(pathProfile+studId+endPathProfile);
		   		 alert(gotImage);
			 	 if(gotImage == "true") {
			 	 	
			 		 //img.style.backgroundImage = "url('"+pathProfile+studId+endPathProfile+"') ";	 
			 		 img.setAttribute("src", pathProfile+studId+endPathProfile);
			 		 
				 }
			 	 else{
			 	 	
			 	 	//img.style.backgroundImage = "url('"+pathProfile+"empty"+endPathProfile+"')"; 
			 	 	img.setAttribute("src", pathProfile+"empty"+endPathProfile);
				 }
				 
				 
				 img.style.backgroundRepeat = "no-repeat";
				 //img.setAttribute("href","studentPage.php?id="+studId);
				 link.appendChild(img);
		
				 var articleName = document.createElement('article');
				 box.appendChild(articleName);
				 
				 var name = document.createElement('h4');
				 name.style.textAlign = "center";
				 name.innerHTML =  studName;
				 articleName.appendChild(name);
				 
				 var special = document.createElement('h5');
				 special.style.textAlign = "center";
				 special.innerHTML =  studSpecialities;
				 articleName.appendChild(special);
		 }
		 else { // we dont got a student -> put empty picture

			 img.style.backgroundImage = "url('"+pathProfile+"empty"+endPathProfile+"') ";
			 img.style.backgroundRepeat = "no-repeat";
			 box.appendChild(img);	
		 }
		}
	}	
}

function imageExists(image_url){
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;
}

function startFullPage(){
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors: ['Homepage', 'Mobile','Web','Cyber','Analitics','Others'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['Homepage', 'Mobile','Web','Cyber','Analitics','Others'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'right',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: true,
		loopTop: true,
		loopHorizontal: true,
		continuousVertical: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		resize : false,
		sectionsColor : ['#000', '#000'],
		// Alaa paddingTop: '3em',
		paddingBottom: '10px',
		// Alaa fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
}
