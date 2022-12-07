  var customOptions ={
        'maxWidth': '150',
        'className' : 'custom'
  }
  
var nintendoPopup = "NINTENDO<hr>A empresa japonesa que inovou a área da Realidade Aumentada ao trazer experiências AR para a sua consola portátil, a Nintendo 3DS, por meio dos chamados 'AR cards'.<br/><img src='3ds.png' alt='maptime logo gif' width='150px'/>";
var microsoftPopup = "MICROSOFT<hr>A gigante da indústria de tecnologia que agora aposta na Realidade Aumentada como atrativo principal do seu novo jogo para dispositivos móveis: 'Minecraft World'.<br/><img src='mine.png' alt='maptime logo gif' width='150px'/>";
var riotPopup = "RIOT GAMES<hr>Criadora do jogo mais jogado do mundo, Riot Games surpreendeu os seus fãs com um show em Realidade Aumentada na cerimônia de abertura do seu campeonato mundial de League of Legends em 2018.<br/><img src='kda.png' alt='maptime logo gif' width='150px'/>";

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
    L.marker([34.9686444587, 135.753718652], {icon: redIcon}).bindPopup(nintendoPopup, customOptions),
    L.marker([47.6370891183, -122.123736172], {icon: greenIcon}).bindPopup(microsoftPopup, customOptions),
    L.marker([34.03255, -118.45742], {icon: orangeIcon}).bindPopup(riotPopup, customOptions)
];
for(i in pontos) { pontos[i].addTo(map);
}

var grupo = new L.featureGroup(pontos); map.fitBounds(grupo.getBounds());

