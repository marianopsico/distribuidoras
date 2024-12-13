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
                        var t = setTimeout(cargarTemplate, 2000); 
                        
                    }



                    

                    else {
                            $messageE.html("EL mensaje no pudo ser enviado!");

                         } 

                            function cargarTemplate(){
                            
                            var $backTemplate = jQuery("#viewItemLarge").data("text");
                            var $templateNumber = "templates/hardwareItemLarge/contents-viewItem-large-" + $backTemplate + ".html";
                            
        
                            jQuery("#contents").show().load($templateNumber).fadeIn(100);
                };


                }
            });
            return false;
        

        });

                   
    var $price = jQuery('#viewItemLargePrice');
    var $twiter = jQuery('#twiter');    
    var $name = jQuery('#viewItemLargeName');
    var $dataBuy = jQuery("#dataBuy");
    var $imageSmall = jQuery(".gallery-smallSize-picture");
    var $whatsapp = jQuery(".viewItem-large-controls-share-whatsapp");
    var $email = jQuery('#eMail');

    $($whatsapp).attr("data-text", $name.text()+" .Encontrá este producto a solo" + $price.text() + " en: ");

    $($twiter).attr("href" , "http://twitter.com/home?status="+ $name.text() + " a solo" + $price.text() +" ,encontrala en http://www.mabit.com.ar");

    $($email).attr('href', "mailto:?subject=Mirá%20este%20producto!&body="+ $name.text() + "%20.Encontrá%20este%20producto%20a%20solo%20" + $price.text() + "%20en:%20http://www.mabit.com.ar");



    
    var $p =jQuery('#viewItemLarge');
    
    $($dataBuy).text("Artículo = "+$name.text()+"  Cantidad: 1");    

    $($p).on("touchstart", dataBuy );
    $($p).on("click", dataBuy );
    
    $($imageSmall).on("click", cambiarFoto );


        $whatsapp.click(function() { 

        if(isMobile.any() ) {
 
            var text = $(this).attr("data-text");
            var url = $(this).attr("data-link");
            var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
            var whatsapp_url = "whatsapp://send?text=" + message;
            window.location.href = whatsapp_url;
        } else {
            alert("Por favor usa tu Celular para compartir por WhatsApp");
        }
 
    });

    
        var $back = jQuery('.backToList');

        function backList(datos){
            
            var $backLarge = datos.currentTarget.id;
            var newBack = "templates/hardwareList/contents-viewItem-" + $backLarge + ".html";
    
                $("#contents").show().load(newBack);
        }

        $($back).on("click", backList);
        

        function cambiarFoto(datos){

            var imageS = datos.currentTarget.id;
            var newImage = "images/item/" + imageS;
            $("#contentImage img").attr("src", newImage);
                            
        };


        var isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
        };


        function dataBuy(){


            var $amount = jQuery('#viewItemLargeAccountant');
            var $name = jQuery('#viewItemLargeName');
            var $dataBuy = jQuery('#dataBuy');
            var $nameText = jQuery('#nameText');
            var $name = $($name).text();
            
            $($nameText).val($name);

            
            var $amountBuy =($('select[id=viewItemLargeAccountant]').val());            

            $("select")

                .change(function(){
                var str=""; 
                $("select option:selected").each(function(){
                    str += $(this).text() + " ";     
                });

                $($dataBuy).text("Artículo = "+$nameText.val()+"  Cantidad: "+ str);    

            });                 
        }
 
});


        

    

