jQuery(document).ready(function(){

$( "form" ).submit(function( event ) {
  
   var $email = jQuery('#emailForm');
   var $formEmpresa = jQuery('#formEmpresa');
   var $formNombre =jQuery("#formNombre");
   var $formTelefono = jQuery("#formTelefono");
   var $formData = jQuery("#formData");

   var $messageE = jQuery(".messageError");         
            
            $.ajax({

                type:"POST",
                data: $( "form" ).serialize(),
                url: 'procesaForm.php',
                success: function (msg) {


                    if (msg == 5) {

                      $messageE.html("EL campo Empresa es requerido");
                      $formEmpresa.focus();
                      $formEmpresa.css("background", "#FF7C00");
                      $formEmpresa.css("color", "#FFFFFF");
                    }

                    else if (msg == 6) {

                      $messageE.html("EL campo Nombre y apellido es requerido");
                      $formNombre.focus();
                      $formNombre.css("background", "#FF7C00");
                      $formNombre.css("color", "#FFFFFF");
                    }      


                    else if (msg == 3) {

                      $messageE.html("EL campo Email es requerido");
                      $email.focus();
                      $email.css("background", "#FF7C00");
                      $email.css("color", "#FFFFFF");
                    }   
                    
                    else if(msg == 4){

                        $messageE.html("El Email ingresado es incorrecto");
                    }     

                    else if(msg == 7){

                        $messageE.html("Ingrese un número de telefóno (solo números) con código de area!");
                        $formTelefono.focus();
                        $formTelefono.css("background", "#FF7C00");
                        $formTelefono.css("color", "#FFFFFF");
                    }
                    else if(msg == 8){

                        $messageE.html("Igrese su consulta por favor!");
                        $formData.focus();
                        $formData.css("background", "#FF7C00");
                        $formData.css("color", "#FFFFFF");
                    }              

                     else if(msg == 1){

                        $messageE.html("El Captcha ingresado es incorrecto");
                    }

                    else if(msg == 2){

                        $messageE.html("El Captcha es requerido");
                    }

                    else if(msg == 0){

                        $messageE.html("El mensaje fue enviado con éxito!");
                        $messageE.css("color", "#764BDF");
                        var t = setTimeout(cargarContacto, 2000); 
                        
                    }



                    

                    else {
                            $messageE.html("EL mensaje no pudo ser enviado!");

                         } 

                            function cargarContacto(){
        
                            var $contents = document.getElementById('contents');     
        
                            jQuery($contents).load( "templates/contents-software-aMedida.html").fadeIn(100);
                };


                }
            });
            return false;
        

        });

});