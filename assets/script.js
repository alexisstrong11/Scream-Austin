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
function onPlayerReady(event) {
  console.log('Player is ready.');
// We can perform additional operations here if needed
}
function onPlayerStateChange(event) {
// We can perform additional operations here if needed
}


const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('button is-info');
// const clear = document.getElementById('clear')
const submit = document.querySelector('#submitbutton')

const comments_arr = [];

const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

clear.onclick = function(event){
  event.preventDefault();
  
   comments_arr.length = 0;
  
  display_comments();
}

submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ 
      comments_arr.push(content);
      display_comments(); 
      field.value = '';
    }
}