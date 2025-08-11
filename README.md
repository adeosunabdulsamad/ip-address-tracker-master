# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

[](./images/MacBook%20Pro-1754952516301.jpeg)


### Links

- Solution URL: [https://github.com/adeosunabdulsamad/ip-address-tracker-master](https://github.com/adeosunabdulsamad/ip-address-tracker-master)
- Live Site URL: [https://adeosunabdulsamad.github.io/ip-address-tracker-master/](https://adeosunabdulsamad.github.io/ip-address-tracker-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- API
- Javascript


### What I learned

I learnt how to fetch APIs using javascript and
how to read the API responses.

```js
window.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        ipAddress.textContent = data.ip;
        // Fetch location data using the IP address
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ejhYewfqwtYccU94h8y3BgoFbfhs9&ipAddress=${data.ip}`)
            .then(response => response.json())
            .then(locationData => {
                ipLocation.textContent = locationData.location ? `${locationData.location.country}, ${locationData.location.region} ${locationData.location.postalCode}` : 'N/A';
                ipTimezone.textContent = locationData.location ? `UTC ${locationData.location.timezone}` : 'N/A';
                ipISP.textContent = locationData.isp || 'N/A';
                map.setView([locationData.location.lat, locationData.location.lng], 13);
                marker = L.marker([locationData.location.lat, locationData.location.lng], {icon: locationIcon}).addTo(map);
            });
    });
});
```


### Continued development

I want to continue learning how to interact with APIs using javascript and learning more about improving functionality of the website

### Useful resources

- [w3schools](https://www.w3schools.com/) - Helped me understand complex CSS elements
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) - This is an amazing website for anything related to web development. I was able to understand how to use the fetch API thanks to this


## Author

- Frontend Mentor - [@adeosunabdulsamad]https://www.frontendmentor.io/profile/adeosunabdulsamad)

