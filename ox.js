function ox(answer,link) {
var userInput = document.getElementById("try").value;
if (userInput.toLowerCase().replaceAll(' ', '') === answer.toLowerCase().replaceAll(' ', ''))
{ window.location.href = link;}
else {alert("정답이 아닙니다.");}
}

function answerBox(answer, nextPage) {
  document.getElementById("box").innerHTML = `
    <input type="text" id="try" style="width: 300px; height: 40px; font-size: 30px;"
    onkeydown="if(event.key === 'Enter') ox('${answer}','${nextPage}')">

    <button style="width: 180px; height: 50px; font-size: 30px;"
    onclick="ox('${answer}','${nextPage}')">확인</button>
  `;
}
