var map = L.map('map').setView([41.3887900, 2.1589900], 13);

L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'

}).addTo(map);

var marker = L.marker([41.37387, 2.14488]).addTo(map);
marker.bindPopup("Ana & Elias's Apartment").openPopup();

var marker = L.marker([41.41343, 2.15318]).addTo(map);
marker.bindPopup("Park Güell").openPopup();

var marker = L.marker([41.36492, 2.15740]).addTo(map);
marker.bindPopup("Olympic Stadium").openPopup();

var marker = L.marker([41.37819, 2.19262]).addTo(map);
marker.bindPopup("Playa de la Barceloneta").openPopup();

var marker = L.marker([41.40396, 2.17515]).addTo(map);
marker.bindPopup("La Sagrada Familia").openPopup();

var marker = L.marker([41.38460, 2.17599]).addTo(map);
marker.bindPopup("Barcelona Cathedral").openPopup();
