const pi = 3.14;


let changethis = document.getElementById('2');

function getanswer(answers) {
   
   var input = document.getElementById("input").value;
   var answered = input*pi;
   console.log(answered)
    changethis.innerText = answered;
}


