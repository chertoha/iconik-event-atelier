import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

const map = new mapboxgl.Map({
  container: "js-footer-map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  //   center: [-74.5, 40], // starting position [lng, lat]
  center: [55.155366468681926, 25.095146491634175], // starting position [lng, lat]
  zoom: 14, // starting zoom
});

// const marker1 = new mapboxgl.Marker()
//   .setLngLat([55.154057794998, 25.087113364199414])
//   .addTo(map);

// const marker2 = new mapboxgl.Marker()
//   .setLngLat([55.15987547924298, 25.095008326403175])
//   .addTo(map);

// const marker3 = new mapboxgl.Marker()
//   .setLngLat([55.13723024060895, 25.082660778242523])
//   .addTo(map);

// const marker4 = new mapboxgl.Marker()
//   .setLngLat([55.145386343664, 25.0746078936669])
//   .addTo(map);

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [55.154057794998, 25.087113364199414],
      },
      properties: {
        title: "Mapbox",
        description: "Dubai ",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [55.15987547924298, 25.095008326403175],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [55.13723024060895, 25.082660778242523],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [55.145386343664, 25.0746078936669],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
  ],
};

for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
}
