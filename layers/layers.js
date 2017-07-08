var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LPAN0 = new ol.format.GeoJSON();
var features_LPAN0 = format_LPAN0.readFeatures(json_LPAN0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LPAN0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LPAN0.addFeatures(features_LPAN0);var lyr_LPAN0 = new ol.layer.Vector({
                source:jsonSource_LPAN0, 
                style: style_LPAN0,
                title: 'LPAN<br />\
        <img src="styles/legend/LPAN0_0.png" /> 0<br />\
        <img src="styles/legend/LPAN0_1.png" /> 0.2<br />\
        <img src="styles/legend/LPAN0_2.png" /> 0.4<br />\
        <img src="styles/legend/LPAN0_3.png" /> 0.6<br />\
        <img src="styles/legend/LPAN0_4.png" /> 0.8<br />\
        <img src="styles/legend/LPAN0_5.png" /> 1<br />\
        <img src="styles/legend/LPAN0_6.png" /> <br />'
            });

lyr_LPAN0.setVisible(true);
var layersList = [baseLayer,lyr_LPAN0];
lyr_LPAN0.set('fieldAliases', {'CLAVEGEO': 'CLAVEGEO', 'CLAVEENT': 'CLAVEENT', 'DISTRITO_1': 'DISTRITO_1', 'SECCION': 'SECCION', 'CLAVEMUN': 'CLAVEMUN', 'NOM_MUN': 'NOM_MUN', 'volatilidlalupe_Sección': 'volatilidlalupe_Sección', 'volatilidlalupe_LPAN': 'volatilidlalupe_LPAN', 'volatilidlalupe_LPRI': 'volatilidlalupe_LPRI', });
lyr_LPAN0.set('fieldImages', {'CLAVEGEO': 'TextEdit', 'CLAVEENT': 'TextEdit', 'DISTRITO_1': 'TextEdit', 'SECCION': 'TextEdit', 'CLAVEMUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'volatilidlalupe_Sección': 'TextEdit', 'volatilidlalupe_LPAN': 'TextEdit', 'volatilidlalupe_LPRI': 'TextEdit', });
lyr_LPAN0.set('fieldLabels', {'CLAVEGEO': 'no label', 'CLAVEENT': 'no label', 'DISTRITO_1': 'no label', 'SECCION': 'no label', 'CLAVEMUN': 'no label', 'NOM_MUN': 'no label', 'volatilidlalupe_Sección': 'no label', 'volatilidlalupe_LPAN': 'no label', 'volatilidlalupe_LPRI': 'no label', });
lyr_LPAN0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});