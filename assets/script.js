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


const field = document.querySelector("#comment");
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('button is-info');
// const clear = document.getElementById('clear')
const submit = document.querySelector('#commentSubmission')
const comments = document.querySelector("#comments")
let comments_arr = [];

 const display_comments = (comments_arr) => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}</li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

 // clear.onclick = function(event){
 // event.preventDefault();
  
  // comments_arr.length = 0;
  
 // display_comments();
//}

submit.addEventListener("click",function(event){
    event.preventDefault();
    console.log(event)
    const comments_arr = (localStorage.getItem("comments_arr"))? JSON.parse(localStorage.getItem("comments_arr")):[]
    const content = field.value;
    console.log("test",content)
    if(content.length > 0){ 
      comments_arr.push(content);
      localStorage.setItem("comments_arr", JSON.stringify(comments_arr))
      display_comments(comments_arr); 
      field.value = '';
    }
}
)