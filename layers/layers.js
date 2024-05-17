var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_batas_administrasi_Pengandraan_Line_1 = new ol.format.GeoJSON();
var features_batas_administrasi_Pengandraan_Line_1 = format_batas_administrasi_Pengandraan_Line_1.readFeatures(json_batas_administrasi_Pengandraan_Line_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_administrasi_Pengandraan_Line_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_administrasi_Pengandraan_Line_1.addFeatures(features_batas_administrasi_Pengandraan_Line_1);
var lyr_batas_administrasi_Pengandraan_Line_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_administrasi_Pengandraan_Line_1, 
                style: style_batas_administrasi_Pengandraan_Line_1,
                popuplayertitle: "batas_administrasi_Pengandraan_Line",
                interactive: true,
                title: '<img src="styles/legend/batas_administrasi_Pengandraan_Line_1.png" /> batas_administrasi_Pengandraan_Line'
            });
var format_jalantransportasi_2 = new ol.format.GeoJSON();
var features_jalantransportasi_2 = format_jalantransportasi_2.readFeatures(json_jalantransportasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalantransportasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalantransportasi_2.addFeatures(features_jalantransportasi_2);
var lyr_jalantransportasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalantransportasi_2, 
                style: style_jalantransportasi_2,
                popuplayertitle: "jalan transportasi",
                interactive: true,
                title: '<img src="styles/legend/jalantransportasi_2.png" /> jalan transportasi'
            });
var format_kawasan_pariwisata_3 = new ol.format.GeoJSON();
var features_kawasan_pariwisata_3 = format_kawasan_pariwisata_3.readFeatures(json_kawasan_pariwisata_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kawasan_pariwisata_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kawasan_pariwisata_3.addFeatures(features_kawasan_pariwisata_3);
var lyr_kawasan_pariwisata_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kawasan_pariwisata_3, 
                style: style_kawasan_pariwisata_3,
                popuplayertitle: "kawasan_pariwisata",
                interactive: true,
                title: '<img src="styles/legend/kawasan_pariwisata_3.png" /> kawasan_pariwisata'
            });

lyr_OSMStandard_0.setVisible(true);lyr_batas_administrasi_Pengandraan_Line_1.setVisible(true);lyr_jalantransportasi_2.setVisible(true);lyr_kawasan_pariwisata_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_batas_administrasi_Pengandraan_Line_1,lyr_jalantransportasi_2,lyr_kawasan_pariwisata_3];
lyr_batas_administrasi_Pengandraan_Line_1.set('fieldAliases', {'objectid': 'objectid', 'desa': 'desa', 'kabupaten': 'kabupaten', 'kecamatan': 'kecamatan', 'provinsi': 'provinsi', 'l_desa_ha': 'l_desa_ha', 'sumberdata': 'sumberdata', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_jalantransportasi_2.set('fieldAliases', {'namrjl': 'namrjl', 'konrjl': 'konrjl', 'matrjl': 'matrjl', 'fgsrjl': 'fgsrjl', 'utkrjl': 'utkrjl', 'tolrjl': 'tolrjl', 'wlyrjl': 'wlyrjl', 'autrjl': 'autrjl', 'klsrjl': 'klsrjl', 'spcrjl': 'spcrjl', 'jparjl': 'jparjl', 'arhrjl': 'arhrjl', 'starjl': 'starjl', 'kllrjl': 'kllrjl', 'medrjl': 'medrjl', 'locrjl': 'locrjl', 'jarrjl': 'jarrjl', 'fcode': 'fcode', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'shape_leng': 'shape_leng', });
lyr_kawasan_pariwisata_3.set('fieldAliases', {'kaw_wisata': 'kaw_wisata', 'des_wisata': 'des_wisata', 'sumberdata': 'sumberdata', });
lyr_batas_administrasi_Pengandraan_Line_1.set('fieldImages', {'objectid': 'Range', 'desa': 'TextEdit', 'kabupaten': 'TextEdit', 'kecamatan': 'TextEdit', 'provinsi': 'TextEdit', 'l_desa_ha': 'TextEdit', 'sumberdata': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_jalantransportasi_2.set('fieldImages', {'namrjl': 'TextEdit', 'konrjl': 'Range', 'matrjl': 'Range', 'fgsrjl': 'Range', 'utkrjl': 'Range', 'tolrjl': 'Range', 'wlyrjl': 'Range', 'autrjl': 'Range', 'klsrjl': 'Range', 'spcrjl': 'Range', 'jparjl': 'Range', 'arhrjl': 'Range', 'starjl': 'Range', 'kllrjl': 'TextEdit', 'medrjl': 'Range', 'locrjl': 'Range', 'jarrjl': 'Range', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_kawasan_pariwisata_3.set('fieldImages', {'kaw_wisata': 'TextEdit', 'des_wisata': 'TextEdit', 'sumberdata': 'TextEdit', });
lyr_batas_administrasi_Pengandraan_Line_1.set('fieldLabels', {'objectid': 'inline label - always visible', 'desa': 'inline label - always visible', 'kabupaten': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'provinsi': 'inline label - always visible', 'l_desa_ha': 'inline label - always visible', 'sumberdata': 'inline label - always visible', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_jalantransportasi_2.set('fieldLabels', {'namrjl': 'inline label - always visible', 'konrjl': 'no label', 'matrjl': 'no label', 'fgsrjl': 'no label', 'utkrjl': 'no label', 'tolrjl': 'no label', 'wlyrjl': 'no label', 'autrjl': 'no label', 'klsrjl': 'no label', 'spcrjl': 'no label', 'jparjl': 'no label', 'arhrjl': 'no label', 'starjl': 'no label', 'kllrjl': 'no label', 'medrjl': 'no label', 'locrjl': 'no label', 'jarrjl': 'no label', 'fcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'shape_leng': 'no label', });
lyr_kawasan_pariwisata_3.set('fieldLabels', {'kaw_wisata': 'inline label - always visible', 'des_wisata': 'inline label - always visible', 'sumberdata': 'inline label - always visible', });
lyr_kawasan_pariwisata_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});