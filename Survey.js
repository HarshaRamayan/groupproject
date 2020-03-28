//Hard Coded to display only 5 questions per page. Total = 15 questions

//Attribute to check which page
var pagination = 1;

const survey_questions = [
    "How was the staff's hospitality, when you have entered IKEA?",
    "Were the IKEA products been effienct enough?",
    "How was the organization of products in our store?",
    "Are the costs resonable with the quality of the IKEA products?",
    "How was your experience in finding the product you want?",
    "Has the product been useful to you?",
    "Did the product meet your expectations?",
    "If you were to recommend a friend of yours to use IKEA products, what comment would you pass to him/her?",    
    "How was the quality of IKEA products?",
    "How was your experience with IKEA?"
];


var survey_answers = [
    "","","","","","","","",""
];

//Loads questions in the report
function loadquestionnaire(min_index, max_index) {
    min_index = min_index * 5;
    max_index = max_index * 5;
    var report_li = 1;
    for (var i = min_index; i < max_index; i++) {
        var survey = survey_questions[i];
        var report_question = document.getElementById("Q" + report_li);
        report_question.innerHTML = (i+1)+". " + survey;
        ++report_li;
    }
}

//Navigation between pages
function paginate(action) {

    if (pagination == 1) {
        //store_answers(0,1);
        if (action == "Next") {
            loadquestionnaire(1,2);
            ++pagination;
            document.getElementById("previous").disabled = false;
            document.getElementById("next").disabled = false;
        }
    } else if (pagination == 2) {
        //store_answers(1,2);
         document.getElementById("previous").disabled = false;
         document.getElementById("next").disabled = true;
         if (action == "Previous") {
            loadquestionnaire(0,1);
            --pagination;
            document.getElementById("previous").disabled = true;
            document.getElementById("next").disabled = false;
        }
    }
    console.log(pagination);
}

//When the user answers for any of the questions
// function store_answers(min_index, max_index) {
//     min_index *= 5;
//     max_index *= 5;
//     var report_li = 1;
//     for (var i = min_index; i < max_index; i++) {
//         var report_answer = document.getElementById("A"+report_li++);
//         survey_answers[i] = report_answer.value;
//     }
// }

function logout() {
    alert("You have successfully logged out!");
    window.location.href = "./login1.html";
}

function submit() {
    
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  window.location.href = "./login1.html";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href = "./login1.html";
  }
}}

 function signUp() {
     alert("Registration successful");
 }