// this js set the auto complete for search student
// by name only.

var studentData = [
	    {
	      value: "שני אלמוג",
	      label: "שני אלמוג",
	      desc: "שני אלמוג לוגו",
	      icon: "1profile.png"
	    },
	    {
	      value: "תמיר אבו סלאח",
	      label: "תמיר אבו סלאח",
	      desc: "תמיר אבו סלאח	 לוגו",
	      icon: "2profile.png"
	    },
	    {
	      value: "רותם אמרגי",
	      label: "רותם אמרגי",
	      desc: "רותם אמרגי לוגו",
	      icon: "3profile.png"
	    },
	    {
	      value: "ויקטור בלסקי",
	      label: "ויקטור בלסקי",
	      desc: "ויקטור בלסקי לוגו",
	      icon: "4profile.png"
	    },
	    {
	      value: "רפאל בר",
	      label: "רפאל בר",
	      desc: "רפאל בר לוגו",
	      icon: "5profile.png"
	    },
	    {
	      value: "ניר ג'קסון",
	      label: "ניר ג'קסון",
	      desc: "ניר ג'קסון לוגו",
	      icon: "6profile.png"
	    },
	    {
	      value: "אורפז גולדשטיין",
	      label: "אורפז גולדשטיין",
	      desc: "אורפז גולדשטיין לוגו",
	      icon: "7profile.png"
	    },
	    {
	      value: "זיו גינסברג",
	      label: "זיו גינסברג",
	      desc: "זיו גינסברג לוגו",
	      icon: "8profile.png"
	    },
	    {
	      value: "יוסי גלייזר",
	      label: "יוסי גלייזר",
	      desc: "יוסי גלייזר לוגו",
	      icon: "9profile.png"
	    },
	    {
	      value: "אלכסנדר גרושקו",
	      label: "אלכסנדר גרושקו",
	      desc: "אלכסנדר גרושקו לוגו",
	      icon: "10profile.png"
	    },
	    {
	      value: "אוריאל דמתי",
	      label: "אוריאל דמתי",
	      desc: "אוריאל דמתי לוגו",
	      icon: "11profile.png"
	    },
	    {
	      value: "סטניסלב וולפוס",
	      label: "סטניסלב וולפוס",
	      desc: "סטניסלב וולפוס לוגו",
	      icon: "12profile.png"
	    },
	    {
	      value: "ראובן ז'מי",
	      label: "ראובן ז'מי",
	      desc: "ראובן ז'מי לוגו",
	      icon: "13profile.png"
	    },
	    {
	      value: "דוד חלפון",
	      label: "דוד חלפון",
	      desc: "דוד חלפון לוגו",
	      icon: "14profile.png"
	    },
	    {
	      value: "מאור טוביאן",
	      label: "מאור טוביאן",
	      desc: "מאור טוביאן לוגו",
	      icon: "15profile.png"
	    },
	    {
	      value: "שלומי יוסף",
	      label: "שלומי יוסף",
	      desc: "שלומי יוסף לוגו",
	      icon: "16profile.png"
	    },
	    {
	      value: "קרן יעקב",
	      label: "קרן יעקב",
	      desc: "קרן יעקב לוגו",
	      icon: "17profile.png"
	    },
	    {
	      value: "מעיין ישי",
	      label: "מעיין ישי",
	      desc: "מעיין ישי לוגו",
	      icon: "18profile.png"
	    },
	    {
	      value: "ירון ישראלי",
	      label: "ירון ישראלי",
	      desc: "ירון ישראלי לוגו",
	      icon: "19profile.png"
	    },
	    {
	      value: "רוני כברה",
	      label: "רוני כברה",
	      desc: "רוני כברה לוגו",
	      icon: "20profile.png"
	    },
	    {
	      value: "דוד כהן",
	      label: "דוד כהן",
	      desc: "דוד כהן לוגו",
	      icon: "21profile.png"
	    },
	    {
	      value: "טום כהן",
	      label: "טום כהן",
	      desc: "טום כהן לוגו",
	      icon: "22profile.png"
	    },
	    {
	      value: "דויד לוגסי",
	      label: "דויד לוגסי",
	      desc: "דויד לוגסי לוגו",
	      icon: "23profile.png"
	    },
	    {
	      value: "ניב לוי",
	      label: "ניב לוי",
	      desc: "ניב לוי לוגו",
	      icon: "24profile.png"
	    },
	    {
	      value: "תומר לוסטר",
	      label: "תומר לוסטר",
	      desc: "תומר לוסטר לוגו",
	      icon: "25profile.png"
	    },
	    {
	      value: "ראובן ליאני",
	      label: "ראובן ליאני",
	      desc: "ראובן ליאני לוגו",
	      icon: "26profile.png"
	    },
	    {
	      value: "ליבנה לנג",
	      label: "ליבנה לנג",
	      desc: "ליבנה לנג לוגו",
	      icon: "27profile.png"
	    },
	    {
	      value: "שלומי מיכאשוילי",
	      label: "שלומי מיכאשוילי",
	      desc: "שלומי מיכאשוילי לוגו",
	      icon: "28profile.png"
	    },
	    {
	      value: "דניאל מסצ'יאני",
	      label: "דניאל מסצ'יאני",
	      desc: "דניאל מסצ'יאני לוגו",
	      icon: "29profile.png"
	    },
	    {
	      value: "רעות מצא",
	      label: "רעות מצא",
	      desc: "רעות מצא לוגו",
	      icon: "30profile.png"
	    },
	    {
	      value: "בן מרדר",
	      label: "בן מרדר",
	      desc: "בן מרדר לוגו",
	      icon: "31profile.png"
	    },
	    {
	      value: "רותם מתתיהו",
	      label: "רותם מתתיהו",
	      desc: "רותם מתתיהו לוגו",
	      icon: "32profile.png"
	    },
	     {
	      value: "הדס נדן",
	      label: "הדס נדן",
	      desc: "הדס נדן לוגו",
	      icon: "33profile.png"
	    },
	    {
	      value: "יוני נזר",
	      label: "יוני נזר",
	      desc: "יוני נזר לוגו",
	      icon: "34profile.png"
	    },
	    {
	      value: "נטלי עקיבא",
	      label: "נטלי עקיבא",
	      desc: "נטלי עקיבא לוגו",
	      icon: "35profile.png"
	    },
	    {
	      value: "רן צברי",
	      label: "רן צברי",
	      desc: "רן צברי לוגו",
	      icon: "36profile.png"
	    },
	    {
	      value: "אוריאל צציק",
	      label: "אוריאל צציק",
	      desc: "אוריאל צציק לוגו",
	      icon: "37profile.png"
	    },
	    {
	      value: "בן ארי קוטאי",
	      label: "בן ארי קוטאי",
	      desc: "בן ארי קוטאי לוגו",
	      icon: "38profile.png"
	    },
	    {
	      value: "עומר קופמן",
	      label: "עומר קופמן",
	      desc: "עומר קופמן לוגו",
	      icon: "39profile.png"
	    },
	    {
	      value: "עידן קליינמן",
	      label: "עידן קליינמן",
	      desc: "עידן קליינמן לוגו",
	      icon: "40profile.png"
	    },
	     {
	      value: "אייל רוזנהק",
	      label: "אייל רוזנהק",
	      desc: "אייל רוזנהק לוגו",
	      icon: "41profile.png"
	    },
	    {
	      value: "נעם רום",
	      label: "נעם רום",
	      desc: "נעם רום לוגו",
	      icon: "42profile.png"
	    },
	    {
	      value: "שחר רומי",
	      label: "שחר רומי",
	      desc: "שחר רומי לוגו",
	      icon: "43profile.png"
	    },
	    {
	      value: "גבריאל רוסינסקי",
	      label: "גבריאל רוסינסקי",
	      desc: "גבריאל רוסינסקי לוגו",
	      icon: "44profile.png"
	    },
	    {
	      value: "אל שדה",
	      label: "אל שדה",
	      desc: "אל שדה לוגו",
	      icon: "45profile.png"
	    },
	    {
	      value: "לורה שיש",
	      label: "לורה שיש",
	      desc: "לורה שיש לוגו",
	      icon: "46profile.png"
	    },
	    {
	      value: "חן שמיר",
	      label: "חן שמיר",
	      desc: "חן שמיר לוגו",
	      icon: "47profile.png"
	    },
	    {
	      value: "משה שמעון",
	      label: "משה שמעון",
	      desc: "משה שמעון לוגו",
	      icon: "48profile.png"
	    },
	     {
	      value: "אוהד ששון",
	      label: "אוהד ששון",
	      desc: "אוהד ששון לוגו",
	      icon: "49profile.png"
	    },
	    {
	      value: "הילה תשתש",
	      label: "הילה תשתש",
	      desc: "הילה תשתש לוגו",
	      icon: "50profile.png"
	    },
	    {
	      value: "ערן ברגר",
	      label: "ערן ברגר",
	      desc: "ערן ברגר לוגו",
	      icon: "51profile.png"
	    },
	    {
	      value: "תמיר יקר",
	      label: "תמיר יקר",
	      desc: "תמיר יקר לוגו",
	      icon: "52profile.png"
	    },
	    {
	      value: "ויקי יעקובשוילי",
	      label: "ויקי יעקובשוילי",
	      desc: "ויקי יעקובשוילי לוגו",
	      icon: "53profile.png"
	    }
	  ];

function initAutoComplete(){	  
	  var $project = $('#studentName');
	
	  $project.autocomplete({
	    minLength: 0,
	    source: studentData,
	    focus: function( event, ui ) {
	      $project.val( ui.item.label );
	      return false;
	    }
	  });
	  
	  $project.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
	    
	    var $li = $('<li>'),
	        $img = $('<img>');
	
	
	    $img.attr({
	      src: 'images/' + item.icon,
	      alt: item.label
	    });
		
	    $li.attr('data-value', item.label);
	    $li.append('<a href="#">');
	    $li.find('a').append($img).append(item.label);    
	
	    return $li.appendTo(ul);
	  };
	  
	
	}; 