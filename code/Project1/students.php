<?php
		header('Content-Type: text/html; charset=utf-8');
		 //create a mySQL DB connection:
		$dbhost = "166.62.8.11";
		$dbuser = "auxstudDB5";
		$dbpass = "auxstud5DB1!";
		$dbname = "auxstudDB5";
		$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
		//testing connection success
		if(mysqli_connect_errno()) 
		{
		 	die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")"
			);
		}

	    //get data from DB
	    $query = "SELECT * FROM `tbl_formData_215` ORDER BY name";

		
	    $result = mysqli_query($connection, $query);
	    if(!$result) {
	        die("DB query failed.");
	    }
		
		$studentArray = array();	
		$studentNumber = 0;
		$special = "";
		$specialitiesHeb = array("התמחות וויב","התמחות מובייל","התמחות סייבר","התמחות אנליטית","");		
?>


<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://code.jquery.com/jquery-2.2.0.js"></script>
		<script src="includes/jquery.fullPage.js"></script>
		<script src="includes/initFullPage.js"></script>
		<script src="includes/studentsAutoComplete.js"></script>
		<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
		<script src="includes/responsiveJQueryStudents.js"></script>
		<script src="includes/scripts.js"></script>
		<link href="includes/jQueryUI-v1.10.4.css" rel="stylesheet" type="text/css" />  
		<link rel="stylesheet" type="text/css" href="includes/jquery.fullPage.css" />
		<link rel="stylesheet" type="text/css" href="includes/style.css" />
		<script src="includes/getAllStudents.js"></script>
		<title>Students</title>
		<meta charset="UTF-8" />
	</head>
	<body>
		<div id="headerWrapper">
		<header>
			<div id="HeaderSection">
        		<div id="searchStudent">
        		<form action="javascript:searchStudent()">
        			<input type="submit" value="חיפוש" id="searchButton">
        			<input type="text" id="studentName" placeholder="...שם סטודנט">
        		</form>
        		</div>
        		<nav id="mainNav">
        			<ul>
        				<li> <a href="headDivision.html" >דברי ראש מחלקה</a> </li>
        				<li class="borderA "> <a href="proffersorPage.html" >סגל הוראה</a> </li>
        				<li> <a href="specialities.html" >התמחויות</a> </li>
        				<li class="borderA navBold">  <a href="#" >סטודנטים</a> </li>
        				<li> <a href="index.php">עמוד הבית</a> </li>
        			</ul>
        		</nav>
        		<nav id="mobileNav">
					 <button id="mobileButton"></button>
							<ul id="menuMobile">
		        				<li> <a class="linkMobile" href="index.php">עמוד הבית</a> </li>
		        				<li> <a class="linkMobile" href="students.php" >סטודנטים</a> </li>
		        				<li> <a class="linkMobile" href="specialities.html" >התמחויות</a> </li>
		        				<li class="navBold"> <a class="linkMobile" href="proffersorPage.html" >סגל הוראה</a> </li>
		        				<li> <a class="linkMobile" href="headDivision.html" >דברי ראש מחלקה</a> </li>
        					</ul>
        		</nav>
        		<button id="mobileButtonSearch"></button>
        		</div>
        		    <p class="homeLogo"> הנדסת תוכנה</p>
        			<a id="logo" href="index.php"></a>
		</header>
		</div>
		<div id="fullpage"> <!-- wrapper -->
			<div class="section" id="studentsAZ"> 
				<div class="mainSection">
					<div class="sub2section" id="subSectionStudent">
						<div class="titles2">
							<h1>סטודנטים</h1>			        		
			        	</div>	
			        	<?php
						$number_of_slides = 0;
						 $row_cnt = $result->num_rows;
						 $number_of_slides = ceil($row_cnt/15);
						
						for($i = 0;$i<$number_of_slides;$i++){
							echo '<div class="slide">';
							
							for($j=0;$j<15;$j++){
								$row = mysqli_fetch_assoc($result);

								if($row != NULL){
									echo '<div class="box">';
						  			echo '<a href="studentPage.php?id='.$row['mainID'].'&page=2">';
									if(file_exists('form/images/uploads/profile/'.$row['mainID'].'profile.png')){
												echo '<img src="form/images/uploads/profile/'.$row['mainID'].'profile.png" class="image"></a>';
									}
									else	{
										echo '<img src="form/images/uploads/profile/emptyPerson.png" class="image"></a>';
									}
										
									echo '<article class="textCenter">'.$row["name"].'</article>';
									$specialities = array($row['web'],$row['mobile'],$row['cyber'],$row['analitics'],$row['noSpecialist']);
									  for($index =0; $index < 5 ; $index++){
                  		
					                  	if($specialities[$index] == 1){
					                  		$special = $specialitiesHeb[$index];
					                  		break;
					                  	}
										if($index == 4)
											$special = "";
					                  }
									echo '<article class="textCenter">'.$special.'</article>';
									
									
									echo '</div>';
								}
								else{
									echo '<div class="box">';
						  			echo '<a href="#">';
									echo '<img src="form/images/uploads/profile/emptyPerson.png" class="image">';
									echo '</a></div>';
								}
							}//end of for
							if($number_of_slides>1)echo "</div>";
							
						}
					
						?>

					</div>
						<p id="art6"> }</p>
				</div>	
			</div>
		</div>
		
		<script>
			startFullPage();
			initAutoComplete();
			
			$('#mobileButton').click(function() {
			     $(this).toggleClass('expanded').siblings('#menuMobile').slideToggle();
			});

			$( "#mobileButtonSearch" ).click(function() {
				 $("#studentName").css("visibility", "visible");
				 $( "#studentName" ).slideToggle().focus();			  
			});
			
			$(window).ready(responsiveFnStuds).resize(responsiveFnStuds);
			
	   </script>

	</body>
</html>
<?php
mysqli_close($connection);

?>