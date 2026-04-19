function seeHint (hint, saved, now, delay) {
    document.getElementById("hint").innerHTML = `
<button id="hintBtn" style="display:none; width: 180px; height: 50px; font-size: 30px;"
onclick="
document.getElementById('hint-text').style.display = 'inline-block';
">
힌트보기</button> <br><br>
<span id="hint-text" style="display:none; font-size: 20px;">${hint}</span>
`;

if (now - saved >= delay) {
  document.getElementById("hintBtn").style.display = "inline-block";
 }
}
