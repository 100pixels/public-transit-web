(function(window, google, mapster){
	
	mapster.MAP_OPTIONS = {
		    center: {
		        lat:18.896521,
		        lng:-99.168129      
		      },
		      zoom:10,
		      disableDefaultUI: false,
		      scrollwheel: true,
		      draggable: true,
		      mapTypeId: google.maps.MapTypeId.HYBRID,
		      zoomControlOptions:{
		      	position: google.maps.ControlPosition.BOTTOM_LEFT,
		      	style: google.maps.ZoomControlStyle.DEFAULT,    	
		      },
		      panControlOptions:{
		      	position: google.maps.ControlPosition.LEFT_BOTTOM
		      }
		    }	
}(window, google, window.Mapster || (window,Mapster = {})))