var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gloucestershire_PROW_Jan2025_1 = new ol.format.GeoJSON();
var features_Gloucestershire_PROW_Jan2025_1 = format_Gloucestershire_PROW_Jan2025_1.readFeatures(json_Gloucestershire_PROW_Jan2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gloucestershire_PROW_Jan2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gloucestershire_PROW_Jan2025_1.addFeatures(features_Gloucestershire_PROW_Jan2025_1);
var lyr_Gloucestershire_PROW_Jan2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gloucestershire_PROW_Jan2025_1, 
                style: style_Gloucestershire_PROW_Jan2025_1,
                popuplayertitle: 'Gloucestershire_PROW_Jan2025',
                interactive: true,
                title: '<img src="styles/legend/Gloucestershire_PROW_Jan2025_1.png" /> Gloucestershire_PROW_Jan2025'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Gloucestershire_PROW_Jan2025_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Gloucestershire_PROW_Jan2025_1];
lyr_Gloucestershire_PROW_Jan2025_1.set('fieldAliases', {});
lyr_Gloucestershire_PROW_Jan2025_1.set('fieldImages', {});
lyr_Gloucestershire_PROW_Jan2025_1.set('fieldLabels', {});
lyr_Gloucestershire_PROW_Jan2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});