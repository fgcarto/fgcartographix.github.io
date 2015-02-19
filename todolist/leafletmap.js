
        /*
        $.getJSON("proxy.php?url=http://www.someserver.com/data.geojson", function (data) {
            myGeoJSONlayer.addData(data);
        }).complete(function () {
            map.fitBounds(myGeoJSONlayer.getBounds());
        });
        https://gist.github.com/bmcbride/6614373#file-proxy-php
        */

		var map = L.map('map').setView([45.59056, -73.71698], 11);

		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Basemap © <a href="http://mapbox.com">Mapbox</a>',
			id: 'fgcartographix.map-5f2k6sgr' /* Light */    //'fgcartographix.l1f92dpp' /* Dark */
		}).addTo(map);


		L.marker([45.50087, -73.56486]).addTo(map)
			.bindPopup("<b>Agence métropolitaine de transport</b><br />C'est mon bureau!");

		L.marker([45.68025, -73.86910]).addTo(map)
			.bindPopup("<b>Fort KickAss</b><br />C'est ma maison!").openPopup();

        /*
		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("Coordonnée du click : " + e.latlng.toString())
				.openOn(map);
		}

		map.on('click', onMapClick);
        */

