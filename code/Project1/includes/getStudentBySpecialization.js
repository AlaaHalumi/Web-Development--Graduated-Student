pathProfile = "form/images/uploads/profile/";
endPathProfile = "profile.png";
slideIds = ["subsectionMobile","subsectionWeb","subsectionCyber","subsectionAnalitics","subsectionOthers"];

function getAllStudBySpecialization() {
	 $.get("getStudent.php", function(data, status){
	            showData(data); 
	            startFullPage();
	     });
};

function showData(data){
	
	var obj = JSON.parse(data);
	var studentsNumber = [obj[0].mobile.length,obj[1].web.length,obj[2].cyber.length,
						  obj[3].analitics.length,obj[4].noSpecialist.length];
	for(var i=0;i<5;i++)
		setStudentsBoxes(studentsNumber[i],obj,slideIds[i],i);
}

function setStudentsBoxes(numberOfStudents,data,id,index){
	var numberOfSlides = Math.ceil(numberOfStudents/12);
	for(var i = 0;i<numberOfSlides;i++){
		var outerSlide = document.getElementById(id);
		// I add this for new css//
		var slidePosition = document.createElement('div');
		slidePosition.className = "slideCenter";
		outerSlide.appendChild(slidePosition);
		//finish//
		
		var slide = document.createElement('div');
		slide.className = "slide";
		slidePosition.appendChild(slide);
		
		for(var j=0;j<12;j++){
			//we get inside only if student exists
			 if(j< (numberOfSlides>1? numberOfStudents-(12*numberOfSlides-1):numberOfStudents)){
				var studName = getStudentName(data,index,j);
				var studId = getStudentId(data,index,j);
			 }
		
			 var box = document.createElement('div');// private.
			 box.className = 'box';
			 slide.appendChild(box);
			 
			var link = document.createElement('a');
			link.setAttribute("href","studentPage.php?id="+studId);
			box.appendChild(link);
			
			var img = document.createElement('img');
			img.className = "image";
			 
			 if(j< (numberOfSlides>1? numberOfStudents-(12*numberOfSlides-1):numberOfStudents)){   // if we got a student
		   		 var gotImage = imageExists(pathProfile+studId+endPathProfile);
			 	 if(gotImage) {
			 		 img.setAttribute("src", pathProfile+studId+endPathProfile);
				 }
			 	 else{
			 	 	img.setAttribute("src", pathProfile+"empty"+endPathProfile);
				 }

				 img.style.backgroundRepeat = "no-repeat";
				 link.appendChild(img);
		
				 var name = document.createElement('article');
				 name.style.textAlign = "center";
				 name.innerHTML =  studName;
				 box.appendChild(name);
		 }
		 else { // we dont got a student -> put empty picture
			 var img = document.createElement('div');
			 img.className = "image";
			 img.style.backgroundImage = "url('"+pathProfile+"empty"+endPathProfile+"') ";
			 img.style.backgroundRepeat = "no-repeat";
			 box.appendChild(img);	
		 }
		}
	}	
}

function  getStudentName(data,index,studIndex){
	if(index==0){
		return data[index].mobile[studIndex].name;
	}
	else if(index==1){
		return data[index].web[studIndex].name;
	}
	else if(index==2){
		return data[index].cyber[studIndex].name;
	}
	else if(index==3){
		return data[index].analitics[studIndex].name;
	}
	else if(index==4){
		return data[index].noSpecialist[studIndex].name;
	}
}

function  getStudentId(data,index,studIndex){
	if(index==0){
		return data[index].mobile[studIndex].id;
	}
	else if(index==1){
		return data[index].web[studIndex].id;
	}
	else if(index==2){
		return data[index].cyber[studIndex].id;
	}
	else if(index==3){
		return data[index].analitics[studIndex].id;
	}
	else if(index==4){
		return data[index].noSpecialist[studIndex].id;
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
		navigation: true,
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

		paddingBottom: '10px',

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
