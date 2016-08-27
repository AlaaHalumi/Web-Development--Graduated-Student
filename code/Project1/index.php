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
	    $webQuery = "SELECT * FROM `tbl_formData_215` WHERE web=1";
		$cyberQuery = "SELECT * FROM `tbl_formData_215` WHERE cyber=1";
		$mobileQuery = "SELECT * FROM `tbl_formData_215` WHERE mobile=1";
		$analiticsQuery = "SELECT * FROM `tbl_formData_215` WHERE analitics=1";
		$noSpecialistQuery = "SELECT * FROM `tbl_formData_215` WHERE noSpecialist=1";
		
	    $webResult = mysqli_query($connection, $webQuery);
		$cyberResult = mysqli_query($connection, $cyberQuery);
		$mobileResult = mysqli_query($connection, $mobileQuery);
		$analiticsResult = mysqli_query($connection, $analiticsQuery);
		$noSpecialisResult = mysqli_query($connection, $noSpecialistQuery);
		
	    if(!$webResult  && !$cyberResult && !$mobileResult && $analiticsResult && $noSpecialisResult) {
	        die("DB query failed.");
	    }
?>
<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://code.jquery.com/jquery-2.2.0.js"></script>
		<script src="includes/jquery.fullPage.js"></script>
		<script src="includes/scripts.js"></script>
		<script src="includes/getStudentBySpecialization.js"></script>
		<link rel="stylesheet" type="text/css" href="includes/jquery.fullPage.css" />
		<link rel="stylesheet" type="text/css" href="includes/style.css" />
		<script src="includes/get_specialies.js"></script>
		<link href="includes/jQueryUI-v1.10.4.css" rel="stylesheet" type="text/css" /> 
		<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
		<script src="includes/studentsAutoComplete.js"></script>
		<script src="includes/responsiveJQueryIndex.js"></script>
		<title>Shenkar Gradute Students</title>
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
        				<li class="borderA"> <a href="proffersorPage.html" >סגל הוראה</a> </li>
        				<li> <a href="specialities.html" >התמחויות</a> </li>
        				<li class="borderA">  <a href="students.php" >סטודנטים</a> </li>
        				<li> <a href="#" class="navBold">עמוד הבית</a> </li>
        			</ul>
        		</nav>
        		<nav id="mobileNav">
					 <button id="mobileButton"></button>
							<ul id="menuMobile">
		        				<li> <a class="linkMobile" href="#">עמוד הבית</a> </li>
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
			<div class="section" id="section0"> <!--homepage -->
				<div class="mainSection">
						<a id="mainLogo" href="#"></a>
		        		 <article id="mainAbout">
		        			 <p>נבנה על ידי אנשי תוכנה עבור אנשי תוכנה</p>
		        			 <p>גלול כדי לראות את הסטודנטים</p>
		        		 </article>
		        			<a id="arrow" href="#Mobile" ></a>
				</div>	
			</div> 
			<div class="section" id="section1"> <!--mobile-->		
				<div class="mainSection">
					<div class="subSection" id="subsectionMobile">
						<div class="titles">
      		
			        	</div>	
						<?php
						$number_of_slides = 0;
						 $row_cnt = $mobileResult->num_rows;
						 $number_of_slides = ceil($row_cnt/12);
						echo '<div class="slideCenter">';
						
						for($i = 0;$i<$number_of_slides;$i++){
							echo '<div class="slide">';
							
							for($j=0;$j<12;$j++){
								$row = mysqli_fetch_assoc($mobileResult);
								if($row != NULL){
									echo '<div class="box">';
						  			echo '<a href="studentPage.php?id='.$row['mainID'].'"&page=1>';
									if(file_exists('form/images/uploads/profile/'.$row['mainID'].'profile.png'))
										echo '<img src="form/images/uploads/profile/'.$row['mainID'].'profile.png " class="image"></a>';
									else	
										echo '<img src="form/images/uploads/profile/emptyPerson.png" class="image"></a>';
									echo '<article class="textCenter">'.$row["name"].'</article>';
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
						if($number_of_slides == 1)echo "</div>";
						echo "</div>";
						?>
					</div>
					<p id="art1"> }</p>
				</div>
			</div>

			<div class="section" id="section2"><!--web-->
				<div class="mainSection">
					<div class="subSection"  id="subsectionWeb">
						<div class="titles">
     		
			        	</div>	
						<?php
						$number_of_slides = 0;
						 $row_cnt = $webResult->num_rows;
						 $number_of_slides = ceil($row_cnt/12);
						echo '<div class="slideCenter">';
						
						for($i = 0;$i<$number_of_slides;$i++){
							echo '<div class="slide">';
							
							for($j=0;$j<12;$j++){
								$row = mysqli_fetch_assoc($webResult);
								if($row != NULL){
									echo '<div class="box">';
						  			echo '<a href="studentPage.php?id='.$row['mainID'].'"&page=1>';
									if(file_exists('form/images/uploads/profile/'.$row['mainID'].'profile.png'))
										echo '<img src="form/images/uploads/profile/'.$row['mainID'].'profile.png" class="image"></a>';
									else	
										echo '<img src="form/images/uploads/profile/emptyPerson.png" class="image"></a>';
									echo '<article class="textCenter">'.$row["name"].'</article>';
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
						if($number_of_slides == 1)echo "</div>";
						echo "</div>";
						?>
					</div>
		    		<p id="art2"> ;</p>
				</div>
			</div>
			
			<div class="section" id="section3"> <!-- Cyber -->
				<div class="mainSection">
					<div class="subSection" id="subsectionCyber">
						<div class="titles">
	        		
			        	</div>	
			        	<?php
						$number_of_slides = 0;
						 $row_cnt = $cyberResult->num_rows;
						 $number_of_slides = ceil($row_cnt/12);
						echo '<div class="slideCenter">';
						
						for($i = 0;$i<$number_of_slides;$i++){
							echo '<div class="slide">';
							
							for($j=0;$j<12;$j++){
								$row = mysqli_fetch_assoc($cyberResult);
								if($row != NULL){
									echo '<div class="box">';
						  			echo '<a href="studentPage.php?id='.$row['mainID'].'"&page=1>';
									if(file_exists('form/images/uploads/profile/'.$row['mainID'].'profile.png'))
										echo '<img src="form/images/uploads/profile/'.$row['mainID'].'profile.png" class="image"></a>';
									else	
										echo '<img src="form/images/uploads/profile/emptyPerson.png" class="image"></a>';
									echo '<article class="textCenter">'.$row["name"].'</article>';
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
						if($number_of_slides == 1)echo "</div>";
						echo "</div>";
						?>

					</div>
					<p id="art3"> }</p>
				</div>
			</div>
			
			<div class="section" id="section4"> <!-- Analitics -->
				<div class="mainSection">
					<div class="subSection" id="subsectionAnalitics">
						<div class="titles">
	        		
			        	</div>	
			        	<?php
						$number_of_slides = 0;
						 $row_cnt = $analiticsResult->num_rows;
						 $number_of_slides = ceil($row_cnt/12);
						echo '<div class="slideCenter">';
						
						for($i = 0;$i<$number_of_slides;$i++){
							echo '<div class="slide">';
							
							for($j=0;$j<12;$j++){
								$row = mysqli_fetch_assoc($analiticsResult);
								if($row != NULL){
									echo '<div class="box">';
						  			echo '<a href="studentPage.php?id='.$row['mainID'].'"&page=1>';
									if(file_exists('form/images/uploads/profile/'.$row['mainID'].'profile.png'))
										echo '<img src="form/images/uploads/profile/'.$row['mainID'].'profile.png" class="image"></a>';
									else	
										echo '<img src="form/images/uploads/profile/emptyPerson.png" class="image"></a>';
									echo '<article class="textCenter">'.$row["name"].'</article>';
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
						if($number_of_slides == 1)echo "</div>";
						echo "</div>";
						?>

					</div>
						<p id="art4"> *</p>
				</div>
			</div>
			
			<div class="section" id="section5"><!-- Additions -->
				<div class="mainSection">
					<div class="subSection" id="subsectionOthers">
						<div class="titles">
        		
			        	</div>
			        	<?php
						$number_of_slides = 0;
						 $row_cnt = $noSpecialisResult->num_rows;
						 $number_of_slides = ceil($row_cnt/12);
						echo '<div class="slideCenter">';
						
						for($i = 0;$i<$number_of_slides;$i++){
							echo '<div class="slide">';
							
							for($j=0;$j<12;$j++){
								$row = mysqli_fetch_assoc($noSpecialisResult);
								if($row != NULL){
									echo '<div class="box">';
						  			echo '<a href="studentPage.php?id='.$row['mainID'].'"&page=1>';
									if(file_exists('form/images/uploads/profile/'.$row['mainID'].'profile.png'))
										echo '<img src="form/images/uploads/profile/'.$row['mainID'].'profile.png" class="image"></a>';
									else	
										echo '<img src="form/images/uploads/profile/emptyPerson.png" class="image"></a>';
									echo '<article class="textCenter">'.$row["name"].'</article>';
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
						if($number_of_slides == 1)echo "</div>";
						echo "</div>";
						?>

					</div>
						<p id="art5"> ;</p>
				</div>
				</div>
		</div>
		<script>
		
  		(function(){
       		initAutoComplete();
       		   startFullPage();
      	 })();
		
		$('#mobileButton').click(function() {
			 $(this).toggleClass('expanded').siblings('#menuMobile').slideToggle();
		});

		$( "#mobileButtonSearch" ).click(function() {
			 $("#studentName").css("visibility", "visible");
			 $( "#studentName" ).slideToggle().focus();			  
		});
	
		$(window).ready(responsiveFnIndex).resize(responsiveFnIndex);
		

		</script>
	</body>
</html>

<?php
mysqli_close($connection);

?>
