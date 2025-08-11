const ipifyUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=at_ejhYewfqwtYccU94h8y3BgoFbfhs9&ipAddress="
let ipErrorMessage = document.getElementById("ip-error");
let ipAddress = document.getElementById("ip-Address");
let ipLocation = document.getElementById("ip-Location");
let ipTimezone = document.getElementById("ip-Timezone");
let ipISP = document.getElementById("ip_ISP");
const ipRegex = /^(?:(?:\d{1,3}\.){3}\d{1,3}|(?:[A-Fa-f0-9]{1,4}:){7}[A-Fa-f0-9]{1,4})$/;
let currentIpifyUrl;
let locationIcon = L.icon({
    iconUrl: './images/icon-location.svg',

    iconSize:     [37, 65], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
let map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
function myFunction() {
    let ipInput = document.getElementById("ip-input");
    if (!ipRegex.test(ipInput.value)) {
        ipErrorMessage.style.display = "block";
        return;
    }
    ipErrorMessage.style.display = "none";
    currentIpifyUrl = ipifyUrl + ipInput.value;
    console.log(currentIpifyUrl);
    fetch(currentIpifyUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data Received:', data);
            ipAddress.textContent = data.ip || ipInput.value;
            ipLocation.textContent = data.location ? `${data.location.country}, ${data.location.region} ${data.location.postalCode}` : 'N/A';
            ipTimezone.textContent = data.location ? `UTC ${data.location.timezone}` : 'N/A';
            ipISP.textContent = data.isp || 'N/A';
            map.setView([data.location.lat, data.location.lng], 13);
            let marker = L.marker([data.location.lat, data.location.lng], {icon: locationIcon}).addTo(map);
        })
        .catch(error => {
            console.log('There was an error', error);
        });
    
};