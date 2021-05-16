var wms_layers = [];

var lyr_download_modified_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Base Map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/download_modified_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5984131.896013, 6052753.846634, -5871019.295754, 6116482.980417]
                            })
                        });
var format_1945_1 = new ol.format.GeoJSON();
var features_1945_1 = format_1945_1.readFeatures(json_1945_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1945_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1945_1.addFeatures(features_1945_1);
var lyr_1945_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1945_1, 
                style: style_1945_1,
                interactive: true,
    title: 'Populations<br />\
    <img src="styles/legend/1945_1_0.png" /> 35 - 213<br />\
    <img src="styles/legend/1945_1_1.png" /> 213 - 391<br />\
    <img src="styles/legend/1945_1_2.png" /> 391 - 569<br />\
    <img src="styles/legend/1945_1_3.png" /> 569 - 747<br />\
    <img src="styles/legend/1945_1_4.png" /> 747 - 925<br />\
    <img src="styles/legend/1945_1_5.png" /> 925 - 1103<br />\
    <img src="styles/legend/1945_1_6.png" /> 1103 - 1281<br />\
    <img src="styles/legend/1945_1_7.png" /> 1281 - 1460<br />\
    <img src="styles/legend/1945_1_8.png" /> 1460 - 1638<br />\
    <img src="styles/legend/1945_1_9.png" /> 1638 - 1816<br />\
    <img src="styles/legend/1945_1_10.png" /> 1816 - 1994<br />\
    <img src="styles/legend/1945_1_11.png" /> 1994 - 2172<br />\
    <img src="styles/legend/1945_1_12.png" /> 2172 - 2350<br />\
    <img src="styles/legend/1945_1_13.png" /> 2350 - 2528<br />\
    <img src="styles/legend/1945_1_14.png" /> 2528 - 2706<br />'
        });

lyr_download_modified_0.setVisible(true);lyr_1945_1.setVisible(true);
var layersList = [lyr_download_modified_0,lyr_1945_1];
lyr_1945_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Pop.': 'Pop.', });
lyr_1945_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Pop.': 'Range', });
lyr_1945_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Pop.': 'inline label', });
lyr_1945_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});