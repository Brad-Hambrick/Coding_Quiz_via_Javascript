
// Questions to be asked

const Questions = [{
    
    q: "What coding language styles a webpage?",
    a: [{text: "A. HTML", isCorrect: false },
        {text: "B. CSS", isCorrect: true },
        {text: "C. Javascript", isCorrect: false },
        {text: "D. NodeJS", isCorrect: false }
    ]},
    {
    
    q: "What is the document type that makes up the static skeleton of a webpage?",
    a: [{text: "A. HTML", isCorrect: true },
        {text: "B. CSS", isCorrect: false },
        {text: "C. Javascript", isCorrect: false },
        {text: "D. NodeJS", isCorrect: false }
    ]},
    {
    
    q: "What language would be used to add If Else Statements?",
    a: [{text: "A. HTML", isCorrect: false },
        {text: "B. CSS", isCorrect: false },
        {text: "C. Javascript", isCorrect: true },
        {text: "D. NodeJS", isCorrect: false }
    ]}, 
    {
    
    q: "What identifier is represented by a # Symbol?",
    a: [{text: "A. Class", isCorrect: false },
        {text: "B. Header", isCorrect: false },
        {text: "C. Footer", isCorrect: false },
        {text: "D. ID", isCorrect: true }
    ]},

    {
    
    q: "Which is your best friend when it comes to coding",
    a: [{text: "A. Netflix", isCorrect: false },
        {text: "B. Google", isCorrect: true },
        {text: "C. Amazon Prime", isCorrect: false },
        {text: "D. Comcast", isCorrect: false }
    ]}];

let begin_button = document.querySelector(".begin-button");

 
function start() {
if (begin_button = 'true') {
    timer();
    testing();
    
 }
}

function timer() {
    time_seconds = 50;
    let countdownTimer = setInterval(() => {
        time_seconds--;
        document.getElementById("time-seconds").textContent = time_seconds;
        if (time_seconds <= 0) {
            clearInterval(countdownTimer);
            alert("You are out of time!")
        }},1000);   
}

// Grabbing the results area
let result = document.getElementsByClassName("results");
result[0].innerText = "";
// Grabbing the question
const question = document.getElementById("question")
// Adding the question text
question.innerText = Questions[0].q;
// Grabbing the multiple choice options
const op1 = document.getElementById('answer1a');
const op2 = document.getElementById('answer1b');
const op3 = document.getElementById('answer1c');
const op4 = document.getElementById('answer1d');
// Adding the multiple choice option text
op1.innerText = Questions[0].a[0].text;
op2.innerText = Questions[0].a[1].text;
op3.innerText = Questions[0].a[2].text;
op4.innerText = Questions[0].a[3].text;
// Declaring the value of the Multiple choice options
op1.value = Questions[0].a[0].isCorrect;
op2.value = Questions[0].a[1].isCorrect;
op3.value = Questions[0].a[2].isCorrect;
op4.value = Questions[0].a[3].isCorrect;

// Questions.length = currentQuestionIndex
// currentQuestionIndex = 0

function testing() {
// let Selected = document.getElementsByClassName('choice');
// Selected = chosen;

var chosen = "";
// What is chosen for choice 1
op1.addEventListener("click", () => {
    chosen = op1.value;
})
// What is chosen for choice 2
op2.addEventListener("click", () => {
    chosen = op2.value;
})
// What is chosen for choice 3
op3.addEventListener("click", () => {
    chosen = op3.value;
})
// What is chosen for choice 4
op4.addEventListener("click", () => {
    chosen = op4.value;
})

console.log(chosen)

// if(chosen == true) {
//     alert("Correct")
// }else {
//     alert("Incorrect")
// }

}

// Grading




// if (begin_button) {
//     testing("0");
// }

// Moving to the next question
// const next_btn = document.getElementById('next-btn')[0];
// let id = 0;

// next_btn.addEventListener("click", () => {
//     begin_button = false;
//     if (id < 4) {
//         id++;
//         testing(id);
//         console.log(id);
//     }
// })





//{
//     ans1a = document.getElementById("answer1a");
//     ans1b = document.getElementById("answer1b");
//     ans1c = document.getElementById("answer1c");
//     ans1d = document.getElementById("answer1d");
//     ans1a = false;
//     ans1b = true;
//     ans1c = false;
//     ans1d = false;
  
//     if (onclic) {
//         alert("Correct");
//         ques2.style.display = "block";
//         ques1.style.display = "none";
//     } else {
//         alert("Incorrect");
//         time_seconds -5;

//     }
// }
 






  


