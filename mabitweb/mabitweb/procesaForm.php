<?php

if (isset($_POST["formFour"]))
	{
	               		
	    if($_POST["formEmpresa"] == '')
	    	{
	    		$msg = 5;
				echo $msg;	
	    	}

	    else if ($_POST["formNombre"] == '')
			{
				$msg = 6;
				echo $msg;		 
			}	

	    else if ($_POST["formEmail"] == '')
			{
				$msg = 3;
				echo $msg;		 
			}

		else if (!preg_match("/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/", $_POST["formEmail"]))
			{
				$msg = 4;	
				echo $msg;					
			}	

				

		else if (($_POST["formTelefono"] == ''))
			{
				$msg = 7;
				echo $msg;		 
			}

		else if (($_POST["formData"] == ''))
			{
				$msg = 8;
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
				        
				      	$empresa = strip_tags($_POST["formEmpresa"]);
				      	$nombre = strip_tags($_POST["formNombre"]);
				      	$email = strip_tags($_POST["formEmail"]);
						$telefono = strip_tags($_POST["formTelefono"]);
						$data = strip_tags($_POST["formData"]);

						$fecha = time();
						$fechaFormato = date("j/n/Y", $fecha);

						$cabecera = "MIME-VERSION: 1.0". "\r\n";
						$cabecera .= "Content-type: text/html; Charset=UTF-8" . "\r\n";
						$cabecera .= "From:<mabit.tech@gmail.com>". "\r\n";

						$cabecera .='Cc: mabit.tech@gmail.com'. "\r\n";
					

						$correoDestino = "info@mabit.com.ar";

						$origen = strip_tags($_POST["formOrigin"]);

						$asunto = "Enviado desde mabit/" . $origen;

					
						$cuerpo .= "Con fecha: " . $fechaFormato . "\r\n";
						$cuerpo .= "Empresa: " . $empresa . "\r\n";
						$cuerpo .= "Nombre y Apellido: " . $nombre . "\r\n";
						$cuerpo .= "Email: " . $email . "\r\n";
						$cuerpo .= "Teléfono: " . $telefono . "\r\n";
						$cuerpo .= "Consulta: " . $data . "\r\n";
					

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

