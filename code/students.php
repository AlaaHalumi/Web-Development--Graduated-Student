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
		//$specialities = array($row['web'],$row['mobile'],$row['cyber'],$row['analitics'],$row['noSpecialist']);
		/* while($row = mysqli_fetch_assoc($result)) {//results are in associative array. keys are cols names

		 		  
                  for($index =0; $index < 5 ; $index++){
                  		
                  	if($specialities[$index] == 1){
                  		$special = $specialitiesHeb[$index];
                  		break;
                  	}
					if($index == 4)
						$special = "";
                  }
				  $temp = array("id" => $row['mainID'],"name" => $row["name"],"specialities" => $special);
				  $studentArray[$studentNumber++] = $temp;
				
	           }

			echo json_encode($studentArray);
*/
?>


<!DOCTYPE html>
<html>
	<head>
		<script src="https://code.jquery.com/jquery-2.2.0.js"></script>
		<script src="includes/jquery.fullPage.js"></script>
		<script src="includes/initFullPage.js"></script>
		<script src="includes/studentsAutoComplete.js"></script>
		<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
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
        		</div>
        		    <h1 class="homeLogo"> הנדסת תוכנה</h1>
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
						//echo '<div class="slideCenter>"';
						
						for($i = 0;$i<$number_of_slides;$i++){
							echo '<div class="slide">';
							
							for($j=0;$j<15;$j++){
								$row = mysqli_fetch_assoc($result);
								
								//echo $row;
								if($row != NULL){
									echo '<div class="box">';
						  			echo '<a href="studentPage.php?id='.$row['mainID'].'">';
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
					//	echo "</div>";
						
						/* while($row = mysqli_fetch_assoc($webResult)) {//results are in associative array. keys are cols names
                 		 	//$student_number++;
                 		 	//if($student_number)
                 		 	//$temp = array("id" => $row['mainID'],"name" => $row["name"] );
				  			//$web[$numberWeb++] = $temp;
				  			
							echo '<div class="box">';
				  			echo '<a href="studentPage.php?id='.$row['mainID'].'">';
							echo '<img src="form/images/uploads/profile/'.$row['mainID'].'profile.png">';
							echo '<article class="textCenter">'.$row["name"].'</article>';
							echo '</a></div>';
				  			
	      			     }*/
						//echo '</div></div>';
						?>

					</div>
						<p id="art6"> }</p>
				</div>	
			</div>
		</div>
		
		<script>
			//getAllStudents();
			
			startFullPage();
			initAutoComplete();
	   </script>

	</body>
</html>
<?php
mysqli_close($connection);

?>