import './styles/reset.css';
import './styles/style.css';
import data from '../questions.json' assert { type: 'JSON' };
import Purple from './scripts/purple.js';
import Orange from './scripts/orange.js';
import Green from './scripts/green.js';
import activateScene from './scripts/activateScene.js';

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const body = document.querySelector('body');
const start = document.querySelector('#start');
const imageLinksboven = document.querySelector('.imageLinksboven');
const imageRechtsonder = document.querySelector('.imageRechtsonder');
const startbutton = document.querySelector('#startbutton');
const questionDisplay = document.querySelector('#questionDisplay');
let started = false;
activateScene('gEthoi9WREoF6xY');
button1.style.display = 'none';
button2.style.display = 'none';
questionDisplay.style.display = 'none';
let pushCounter = 0;
let currentQuestion = data.questions[0];
console.log(currentQuestion);

// questionDisplay.textContent = data.questions[0].questionText;
let introBeat = new Audio('../videos/startmusic.mp3');
let beat = new Audio('../videos/sound0.mp3');
introBeat.play();
// startbutton.onclick = () => {
//   pushCounter++;
//   questionDisplay.textContent = data.questions[0].questionText;
//   currentQuestion = data.questions[0];
//   button1.style.display = 'block';
//   button2.style.display = 'block';
//   questionDisplay.style.display = 'block';

//   questionDisplay.classList.remove('hidden');
//   questionDisplay.style.color = 'e0c1ff';
//   start.style.display = 'none';
//   startbutton.style.display = 'none';
//   introBeat.pause();
//   beat.play();
// };

button1.onclick = () => {
  showNextQuestion(currentQuestion.nextQuestionIdYes);
  checkLastQuestion(currentQuestion);
  playAudio(currentQuestion);
};

button2.onclick = () => {
  showNextQuestion(currentQuestion.nextQuestonIdNo);
  checkLastQuestion(currentQuestion);
  playAudio(currentQuestion);
  activateScene('mJwFJbfv5z6QQMI');
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

const switchEverything = (canvas) => {
  start.style.display = 'block';
  startbutton.style.display = ' block';
  introBeat.play();
  currentQuestion = data.questions[0];
  body.style.backgroundColor = '#121557';
  canvas.canvas.remove();
  imageLinksboven.style.display = 'block';
  imageRechtsonder.style.display = 'block';
  beat = new Audio('../videos/sound0.mp3');
};

const checkLastQuestion = (question) => {
  if (question.nextQuestionIdYes == undefined) {
    button1.style.display = 'none';
    button2.style.display = 'none';
    questionDisplay.style.color = 'e0c1ff';
    body.style.background = 'white';
    imageLinksboven.style.display = 'none';
    imageRechtsonder.style.display = 'none';
    console.log(started + 'dit is checklast ');
  }
  switch (question.questionType) {
    case 'purple':
      body.style.backgroundColor = 'blue';
      pushCounter = 0;
      let purple = new Purple();
      activateScene('H7fYKViWcHfyrb5');
      purple;
      setTimeout(function () {
        questionDisplay.classList.add('hidden');
        let purpleAudio = new Audio('../videos/3sec.mp3');
        purpleAudio.play();
        purpleAudio.onended = () => {
          switchEverything(purple);
          started = false;
        };
      }, 3000);
      break;
    case 'green':
      body.style.backgroundColor = 'blue';
      pushCounter = 0;
      let green = new Green();
      activateScene('mJwFJbfv5z6QQMI');
      green;
      setTimeout(function () {
        questionDisplay.classList.add('hidden');
        let greenAudio = new Audio('../videos/session3.mp3');
        greenAudio.play();
        greenAudio.onended = () => {
          switchEverything(green);
          started = false;
        };
      }, 3000);
      break;
    case 'yellow':
      body.style.backgroundColor = '#bc4d02';
      pushCounter = 0;
      let orange = new Orange();
      activateScene('0ypa35dRcHjCm73');
      orange;
      setTimeout(function () {
        questionDisplay.classList.add('hidden');
        let orangeAudio = new Audio('../videos/session2.mp3');
        orangeAudio.play();
        orangeAudio.onended = () => {
          switchEverything(orange);
          started = false;
        };
      }, 3000);
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

    if (msg.data == 'start' && started == false) {
      started = true;
      pushCounter++;
      questionDisplay.textContent = data.questions[0].questionText;
      console.log(questionDisplay);
      currentQuestion = data.questions[0];
      console.log(currentQuestion.questionText);

      button1.style.display = 'block';
      button2.style.display = 'block';
      questionDisplay.style.display = 'block';
      questionDisplay.classList.remove('hidden');
      questionDisplay.style.color = 'e0c1ff';
      start.style.display = 'none';
      introBeat.pause();
      beat.play();
    }

    if (started) {
      if (pushCounter != 0) {
        if (msg.data == 'yes') {
          showNextQuestion(currentQuestion.nextQuestionIdYes);
          checkLastQuestion(currentQuestion);
          playAudio(currentQuestion);
        } else {
          showNextQuestion(currentQuestion.nextQuestonIdNo);
          checkLastQuestion(currentQuestion);
          playAudio(currentQuestion);
        }
      }
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
