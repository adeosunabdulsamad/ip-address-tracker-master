const ipifyUrl = "https://geo.ipify.org/api/v2/country?apiKey=at_ejhYewfqwtYccU94h8y3BgoFbfhs9&ipAddress="
let map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);