(function(window, google, List){
	
	var Mapster = (function(){
		
		function Mapster(element, options){
			this.gMap = new google.maps.Map(element, options);
			this.markers = List.create();
		}
		Mapster.prototype = {
				zoom: function(level){
					if(level){
						this.gMap.setZoom(level);
					}else{
						return this.gMap.getZoom();
					}
				},
				_on:function(opts){
					var self = this;
					google.maps.event.addListener(opts.obj, opts.event, function(event){
						opts.callback.call(self, event);
					});
				}, 
				addMarker: function(opts){
					var marker;					
					opts.position={
					        lat:opts.lat,
					        lng:opts.lng   
					}					
					marker = this._createMarker(opts);	
					this.markers.add(marker);
					
					if(opts.event){
						this._on({
							obj: marker,
							event: opts.event.name, 
							callback: opts.event.callback
						});
					}
					
					if(opts.content){
						this._on({
							obj: marker, 
							event: 'click', 
							callback: function(){
								  var infoWindow = new google.maps.InfoWindow({
									  content: opts.content
								  });  
								  infoWindow.open(this.gMap, marker);
							}
						});
					}
					
					return marker;
				},
				findMarkerByLat: function(lat){
					
					for(var x = 0; x < this.markers.length; x++){
						var marker = this.markers[x];
						if(marker.position.lat() === lat){							
							return marker;
						}
					}
				},
				_createMarker: function(opts){
					opts.map = this.gMap;
					return new google.maps.Marker(opts);
				}
		};
		return Mapster;
	}())
	
	Mapster.create = function(element, options){
		return new Mapster(element, options);
	};
	
	window.Mapster = Mapster;
	
}(window, google, List))