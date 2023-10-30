//document.getElementById('reset').addEventListener('click', resetQuiz);

let currentQuestionIndex = 0;

var score = 0;
let questions = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'What is the square root of 81?',
        options: ['8', '9', '10', '11'],
        correctAnswer: '9'
    },
    {
        question: 'Which river flows through Egypt?',
        options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
        correctAnswer: 'Nile'
    },
    {
        question: 'Which planet is known as the ‘Red Planet’?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
        correctAnswer: 'Leonardo da Vinci'
    }
];

  

loadQuestion();


function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question').textContent = currentQuestion.question;
        document.getElementById('option1').value = currentQuestion.options[0];
        document.getElementById('option2').value = currentQuestion.options[1];
        document.getElementById('option3').value = currentQuestion.options[2];
        document.getElementById('option4').value = currentQuestion.options[3];
        document.getElementById('option1').nextElementSibling.textContent = currentQuestion.options[0];
        document.getElementById('option2').nextElementSibling.textContent = currentQuestion.options[1];
        document.getElementById('option3').nextElementSibling.textContent = currentQuestion.options[2];
        document.getElementById('option4').nextElementSibling.textContent = currentQuestion.options[3];
        
        document.getElementById('next').style.display='block';
        document.getElementById('submit').style.display='none';
    } 
    if (currentQuestionIndex == questions.length-1) {
        
        document.getElementById('next').style.display='none';
        document.getElementById('submit').style.display='block';
        
    }
    if (currentQuestionIndex==0) {
        document.getElementById('prev').style.display='none';
    }else{
        document.getElementById('prev').style.display='block';
    }
}
// Function to show the div
function showAlert() {
    // Show the div
    document.getElementById('alertDiv').style.display = 'block';
  
    // Hide the div after 5 seconds
    setTimeout(function() {
      document.getElementById('alertDiv').style.display = 'none';
    }, 3000);
  }
  
  function nextQuestion() {
      let selectedOption = document.querySelector('input[type="radio"]:checked');
      if (!selectedOption) {
          showAlert();
          return;
      }
  
      let correctAnswer = questions[currentQuestionIndex].correctAnswer;
      if (correctAnswer === selectedOption.value) {
          score+=20;
          console.log(score)
      }
  
      currentQuestionIndex++;
      resetRadio();
      loadQuestion();
  }
  function prevQuestion(){
      currentQuestionIndex--;
      resetRadio();
      loadQuestion();
  }
  function resetRadio(){
      var radios = document.getElementsByName('option');
  
  // Loop through each radio button
      for(var i = 0; i < radios.length; i++){
      // Reset the checked property
      radios[i].checked = false;
      }
  }
  console.log(score)

  function finishQuiz() {
  nextQuestion();
  console.log(score);
  document.body.style.backgroundImage = "url('./img/result.jpg')";
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  
  if (score>=50) {
    document.getElementById('scoreWin').textContent = score;
    document.getElementById('win').style.display='block';
    document.getElementById('lose').style.display='none';
  }
  else{
    document.getElementById('scoreLose').textContent = score;
    document.getElementById('lose').style.display='block';
    document.getElementById('win').style.display='none';
  }
}
  function resetQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      finishQuiz();
      document.getElementById('quiz-container').style.display = 'block';
      document.getElementById('result-container').style.display = 'none';
      loadQuestion();
      resetRadio();
  }