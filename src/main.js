import './styles/reset.css';
import './styles/style.css';
import data from '../questions.json' assert { type: 'JSON' };

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const questionDisplay = document.querySelector('#questionDisplay');

let currentQuestion = data.questions[0];
questionDisplay.textContent = data.questions[0].questionText;

button1.onclick = () => {
  showNextQuestion(currentQuestion.nextQuestionIdYes);
  checkLastQuestion(currentQuestion);
};

button2.onclick = () => {
  showNextQuestion(currentQuestion.nextQuestonIdNo);
  checkLastQuestion(currentQuestion);
};

const showNextQuestion = (id) => {
  questionDisplay.textContent = data.questions[id].questionText;
  currentQuestion = data.questions[id];
};

const checkLastQuestion = (question) => {
  if (question.nextQuestionIdYes == undefined) {
    button1.style.display = 'none';
    button2.style.display = 'none';
  }
};
