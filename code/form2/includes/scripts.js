var showImageNumber = 1;
var picturesId = { profileUploadFile: 0, standUploadFile: 0, projectPictureFile1: 0
	,projectPictureFile2:0,projectPictureFile3:0,profileUploadFileId: "picture1", standUploadFileId: "picture2"
	,projectPictureFile1Id: "picture3",projectPictureFile2Id:"picture4",projectPictureFile3Id: "picture4"};

// if last checkbox is checked all other checkbox is unchecked
function onclickCheckBox(){
	document.getElementById("noSpecalise").onclick = function() {
	    if ( this.checked ) {
	    	this.value = 1;
	      var inputs = document.getElementsByTagName("input");
	      var sum=0;
	      var numbers = inputs.length;
	      for (var i = 0; i < numbers; i++) {
	  			if (inputs[i].type == "checkbox") {
	      			inputs[i].checked = false;
	      			sum++;		
	    		}
	    			if(sum==4) break;
		   };
		}
	};
}

// get all checkbox an add them event to remove last check box if any of them checked
function removeCheckBoxAll(){          
		var inputs = document.getElementsByTagName("input");
   	    var sum=0;
        var numbers = inputs.length;
        for (var i = 0; i < numbers; i++) {
  			if (inputs[i].type == "checkbox") {
      			inputs[i].onclick = function(){
      				document.getElementById("noSpecalise").checked = false;
      			};
      			sum++;		
    		}
    		if(sum==4) break;
		};	
}
		
function changePicture(input,elementId) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
        	if(picturesId[elementId] == 0){
        		picturesId[elementId] ++; 
        		setSectionImage(e,elementId);
        	}
        };
        reader.readAsDataURL(input.files[0]);
    }
}
function setSectionImage(e,elementId){
	var image = document.createElement('section');
    image.className = "pictureBox" + showImageNumber++; 
    document.getElementsByTagName('main')[0].appendChild(image);
    var a = document.createElement('a');
  	a.setAttribute("href", e.target.result);
  	a.setAttribute("data-lightbox","image-1");
  	a.setAttribute("data-title",name);
  	a.setAttribute("id", picturesId[elementId+"Id"]);
    image.appendChild(a);
    var img = document.createElement('img');
    img.setAttribute("src", e.target.result);
    img.className = "picture";
    img.id = picturesId[elementId+"Id"];
    a.appendChild(img);
}