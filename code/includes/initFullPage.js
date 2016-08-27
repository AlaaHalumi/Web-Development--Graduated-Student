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