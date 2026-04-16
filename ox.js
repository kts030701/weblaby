function ox(answer,link) {
var userInput = document.getElementById("try").value;
if (userInput === answer)
{ window.location.href = link;}
else {alert("정답이 아닙니다.");}
}