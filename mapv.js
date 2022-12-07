var customOptions ={
        'maxWidth': '150',
        'className' : 'custom'
  }
  
var OculusVRPopup = "Oculus VR<hr> Devido ao seu grande sucesso, o Facebook, em 2014, adquiriu o Oculus Rift por 2 bilhões de dólares e passou a desenvolver um novo projeto intitulado de Oculus VR.<br/><img src='ovr.jpg' alt='Oculus VR' width='150px'/>";
var SamsungPopup = "Samsung<hr>Situada em Suwon,Korea a Samsung é uma empresa revolucionária na área da realidade virtual destacando-se pela produção do headset Samsung Gear VR, em 2015.<br/><img src='gvr.jpg' alt='Samsung Gear VR' width='150px'/>";
var UnityPopup = "Unity<hr>É uma plataforma de produção de artigos de VR e fornecimento de componentes de jogos VR localizada em San Francisco, USA.<br/><img src='unity.jpg' alt='Unity' width='150px'/>";

var greenIcon = L.icon({ 
    
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76] 
    
});

var redIcon = L.icon({ 
    
    iconUrl: 'leaf-red.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76] 
    
});

var orangeIcon = L.icon({ 
    
    iconUrl: 'leaf-orange.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76] 
    
});

var map = new L.Map("oMeuMapa", {center: [40.633258,-8.659097],zoom: 15});
var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; var osmAttrib="Map data OpenStreetMap contributors";
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
map.addLayer(osm);

var pontos = [
    L.marker([35.1258000, -117.9859000], {icon: redIcon}).bindPopup(OculusVRPopup, customOptions),
    L.marker([37.2911100, 127.0088900], {icon: greenIcon}).bindPopup(SamsungPopup, customOptions),
    L.marker([37.7749300,-122.4194200], {icon: orangeIcon}).bindPopup(UnityPopup, customOptions)
];
for(i in pontos) { pontos[i].addTo(map);
}

var grupo = new L.featureGroup(pontos); map.fitBounds(grupo.getBounds());


