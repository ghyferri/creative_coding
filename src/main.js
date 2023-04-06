import './styles/reset.css';
import './styles/style.css';
import data from '../questions.json' assert { type: 'JSON' };
import Purple from './scripts/purple.js';
import Orange from './scripts/orange.js';
import Green from './scripts/green.js';

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const body = document.querySelector('body');
const questionDisplay = document.querySelector('#questionDisplay');

let currentQuestion = data.questions[0];
questionDisplay.textContent = data.questions[0].questionText;
let beat = new Audio('../videos/sound0.mp3');
beat.play();

button1.onclick = () => {
  showNextQuestion(currentQuestion.nextQuestionIdYes);
  checkLastQuestion(currentQuestion);
  playAudio(currentQuestion);
};

button2.onclick = () => {
  showNextQuestion(currentQuestion.nextQuestonIdNo);
  checkLastQuestion(currentQuestion);
  playAudio(currentQuestion);
};

const showNextQuestion = (id) => {
  questionDisplay.textContent = data.questions[id].questionText;
  currentQuestion = data.questions[id];
};

const playAudio = (question) => {
  beat.pause();
  beat = new Audio(question.audioPath);
  beat.play();
};

const checkLastQuestion = (question) => {
  if (question.nextQuestionIdYes == undefined) {
    button1.style.display = 'none';
    button2.style.display = 'none';
    body.style.background = 'transparent';
  }
  switch (question.questionType) {
    case 'purple':
      body.style.backgroundColor = 'blue';
      new Purple();
      playMusic('g7Xz48z3l8o');
      break;
    case 'green':
      body.style.backgroundColor = 'blue';
      new Green();
      playMusic('pX_jySkFIK4');
      break;
    case 'yellow':
      body.style.backgroundColor = '#bc4d02';
      new Orange();
      playMusic('Ft-jZcf0Wb8');
    default:
      break;
  }
};

// This needs to point to the web socket in the Node-RED flow
// ... in this case it's /simple
var wsUri = 'ws://' + '192.168.100.1:1880' + '/ws';

window.onload = () => {
  wsConnect();
};

function wsConnect() {
  console.log('connect', wsUri);
  var ws = new WebSocket(wsUri);

  ws.onmessage = function (msg) {
    console.log(msg.data);
    if (msg.data == 'yes') {
      showNextQuestion(currentQuestion.nextQuestionIdYes);
      checkLastQuestion(currentQuestion);
      playAudio(currentQuestion);
    } else {
      showNextQuestion(currentQuestion.nextQuestonIdNo);
      checkLastQuestion(currentQuestion);
      playAudio(currentQuestion);
    }
  };

  ws.onopen = function () {
    console.log('Connected');
  };

  ws.onclose = function () {
    // in case of lost connection tries to reconnect every 3 secs
    setTimeout(wsConnect, 3000);
  };

  ws.disconnect = function () {
    console.log('Disconnected');
  };
}

function update() {
  // now send the output over the websocket
  if (ws) {
    ws.send(output);
  }
}

let info = document.getElementById('info');
function playMusic(videoId) {
  console.log('thi is fired');
  let player = new YT.Player('player', {
    videoId: videoId,
    loop: true,
    events: {
      onReady: function (e) {
        info.innerHTML = 'video is loaded';
        e.target.playVideo();
      },
      onStateChange: function (event) {
        if (event.data === 1) {
          info.innerHTML = 'video started playing';
        }
      },
    },
  });
  // you can do more stuff with the player variable
}
