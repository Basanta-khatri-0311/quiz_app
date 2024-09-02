const startButton = document.querySelector('.start-btn')
const startContainer = document.querySelector('.start-container')
const quizContainer = document.querySelector('.quiz-container')
const soundToggle = document.querySelector('.sound-toggle');
const body = document.querySelector('body')
const questionIndexing = document.querySelector('.question-index')

soundToggle.addEventListener('click', function() {
  const icon = this.querySelector('i');

  if (icon.classList.contains('ri-volume-up-line')) {
    icon.classList.remove('ri-volume-up-line');
    icon.classList.add('ri-volume-mute-fill');
  } else {
    icon.classList.remove('ri-volume-mute-fill');
    icon.classList.add('ri-volume-up-line');
  }
});

startButton.addEventListener('click',()=>{
    startContainer.style.display = 'none'
    quizContainer.style.display = 'flex'
    body.style.backgroundColor = '#CCE2C2'
})

const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlink Tool Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      correctAnswer: "<ul>"
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["color", "bgcolor", "background-color", "background"],
      correctAnswer: "background-color"
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "styles", "font"],
      correctAnswer: "style"
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<script>", "<style>", "<link>"],
      correctAnswer: "<style>"
    },
    {
      question: "Which property is used to align text in CSS?",
      options: ["align", "text-align", "text-align", "font-align"],
      correctAnswer: "text-align"
    },
    {
      question: "Which tag is used to define a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<nav>"],
      correctAnswer: "<a>"
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["string", "boolean", "number", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "What is the correct way to declare a JavaScript variable?",
      options: ["variable name;", "var name;", "v name;", "None of the above"],
      correctAnswer: "var name;"
    },
    {
      question: "Which method is used to write content into a web page in JavaScript?",
      options: ["document.write()", "console.log()", "window.write()", "write()"],
      correctAnswer: "document.write()"
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function:myFunction()", "function = myFunction()", "function myFunction()", "function => myFunction()"],
      correctAnswer: "function myFunction()"
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onclick", "onchange", "onmouseover", "onmouseclick"],
      correctAnswer: "onclick"
    },
    {
      question: "Which HTML tag is used to define a table in HTML?",
      options: ["<table>", "<tab>", "<tr>", "<td>"],
      correctAnswer: "<table>"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["text-size", "font-style", "font-size", "text-style"],
      correctAnswer: "font-size"
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "# This is a comment"],
      correctAnswer: "// This is a comment"
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      options: ["alt", "src", "title", "longdesc"],
      correctAnswer: "alt"
    },
    {
      question: "Which property is used to set the space between the content and the border in CSS?",
      options: ["margin", "padding", "spacing", "border-spacing"],
      correctAnswer: "padding"
    },
    {
      question: "What does the 'var' keyword do in JavaScript?",
      options: ["Declares a variable", "Assigns a value", "Defines a function", "Creates an array"],
      correctAnswer: "Declares a variable"
    },
    {
      question: "How do you call a function named 'myFunction' in JavaScript?",
      options: ["call myFunction()", "call function myFunction()", "myFunction()", "run myFunction()"],
      correctAnswer: "myFunction()"
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: ["<footer>", "<bottom>", "<section>", "<foot>"],
      correctAnswer: "<footer>"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["text-color", "color", "font-color", "font-style"],
      correctAnswer: "color"
    },
    {
      question: "How do you round the number 7.25 to the nearest integer in JavaScript?",
      options: ["round(7.25)", "Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)"],
      correctAnswer: "Math.round(7.25)"
    },
    {
      question: "Which HTML element is used to specify a header for a document or section?",
      options: ["<header>", "<head>", "<top>", "<hgroup>"],
      correctAnswer: "<header>"
    },
    {
      question: "Which property is used to change the font of an element in CSS?",
      options: ["font-family", "font-style", "font-weight", "font-size"],
      correctAnswer: "font-family"
    }
  ];

const questionList = questions.map((q)=>q.question)


  