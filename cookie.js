function setClearCookie(x) {
    document.cookie = "clear=" + x + "; path=/weblaby/; expires=Thu, 31 Dec 2026 23:59:59 GMT;"
}
function getCookie(name) {
  let cookies = document.cookie.split(";");
  // split()은 구분자를 기준으로 문자열을 나눠 배열을 생성함
  
  for (var i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("=");
    let key = parts[0].trim();
    
    if (key === name) {
      return Number(parts[1]);
    }
  }
  return null;
}
if (!getCookie("visitTime")) {
  document.cookie = "visitTime=" + Date.now() + "; path=/weblaby/;";
}
let saved = getCookie("visitTime");
let now = Date.now();
let delay = 5 * 1000; // 테스트용 5초