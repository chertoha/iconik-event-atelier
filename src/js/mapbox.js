import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker } from "mapbox-gl";

const map = new Map({
  container: "js-footer-map", // container ID
  style: "mapbox://styles/chertoha/cljcorzmr005n01o40t8e3je8", // style URL
  center: [55.1458, 25.083], // starting position [lng, lat]
  zoom: 12, // starting zoom
  accessToken: process.env.MAPBOX_ACCESS_TOKEN,
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [55.146, 25.08999],
      },
      properties: {
        title: "Mapbox",
        description: "Dubai 1",
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
        description: "Dubai 2",
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
        description: "Dubai 3",
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
        description: "Dubai 4",
      },
    },
  ],
};

for (const feature of geojson.features) {
  const el = document.createElement("button");
  el.className = "map-marker button";
  new Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
}
