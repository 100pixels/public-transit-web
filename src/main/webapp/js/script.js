(function(window, mapster){
    
  var options = mapster.MAP_OPTIONS;
  var element = document.getElementById('map-canvas');
  console.log(element);
  
  var map = mapster.create(element, options);
  
  map.zoom(30);
    
  var marker = map.addMarker({
	  lat: 18.896521,
	  lng:  -99.168129,
	  content: "This is a bus stop :)",
	  icon: 'img/bustour.png'
  });
  
  var marker2 = map.addMarker({
	  lat: 18.897047,
	  lng:   -99.168727,
	  content: "This is another bus stop :)",
	  icon: 'img/bustour.png'
  });
  
  //map._removeMarker(marker2);
  console.log(map.markers);
  
  //var found = map.findMarkerByLat(18.896521);
  //console.log(found);

  
}(window, window.Mapster || (window,Mapster = {})));