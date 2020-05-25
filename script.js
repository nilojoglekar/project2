function submitAnswers(){
    var total=10;
    var score=0;


//Get User Input
var q1=document.forms["quizForm"]["q1"].value;
var q2=document.forms["quizForm"]["q2"].value;
var q3=document.forms["quizForm"]["q3"].value;
var q4=document.forms["quizForm"]["q4"].value;
var q5=document.forms["quizForm"]["q5"].value;
var q6=document.forms["quizForm"]["q6"].value;
var q7=document.forms["quizForm"]["q7"].value;
var q8=document.forms["quizForm"]["q8"].value;
var q9=document.forms["quizForm"]["q9"].value;
var q10=document.forms["quizForm"]["q10"].value;

var answers=["b","b","a","a","d","b","b","c","a","b"];

//Check ans
for(i=1;i<=total;i++){
    if(eval('q'+i)==answers[i-1]){
        score++
    }
}

//Display Results
var results=document.getElementById('results');
results.innerHTML='<h3> Your Total Score: <span>'+score+'</span> out of <span>'+total+'</span></h3>'
alert("You Total: "+score+" out of "+total);
 
return false;

}