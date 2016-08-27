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
		
		 while($row = mysqli_fetch_assoc($result)) {//results are in associative array. keys are cols names

		 		  $specialitiesHeb = array("התמחות וויב","התמחות מובייל","התמחות סייבר","התמחות אנליטית","");
				  $specialities = array($row['web'],$row['mobile'],$row['cyber'],$row['analitics'],$row['noSpecialist']);
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

?>
