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
		
		$studID =  $_GET['id']; 
		$query = "SELECT * FROM `tbl_formData_215` WHERE mainID=" . $studID; 
		$result = mysqli_query($connection, $query);
		
	    if(!$result) {
	        die("DB query failed.");
	    }
		
		$row = $result->fetch_assoc();
		
?>


<!DOCTYPE html>
<html>
	<head>
		<script src="https://code.jquery.com/jquery-2.2.0.js"></script>
		<script src="includes/jquery.fullPage.js"></script>
		<script src="includes/scripts.js"></script>
		<script src="includes/studentsAutoComplete.js"></script>
		<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
		<link href="includes/jQueryUI-v1.10.4.css" rel="stylesheet" type="text/css" /> 
		<link rel="stylesheet" type="text/css" href="includes/jquery.fullPage.css" />
		<link rel="stylesheet" type="text/css" href="includes/style.css" />
		<script src="includes/initFullPage.js"></script>
		<title>fullpageweb</title>
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
        				<li class="borderA"> <a href="#" >סגל הוראה</a> </li>
        				<li> <a href="specialities.html" >התמחויות</a> </li>
        				<li class="borderA">  <a href="students.php" >סטודנטים</a> </li>
        				<li> <a href="index.php">עמוד הבית</a> </li>
        			</ul>
        		</nav>
        		</div>
        		 <h1 class="homeLogo"> הנדסת תוכנה</h1>
        			<a id="logo" href="index.php"></a>
		</header>
		</div>
		
		<div id="fullpage"> <!-- wrapper -->
			<div class="section" id="studentBG"> 
				<div class="mainSection">
					<div class="sub4Section">
						<div class="titles4">
								<?php echo "<h1>".$row['name']."</h1>";?>
        						<?php
        						$specalize = array("web","mobile","cyber","analitics");
								$specalizeHeb = array("וויב","מובייל","סייבר","אנליטית");
        						$allSpecialist = "";
								$flag = 0;
        						for($i = 0;$i<4;$i++){
        							//echo $row[$specalize[$i]];
        							if($row[$specalize[$i]]== '1')
										if($flag == 0){
											$flag++;
											 $allSpecialist .= $specalizeHeb[$i];
										}
										else{
											 $allSpecialist .=", ". $specalizeHeb[$i];
										}
        							 
        						}
        						//$web = $row['web'];
        						?>
        						<?php if($flag == 1) echo"<h2>".$allSpecialist."</h2>"; ?>
        						
        						<?php echo '<h3>"' .$row['quote'].'"</h3>';?>
	  
	       						<?php
			       				$target_dir_standpicture = "form/images/uploads/standpicture/";
								$target_dir_projectpicture = "form/images/uploads/projectpicture/";
								$target_dir_cvfile = "form/images/uploads/cvUploads/";
			       				
								$target_file_emptyStandPicture = "form/images/uploads/standpicture/standPic.png";
			       				$target_file_standpicture = $target_dir_standpicture . $studID. "standpicture.png";
								$target_file_projectpicture1 = $target_dir_projectpicture . $studID. "projectpicture1.jpg";
								$target_file_projectpicture2 = $target_dir_projectpicture . $studID. "projectpicture2.jpg";
								$target_file_projectpicture3 = $target_dir_projectpicture . $studID. "projectpicture3.jpg";
								$target_file_cv = $target_dir_cvfile .$studID. "cv.pdf";  							
			       				//$picture_exist = array("true","true","true","true");
								?>
						
			        	</div>		
			        			
			        			<?php
				        			if(file_exists($target_file_standpicture) == "true") {
									    echo "<div class='boxStandPic'> <img src='". $target_file_standpicture . "' width='350px'> </div>";
									}
									else{
										echo "<div class='boxStandPic'> <img src='" . $target_file_emptyStandPicture . "'  ></div>";
									}
									?> 			        			
				        			<div id="sliderStudent"> 

			        			<?php
			        				
									if (file_exists($target_file_projectpicture1) == "true") {
										echo "<div class='slide'> <img src='"  . $target_file_projectpicture1  . " ' height='256px' ></div>";
									}
									if (file_exists($target_file_projectpicture2)== "true") {
										echo "<div class='slide'> <img src='"  . $target_file_projectpicture2  . " ' height='256px' ></div>";
									}
									if (file_exists($target_file_projectpicture3) == "true") {
								     	echo "<div class='slide'> <img src='"  . $target_file_projectpicture3  . " ' height='256px' ></div>";
									}

									?>
									</div> 
	
							<div class="socialIcon">
									<a href="<?php echo $row['url']== NULL?"#":$row['url']; ?>" class="icon1"></a>
									<?php
									if(file_exists($target_file_cv) == 'true')
										echo " <a href='".$target_file_cv ."' target='_blank' class='icon2'</a>";
									else 
										echo " <a href='#' class='icon2'</a>";
									?>
									<a href="<?php echo $row['linkedin']== NULL?"#":$row['linkedin']; ?>" class="icon3"></a>
						<!--fix-->	<a href="<?php echo $row['mail']== NULL?"#":"mailto:".$row['mail']; ?>" class="icon4"></a>
									<a href="<?php echo $row['github']== NULL?"#":$row['github']; ?>" class="icon5"></a>
									
							</div>
						
					</div>
					<p id="art8"> *</p>
				</div>
			</div>

		</div>
	  <script>
	 
			  startFullPage();
			  initAutoComplete();
			  $('.fp-controlArrow.fp-prev').css({left:363,top:290, width:21, height:34 });  
			  $('.fp-controlArrow.fp-next').css({right:31 ,top:290 ,width:21, height:34 });
			  
			  $('.fp-controlArrow.fp-prev').css('background-image','url("images/arrowLeftWhite.png")');
		      $('.fp-controlArrow.fp-next').css('background-image','url("images/arrowRightWhite.png")');
			  
	  </script>
	
	</body>
</html>