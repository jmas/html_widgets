(function() {

	// If widgets.js not found
	if (window.widgets === undefined) {
		return;
	}

	var elements = [],
	    apiKey = document.getElementsByTagName('body')[0].getAttribute('data-map-api-key');

	window.widgets.add('map', function() {
		elements.push(this);
	});

	window.mapInit = function() {
		for (var i in elements) {
			var latEls = elements[i].getElementsByClassName('latitude'),
			    lngEls = elements[i].getElementsByClassName('longitude'),
			    lat = latEls.length > 0 ? latEls[0].getAttribute('title'): null,
			    lng = lngEls.length > 0 ? lngEls[0].getAttribute('title'): null;
			
			var map = new google.maps.Map(elements[i], {
				zoom: 8,
				center: new google.maps.LatLng(lat, lng),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});
		}
	};

	window.widgets.utils.loadScript('https://maps.googleapis.com/maps/api/js?sensor=true&callback=mapInit');

})();
