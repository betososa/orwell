	function initialize(lat, lng){
		var latlng = new google.maps.LatLng(lat, lng);
		var mapSettings = {
			center: latlng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map($('#mapa').get(0), mapSettings);

		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			draggable: true,
			title: 'DragMe!'
		});

		google.maps.event.addListener(marker, 'position_changed', function(){
			getMarkerCoords(marker);
		});

		function getMarkerCoords(marker){
			var markerCoords = marker.getPosition();
			$('#id_lat').val(markerCoords.lat());
			$('#id_lng').val(markerCoords.lng());
		}
	}