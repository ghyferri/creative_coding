import './styles/reset.css';
import './styles/style.css';

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const questionDisplay = document.querySelector('#questionDisplay');
const questions = ['are u tired?', 'how are u feeling', 'yes or no'];
let counter = 0;

questionDisplay.textContent = questions[counter];

button1.onclick = () => {
  console.log('yes');
  nextQuestion();
};

button2.onclick = () => {
  console.log('no');
  nextQuestion();
};

const nextQuestion = () => {
  counter++;
  questionDisplay.textContent = questions[counter];
};
