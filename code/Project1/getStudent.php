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
		
		$web = array();	
		$mobile = array();
		$cyber = array();
		$analitics = array();
		$noSpecialist= array();
		
		$numberWeb = 0;
		$numberMobile = 0;
		$numberCyber = 0;
		$numberAnalitics = 0;
		$nubmerNoSpecialist = 0;
		
		 while($row = mysqli_fetch_assoc($webResult)) {//results are in associative array. keys are cols names
                  $temp = array("id" => $row['mainID'],"name" => $row["name"] );
				  $web[$numberWeb++] = $temp;
	           }

		 while($row = mysqli_fetch_assoc($cyberResult)) {//results are in associative array. keys are cols names
                  $temp = array("id" => $row['mainID'],"name" => $row["name"] );
				  $cyber[$numberCyber++] = $temp;
	           }
	           
		 while($row = mysqli_fetch_assoc($mobileResult)) {//results are in associative array. keys are cols names
                  $temp = array("id" => $row['mainID'],"name" => $row["name"] );
				  $mobile[$numberMobile++] = $temp;
	           }
		 
		 while($row = mysqli_fetch_assoc($analiticsResult)) {//results are in associative array. keys are cols names
                  $temp = array("id" => $row['mainID'],"name" => $row["name"] );  
				  $analitics[$numberAnalitics++] = $temp;
	           }
		 
		 while($row = mysqli_fetch_assoc($noSpecialisResult)) {//results are in associative array. keys are cols names
                  $temp = array("id" => $row['mainID'],"name" => $row["name"] );  
				  $noSpecialist[$nubmerNoSpecialist++] = $temp;
	           }
		
		$web=array("web"=>$web);
		$cyber=array("cyber"=>$cyber);
		$mobile=array("mobile"=>$mobile);
		$analitics=array("analitics"=>$analitics);
		$noSpecialist=array("noSpecialist"=>$noSpecialist);
		$total = array($mobile,$web,$cyber,$analitics,$noSpecialist);

		echo json_encode($total);
?>
