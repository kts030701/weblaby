function setVisitCookie(x) {
    document.cookie = "visit=" + x + "; path=/; max-age=31536000; Secure; SameSite=Lax";
}
function getCookie(name) {
  let cookies = document.cookie.split(";");
  // split()은 구분자를 기준으로 문자열을 나눠 배열을 생성함
  
  for (var i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("=");
    let key = parts[0].trim();
    
    if (key === name) {
      return (parts[1]);
    }
  }
  return null;
}

function setVisitTimeCookie(name) {
  if (!getCookie(name)) {
    document.cookie = name + "=" + Date.now() + "; path=/; max-age=31536000; Secure; SameSite=Lax";
  }
}