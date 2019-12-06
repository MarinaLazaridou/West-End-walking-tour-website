/* 

 @Author: Marina Lazaridou
 @Subject: Part of student project on geovisualisation and WebGIS
 @File type: JavaScript

*/

// This code is run when the JS file is loaded.
console.info("** Running part_b.js **");


function initMapLL(){
	// The execution of the code starts here.
	console.log("initMapLL");
	
	// Create the map
	// Add basemaps layers
    
	var mapboxstreet = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyaW5hbGEiLCJhIjoiY2p0aDVvMm02MDd6bzQ0bnpqdjY3OHFrdCJ9.cY-gQZWm5ZYnCDy9lKHYLg', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
	
	var mapboxsatellite = L.tileLayer('http://a.tiles.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFyaW5hbGEiLCJhIjoiY2p0aDVvMm02MDd6bzQ0bnpqdjY3OHFrdCJ9.cY-gQZWm5ZYnCDy9lKHYLg', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
	
	var mapboxcontrast = L.tileLayer('http://a.tiles.mapbox.com/v4/mapbox.high-contrast/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFyaW5hbGEiLCJhIjoiY2p0aDVvMm02MDd6bzQ0bnpqdjY3OHFrdCJ9.cY-gQZWm5ZYnCDy9lKHYLg', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
	
	var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
	// Add Styles
	var PolyStyle = {
    "color": "#29AB87",
	"weight": 5,
    "opacity": 0.45,
	"fillOpacity": 0.45
	};
	
	var LineStyle = {
    "color": "#003153",
	"weight": 5,
    "opacity": 2
	};
	// Style the points
	var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
	};
	
	// Add the layers from the geoJSON
	var theatresLayer = L.geoJSON(theatres, {
		style: function(feature) {
			return {
				color: "#FFD700"
			};
		},
		pointToLayer: function(feature, latlng) {
			return new L.CircleMarker(latlng, {
				radius: 12,
				fillOpacity: 1,
				fillColor: "#92000A"
			});
		},
		onEachFeature: onEachFeature
		});
	
	var landmarksLayer = L.geoJSON(landmarks, {
		style: function(feature) {
			return {
				color: "#FFFFFF"
			};
		},
		pointToLayer: function(feature, latlng) {
			return new L.CircleMarker(latlng, {
				fillOpacity: 1,
				fillColor: "#000080"
			});
		},
		onEachFeature: onEachFeature
		});

	
	var poisLayer = L.geoJSON(pois, { style: PolyStyle,
		onEachFeature: onEachFeature
	});

	
	var routeLayer = L.geoJSON(route, {style: LineStyle});
	
	// var startEnd = L.geoJSON(startEndPoints, {
	// onEachFeature: onEachFeature
	// });
	
	var Start = L.geoJSON(StartPoint, {
		style: function(feature) {
			return {
				color: "Black"
			};
		},
		pointToLayer: function(feature, latlng) {
			return new L.CircleMarker(latlng, {
				radius: 8,
				fillOpacity: 2,
				fillColor: "Red"
			});
		},
		onEachFeature: onEachFeature
		});
		
	var End = L.geoJSON(EndPoint, {
		style: function(feature) {
			return {
				color: "Black"
			};
		},
		pointToLayer: function(feature, latlng) {
			return new L.CircleMarker(latlng, {
				radius: 8,
				fillOpacity: 2,
				fillColor: "Red"
			});
		},
		onEachFeature: onEachFeature
		});
		
	// Group the tour layers
	var tourElements = L.layerGroup([theatresLayer, poisLayer, routeLayer, Start, End]);
	
	// Set the map properties
	var map = L.map('map', {
		maxBounds: [
			[51.28676019, -0.51037513],
			[51.77973636, 0.543823242]
			],
		center: [51.51152024583139, -0.1263427734375],
		zoom: 15,
		minZoom: 10,
		maxZoom: 18,
		layers: [mapboxstreet, osm, mapboxsatellite, mapboxcontrast]
	});
	// Set the basemaps
	var baseMaps = {
		"Mapbox Street Map": mapboxstreet,
		"Mapbox High-Contrast Map": mapboxcontrast,
		"Mapbox Satellite Map": mapboxsatellite,
		"Open Street Maps": osm
	};
	// Set the layers
	var overlayMaps = {
		"Walking Tour": tourElements,
		"Theatres": theatresLayer,
		"Points of Interest": poisLayer,
		"Landmarks": landmarksLayer
	};
	// Add the basemaps and the layers to the map
	L.control.layers(baseMaps).addTo(map);
	
	L.control.layers(overlayMaps).addTo(map);
	



};