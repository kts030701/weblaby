function seeHint (hint) {document.getElementById("hint").innerHTML = `
<button id="hintBtn" style="display:none; width: 180px; height: 50px; font-size: 30px;"
onclick="
document.getElementById('hint-text').style.display = 'inline-block';
">
힌트보기</button> <br><br>

<span id="hint-text" style="display:none; font-size: 20px;">그림은 한 집에서 같이 사는 동물들을 표현한 거고, 여우와 로봇도 같이 살고 있습니다.</span>

if (now - saved >= delay) {
  document.getElementById("hintBtn").style.display = "inline-block";
}
`
}