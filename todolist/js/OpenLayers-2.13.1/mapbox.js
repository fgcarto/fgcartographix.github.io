var basemap = new OpenLayers.Layer.XYZ(
    "Basemap",
    [
        "'http://a.tiles.mapbox.com/v3/fgcartographix.map-buwxz6qa/{z}/{x}/{y}.png'"
    ], {
        attribution: "Tiles &copy; <a href='http://mapbox.com/'>MapBox</a>"
        sphericalMercator: true,
        wrapDateLine: true,
        numZoomLevels: 9
    }
);

var map = new OpenLayers.Map({
    div: "map",
    layers: [basemap],
    center: [45.57, -73.70],
    zoom: 9
});
