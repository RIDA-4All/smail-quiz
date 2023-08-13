const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');

const questions = [
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language'],
    answer: 0
  },
  {
    question: 'Which property is used to change the background color of an element in CSS?',
    options: ['color', 'background-color', 'bgcolor'],
    answer: 1
  },
  {
    question: 'Which function is used to select an HTML element in JavaScript?',
    options: ['document.getElement', 'document.select', 'document.querySelector'],
    answer: 2
  }
];

let currentQuestionIndex = 0;

function displayQuestion(question) {
  questionElement.textContent = question.question;
  optionsElement.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].answer) {
    // Handle correct answer
    alert('Correct!');
  } else {
    // Handle wrong answer
    alert('Wrong! Try again.');
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion(questions[currentQuestionIndex]);
  } else {
    alert('Quiz completed!');
  }
}

nextButton.addEventListener('click', nextQuestion);

// Start the quiz
displayQuestion(questions[currentQuestionIndex]);
