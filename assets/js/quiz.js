const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText= document.getElementById('questionCounter');
const scoreText= document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "How many beans will you find inside the cherry of the Peaberry coffee plant?",
        choice1: "One bean",
        choice2: "Two Beans",
        choice3: "Four Beans",
        choice4: "Six Beans",
        answer: 1,
    },
    {
        question:
            "In which century did coffee first arrive to Europe?",
        choice1: "16th Century",
        choice2: "18th Century",
        choice3: "17th Century",
        choice4: "15th Century",
        answer: 3,
    },
    {
        question: " Which is the world's largest coffee producing nation?",
        choice1: "Ethiopia",
        choice2: "India",
        choice3: "Columbia",
        choice4: "Brazil",
        answer: 4,
    },
    {
        question: " Which of the following coffee drinks has the largest proportion of milk?",
        choice1: "Flat White",
        choice2: "Cappuccino",
        choice3: "Espresso",
        choice4: "Cafe Latte",
        answer: 4,
    },
    {
        question: " Which roast of coffee beans is considered the best for espresso or latte?",
        choice1: "Light",
        choice2: "Darka",
        choice3: "Medium dark",
        choice4: "Medium",
        answer: 3,
    },
    {
        question: " In the coffee roasting process, what is usually the last step?",
        choice1: "Yellowing",
        choice2: "Second crack",
        choice3: "Caramelisation",
        choice4: "Burning",
        answer: 2,
    },
    {
        question: " Which one of the statements below is NOT true about Robusta coffee?",
        choice1: "It grows well at lower altitudes",
        choice2: "It is a light coffee",
        choice3: "It has more caffeine than Arabica",
        choice4: "It is more prone to diseases",
        answer: 4,
    },
    {
        question: "About how many espresso beans are required to make one espresso?",
        choice1: "22",
        choice2: "42",
        choice3: "63",
        choice4: "31",
        answer: 2,
    },

    {
       question: " How long does it take for a coffee tree to reach maturity?",
        choice1: "8 years",
        choice2: "2 years",
        choice3: "5 years",
        choice4: "12 years",
        answer: 3,
    },
    {
      question: " How many cups of coffee are consumed each year in the world?",
       choice1: "900 million",
       choice2: "2 billion",
       choice3: "200 billion",
       choice4: "400 billion",
       answer: 4,
   },
   {
    question: " How many cups of coffee are consumed each day in the United States?",
     choice1: "400 million",
     choice2: "600 million",
     choice3: "800 million",
     choice4: "200 million",
     answer: 1,
 },
 {
  question: " Which European country consumes the most coffee?",
   choice1: "Italy",
   choice2: "France",
   choice3: "Norway",
   choice4: "FInland",
   answer: 4,
},
{
  question: " About what percentage of all coffee consumed is instant coffee?",
   choice1: "One half",
   choice2: "One third",
   choice3: "One fifth",
   choice4: "One tenth",
   answer: 4,
},
{
  question: " About how many coffee plants are there in Brazil?",
   choice1: "700 million",
   choice2: "2 billion",
   choice3: "7 billion",
   choice4: "3 billion",
   answer: 3,
},
{
  question: " What percentage of coffee is grown in the Americas?",
   choice1: "One fourth",
   choice2: "One third",
   choice3: "One half",
   choice4: "Two thirds",
   answer: 4,
},
{
  question: " Worldwide, about how many ships are being used to transport coffee?",
   choice1: "2300",
   choice2: "4000",
   choice3: "9000",
   choice4: "500",
   answer: 1,
},
{
  question: " What are coffee shops called in Japan?",
   choice1: "Haraguchi Houses",
   choice2: "Kintao",
   choice3: "Kissaten",
   choice4: "Banzai",
   answer: 4,
},
{
  question: " How many coffee trees are growing in Brazil?",
   choice1: "1 billion",
   choice2: "2 billion",
   choice3: "4 billion",
   choice4: "3 billion",
   answer: 3,
},
{
  question: " About what percent of drip-filter coffee is fat?",
   choice1: "0.6%",
   choice2: "1.2%",
   choice3: "3.4%",
   choice4: "6.8%",
   answer: 1,
},
{
  question: " About what percentage of espresso is fat?",
   choice1: "1%",
   choice2: "2.5%",
   choice3: "3.2%",
   choice4: "5.4%",
   answer: 2,
},
{
  question: " What material is typically used to make coffee sacks?",
   choice1: "Polyester",
   choice2: "Silk",
   choice3: "Cotton",
   choice4: "Hemp",
   answer: 4,
},
{
  question: " Which type of coffee is famous in South India",
   choice1: "Espresso",
   choice2: "Filter Coffee",
   choice3: "Iced Coffee",
   choice4: "Indian Coffee",
   answer: 2,
},
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
  };

  getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      localStorage.setItem("mostRecentScore", score);
      //go to the end page
      return window.location.assign("/conclude.html");
    }
    questionCounter++;
    questionCounterText.innerText=questionCounter + "/" + MAX_QUESTIONS ;
  
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
  
    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });
  
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
  };
  
  choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;
  
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
  
      const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
  
        if(classToApply === "correct") {
          incrementScore(CORRECT_BONUS);
        }
  
      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000);
    });
  });

  incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  } ;
  
  
  startGame();