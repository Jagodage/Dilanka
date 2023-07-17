/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// function initMap() {
//    const directionsService = new google.maps.DirectionsService();
//    const directionsRenderer = new google.maps.DirectionsRenderer();
//    const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 7,
//       center: { lat: 41.85, lng: -87.65 },
//    });
// }
// directionsRenderer.setMap(map);

const onChangeHandler = function () {
   let origin = document.getElementById("start").value;
   let destination = document.getElementById("end").value;
   document.getElementById("map-top").src = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyDrT-z_FpiGfZbiOAmkDTvgrs5x_T0U7-E&origin=${origin}&destination=${destination}&avoid=tolls|highways`;
};

document.getElementById("start").addEventListener("change", onChangeHandler);
document.getElementById("end").addEventListener("change", onChangeHandler);

// window.initMap = initMap;
