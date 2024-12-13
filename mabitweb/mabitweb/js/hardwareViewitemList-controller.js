jQuery(document).ready(function(){

		var $backToMenu = jQuery('.backToMenu');
		var $image = jQuery('.showList-item-image-picture');
		var $description = jQuery('.listItem-description-article');
		var $buy = jQuery('.listItem-buy');
		var $demand = jQuery('.listItem-price-demand');
		var $listItemBuy= jQuery('.listItem-buy');
		var $listImage = jQuery('.showList-item-image');
		var $listDescription = jQuery('.showList-item-panels-description');

		function itemLarge(datos){
    
    		
    		var $itemLarge = datos.currentTarget.id;
    		var newItemLarge = "templates/hardwareItemLarge/contents-viewItem-large-" + $itemLarge + ".html";
    
    			$("#contents").show().load(newItemLarge);
		}


		$($listItemBuy).on("click", itemLarge);
		$($listImage).on("click", itemLarge);
		$($listDescription).on("click", itemLarge);


		$backToMenu.click(function(){

			$("#contents").show().load("templates/contents-hardware.html");
		
		});

				


});
