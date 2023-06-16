var apiKey = 'AIzaSyD-rKT10mNdWBXj3fyxr9Fv4dMvWKualf8';
var videoIds = ['-Zqap0QzyJs', 'R7Y_mbkmN3c', '5rdwr9ThL4I', 'iM9yIreIGEY', 'VD7IB-WHtGs', 'W5oJgvbUlmM', 'LjHNEhqlBNk', 'kWGfOuw9PpY', 'OZzadlZBgN0', 'zY3BvnHIEnI'];

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = [];
          
function onYouTubeIframeAPIReady() {
  for (var i = 0; i < videoIds.length; i++) {
  var playerDiv = document.getElementById('player' + (i + 1));
players[i] = new YT.Player(playerDiv.id, {
  height: '360',
  width: '640',
  videoId: videoIds[i],
  playerVars: {
    'autoplay': 0,
    'controls': 1,
    'rel': 0,
},
events: {
  'onReady': onPlayerReady,
  'onStateChange': onPlayerStateChange
      }
    });
  }
}

let mapOptions = {
  center:[30.2653, -97.7512],
  zoom:12
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


let locations = [
  {
  "id": 1,
  "lat": 30.20855,
  "long": -97.72972,
  "src":'images/Meanwhile.png',
  "title":"Meanwhile Brewing",
  "url":"https://www.meanwhilebeer.com/"
  },
  {
  "id": 2,
  "lat": 30.2700576,
  "long": -97.7360877,
  "src":'images/Mowhawk.png',
  "title":"Mohawk",
  "url":"https://mohawkaustin.com/"
  },
  {
    "id": 3,
    "lat": 30.26606,
    "long": -97.74039,
    "src":'images/Antones.jpeg',
    "title":"Antones",
    "url":"https://antonesnightclub.com/"
  },
  {
    "id": 4,
    "lat": 30.29537,
    "long": -97.74203,
    "src":'images/Spiderhouse.png',
    "title":"Spiderhouse Ballroom",
    "url":"https://www.ballroomtx.com/"
  }
]


let popupOption = {
  "closeButton":false
}

locations.forEach(element => {
  new L.Marker([element.lat,element.long]).addTo(map)
  .on("mouseover",event =>{
      event.target.bindPopup('<div class="card"><img src="'+element.src+'" width="80" height="80" alt="'+element.title+'">   <h3>'+element.title+'</h3></div>',popupOption).openPopup();
  })
  .on("mouseout", event => {
      event.target.closePopup();
  })
  .on("click" , () => {
      window.open(element.url);
  })
});