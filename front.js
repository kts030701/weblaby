function frontLink (link, visitTimeNumber) {
  document.getElementById("front").innerHTML = `
  
  <button id="frontBtn" style="display: none; width: 200px; height: 50px; font-size: 30px;" onclick="
window.location.href = '${link}'
" ">앞으로가기</button>
  `
  const visitTimeValue = getCookie('visitTime'+visitTimeNumber)
  if(visitTimeValue != null) {
document.getElementById("frontBtn").style="display: inline-block"
  }
}