var imagePath = "images/";
var png = ".png";
var names = ["ראובן ז'מי","רותם מתתיהו"];
var teachersNames = ["רושו יונית","רש עמית","לוי אביבית","שלום ברכה-ריבה","חסין צילה","זיידנברג נצר","הופנר יגאל","זר אביב מושון"];
var teacherIndex = 0;

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




