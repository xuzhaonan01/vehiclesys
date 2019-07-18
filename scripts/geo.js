var map;
var view;
var layer;
var overlay;
var imgOverlay;

function loadmap(){
    require([
        'esri/map',
        "esri/geometry/Extent",
        "esri/layers/MapImage",
        "esri/layers/MapImageLayer"
    ],
    function(Map,Extent,MapImage,MapImageLayer){
        var extent = new Extent({
            xmin: 11977060.19485743 ,
            ymin: 2827073.06742721,
            xmax: 12141399.805670623,
            ymax: 2949372.312683539,
            spatialReference: {
                wkid: 102100
            }
        });
        map = new Map("mymap",{
            basemap:"streets",
            extent:extent
        });


        // imgOverlay = new MapImageLayer({
        //     id:"rasterlayer"
        // });

        // map.addLayer(imgOverlay,1);
    });
}