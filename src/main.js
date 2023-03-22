import './styles/reset.css';
import './styles/style.css';
import data from '../si.json' assert { type: 'JSON' };

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const questionDisplay = document.querySelector('#questionDisplay');

let currentQuestion = data.questions[0];
questionDisplay.textContent = data.questions[0].questionText;

button1.onclick = () => {
  showNextQuestion(currentQuestion.nextQuestionIdYes);
  currentQuestion = data.questions[currentQuestion.nextQuestionIdYes];
};

button2.onclick = () => {
  showNextQuestion(currentQuestion.nextQuestonIdNo);
  currentQuestion = data.questions[currentQuestion.nextQuestonIdNo];
};

const showNextQuestion = (id) => {
  questionDisplay.textContent = data.questions[id].questionText;
};
