(function() {

	var elements = [],
	    apiKey = document.getElementsByTagName('body')[0].getAttribute('data-map-api-key');

	window.widgets.add('map', function() {
		elements.push(this);
	});

	window.mapInit = function() {
		for (var i in elements) {
			var lat = elements[i].getElementsByClassName('latitude')[0].getAttribute('title'),
			    lng = elements[i].getElementsByClassName('longitude')[0].getAttribute('title');
			
			var map = new google.maps.Map(elements[i], {
				zoom: 8,
				center: new google.maps.LatLng(lat, lng),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});
		}
	};

	window.widgets.utils.loadScript('https://maps.googleapis.com/maps/api/js?sensor=true&callback=mapInit');

})();
