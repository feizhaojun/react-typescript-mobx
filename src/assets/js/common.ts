const isMobile = function() {
  let ua = navigator.userAgent;
  let isMobile = false;
  if(ua.indexOf("Android") > 0 || ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0){
    isMobile = true;
  }
  return isMobile;
}

export { isMobile };
