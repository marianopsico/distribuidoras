jQuery(document).ready(function(){

    var $butttonHard = jQuery(".hardware-menu-item");
    
	function cambiarTemplate(datos){
	    
	    var $buttonHar = datos.currentTarget.id;
	    var newTemplate = "templates/hardwareList/contents-viewItem-" + $buttonHar + ".html";
	    
	    $("#contents").show().load(newTemplate);
	}
         
    $($butttonHard).on("click", cambiarTemplate);
     
        });
	
	var $shipping = jQuery("#shipping");
	
	$shipping.click(function(){

			$("#contents").load("templates/contents-contact.html");
		
		});
            

