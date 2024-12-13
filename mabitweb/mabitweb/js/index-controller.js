jQuery(document).on("ready", inicio);

function inicio(){

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


    

    

    jQuery.preloadImages = function(){
        for(var i = 0; i<arguments.length; i++){
        jQuery("<img>").attr("src", arguments[i]);
        }
    };
            
    jQuery.preloadImages("images/slider/mabitRI.png" , "images/slider/tecnologias.png" , "images/slider/facturaElectronica.png", "images/slider/productos.png" , "images/logos/angularjs.png", "images/logos/css3.png" , "images/logos/html5.png" , "images/logos/java.png", "images/logos/javascript.jpg" , "images/logos/mySql.png" , "images/logos/php.jpg" , "images/logos/sql-logo.png", "images/mab_inicio.png", "images/item/android.png", "images/item/Auricular-SH1.png", "images/item/Auricular-SH3-4.png", "images/item/auricular.jpg", "images/item/Auriculares-100MV-2.png", "images/item/Auriculares-100MV.png", "images/item/Auriculares-858.png", "images/item/GNU-linux.png", "images/item/Haier-9.png", "images/item/Harrison366-1.png", "images/item/Harrison366-2.png", "images/item/Harrison366-3.png", "images/item/Harrison366-4.png", "images/item/INDO-8.png", "images/item/intel-inside.png", "images/item/kanji.png", "images/item/pc-core-i3.png", "images/item/pc-hogar.png","images/item/PC-Kanji.png", "images/item/pc.png", "images/item/power-bank.jpg", "images/item/powerBank.jpg", "images/item/tablet.jpg", "images/item/Teclado-comun.png", "images/item/Teclado-inalambrico.png", "images/item/windows10.png", "images/item/Xtreme-play-2.png", "images/item/Xtreme-play-V2-3.png", "images/item/Xtreme-play.png", "images/item/YUBI-7-2.png", "images/item/YUBI-7.png");



    $(".rslides").responsiveSlides();
           
        var $mainMenu = document.getElementById('mainMenu');
        var $buttonShowMenu = document.getElementById('showMenu');
        var $buttonHideMenu = document.getElementById('hideMenu');
        var $menuSoftware = document.getElementById('mainMenuSoftware');
        var $menuSoftwarePanel = document.getElementById('panelSoftware');
        var $buttonInicio = document.getElementById('mainMenuButtonHome');
        var $contents = document.getElementById('contents'); 
        var $buttonInicio = document.getElementById('mainMenuButtonHome');
        var $menuHardware = document.getElementById('mainMenuHardware');
        var $menuContacto = document.getElementById('mainMenuContact');
        var $desarrolloMedida = document.getElementById('desarrolloMedida');
        var $gestionComercial = document.getElementById('gestionComercial');
        var $facturaElectronica = document.getElementById('facturaElectronica');
        var $buttonFacturaE = document.getElementById('buttonFacturaE');
        var $buttonGestion = document.getElementById('buttonGestion');
        var $softwareIcon = document.getElementById('softwareIcon');
        var $softwareIcon2 = document.getElementById('softwareIcon2');
        var $fooContact = document.getElementById('fooContact');
        var $fooNewsletter = document.getElementById('fooNewsletter');

        var showMenu = function(){

                $buttonShowMenu.classList.remove('is-active');
                $buttonHideMenu.classList.add('is-active');
                $mainMenu.classList.add('is-active');
                
            };

        var hideMenu = function(){
                $buttonShowMenu.classList.add('is-active');
                $buttonHideMenu.classList.remove('is-active');
                $mainMenu.classList.remove('is-active');           
                
            };

        var showPanelSoftware = function(){
            
            if($menuSoftwarePanel.style.display == 'block'){             
               
                $menuSoftwarePanel.style.display = 'none';
                $softwareIcon.style.display = 'block';
                $softwareIcon2.style.display = 'none';

                
               
            }


            else {

                $menuSoftwarePanel.style.display = 'block';
                 $softwareIcon.style.display = 'none'; 
                 $softwareIcon2.style.display = 'block'; 

                }



                        
            };


        var loadTemplate = function(boton , template){


            $(boton).click(function(){


        
            $("#contents").show().load(template);

            hideMenu();


            });
            

        };




               
            loadTemplate($buttonFacturaE,"templates/contents-software-facturaElectronica.html");
            loadTemplate($buttonGestion,"templates/contents-software-gestionComercial.html" );
            loadTemplate($gestionComercial,"templates/contents-software-gestionComercial.html");
            loadTemplate($desarrolloMedida,"templates/contents-software-aMedida.html");
            loadTemplate($facturaElectronica,"templates/contents-software-facturaElectronica.html");
            loadTemplate($menuHardware,"templates/contents-hardware.html" );
            loadTemplate($buttonInicio,"templates/contents-home.html");
            loadTemplate($menuContacto,"templates/contents-contact.html");   
            loadTemplate($fooContact,"templates/contents-contact.html" );



            $menuSoftware.addEventListener("click", showPanelSoftware);
            $buttonShowMenu.addEventListener("click", showMenu);
            $buttonHideMenu.addEventListener("click", hideMenu);
};


