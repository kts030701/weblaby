


function setVisitCookie(x) {
    document.cookie = "visit=" + x + "; path=/weblaby/; expires=Thu, 31 Dec 2026 23:59:59 GMT;"
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

function setVisitTimeCookie(name) {
  if (!getCookie(name)) {
    document.cookie = name + "=" + Date.now() + "; path=/weblaby/;";
  }
}