import './styles/reset.css';
import './styles/style.css';
import data from '../questions.json' assert { type: 'JSON' };

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const body = document.querySelector('body');

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
  switch (question.questionType) {
    case 'purple':
      body.style.backgroundColor = 'purple';
      break;
    case 'green':
      body.style.backgroundColor = 'green';
      break;
    case 'yellow':
      body.style.backgroundColor = 'yellow';
    default:
      break;
  }
};
