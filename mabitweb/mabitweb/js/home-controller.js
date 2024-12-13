jQuery(document).ready(function(){


    $( "form" ).submit(function( event ) {
  
        var $email = jQuery('#emailForm');

        var $messageE = jQuery(".messageError");         
            
            $.ajax({

                type:"POST",
                data: $( "form" ).serialize(),
                url: 'procesa.php',
                success: function (msg) {


                    if (msg == 3) {

                      $messageE.html("EL campo Email es requerido");
                      $email.focus();
                      $email.css("background", "#FF7C00");
                      $email.css("color", "#FFFFFF");
                    }   
                    
                    else if(msg == 4){

                        $messageE.html("El Email ingresado es incorrecto");
                    }     


                     else if(msg == 1){

                        $messageE.html("El Captcha ingresado es incorrecto");
                    }

                    else if(msg == 2){

                        $messageE.html("El Captcha es requerido");
                    }

                    else if(msg == 0){

                        $email.focus();
                        $email.css("background", "#FFFFFF");
                        $email.css("color", "#000000");
                        $messageE.html("El mensaje fue enviado con éxito!");
                        $messageE.css("color", "#764BDF");
                        var t = setTimeout(cargarContacto, 2000); 
                        
                    }



                    

                    else {
                            $messageE.html("EL mensaje no pudo ser enviado!");

                         } 

                            function cargarContacto(){
        
                            var $contents = document.getElementById('contents');     
        
                            jQuery($contents).load( "templates/contents-home.html").fadeIn(100);
                };


                }
            });
            return false;
        

        });

	$(".rslides").responsiveSlides();

		var $e = jQuery('#buttonFacturaE');
		var $g = jQuery('#buttonGestion');
			

		$e.click(function(){

			$("#contents").load("templates/contents-software-facturaElectronica.html");
		
		});


		$g.click(function(){

				$("#contents").load("templates/contents-software-gestionComercial.html");

		});


});

