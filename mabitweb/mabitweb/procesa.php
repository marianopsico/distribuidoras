<?php

if (isset($_POST["formIndex"]))
	{
	               		
	    if ($_POST["formEmail"] == '')
			{
				$msg = 3;
				echo $msg;		 
			}
			
		else if (!preg_match("/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/", $_POST["formEmail"]))
			{
				$msg = 4;
					
					echo $msg;
					
			}

	
		else if (isset($_POST["g-recaptcha-response"]) && $_POST["g-recaptcha-response"])
			{
				$secret = "6LeK8gkTAAAAAFQUzC2BIInbsT_dYaYeVQXuuvQf";

				      $ip = $_SERVER["REMOTE_ADDR"];

				      $captcha = $_POST["g-recaptcha-response"];

				      $result = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip=$ip");

				      $array= json_decode($result, TRUE);

				      if ($array["success"]) {
				        

				      	$email = strip_tags($_POST["formEmail"]);
						$fecha = time();
						$fechaFormato = date("j/n/Y", $fecha);

						$cabecera = "MIME-VERSION: 1.0". "\r\n";
						$cabecera .= "Content-type: text/html; Charset=UTF-8" . "\r\n";
						$cabecera .= "From:<mabit.tech@gmail.com>". "\r\n";

						$cabecera .='Cc: mabit.tech@gmail.com'. "\r\n";
					

						$correoDestino = "info@mabit.com.ar";

						$asunto = "Enviado desde mabit/Suscripción al Newsletter";

					
						$cuerpo .= "Con fecha: " . $fechaFormato . "\r\n";
						$cuerpo .= "Email: " . $email . "\r\n";
					

						mail($correoDestino , $asunto  , $cuerpo , $cabecera);		



	                  $msgE = 0;
	                 
	                  echo $msgE;
	

				      }

				      else{
				        $msgE = 1;
				        echo $msgE;
				      }
				    }

				    else
				    	$msgE = 2;	
						echo $msgE;
	}			    

?>    

