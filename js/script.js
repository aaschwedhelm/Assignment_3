var map = L.map('map').setView([41.3887900, 2.1589900], 13);

L.tileLayer('ttp://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    maxZoom: 18
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
