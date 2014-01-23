var min=2;
var max=20;
function increaseFontSize() {
   var p = document.getElementsByTagName('body');
   for(i=0;i<p.length;i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = 12;
      }
      if(s!=max) {
         s += 1;
      }
      p[i].style.fontSize = s+"px"
   }
}

function decreaseFontSize() {
   var p = document.getElementsByTagName('body');
   for(i=0;i<p.length;i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = 12;
      }
      if(s!=min) {
         s -= 1;
      }
      p[i].style.fontSize = s+"px"
   }
}


function normalFontSize() {
     var p = document.getElementsByTagName('body');
   for(i=0;i<p.length;i++) {
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = 11;
      }
      if(s!=min) {
         s = 11;
      }
      p[i].style.fontSize = s+"px"
   }
}

function makeRed() {
    var p = document.getElementsByTagName('body');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "red";
    }

    p = document.getElementsByTagName('a');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "red";
    }
}

function makeBlue() {
    var p = document.getElementsByTagName('body');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "blue";
    }

    p = document.getElementsByTagName('a');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "blue";
    }
}

function makeGreen() {
    var p = document.getElementsByTagName('body');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "green";
    }

    p = document.getElementsByTagName('a');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "green";
    }
}

function makeBlack() {
    var p = document.getElementsByTagName('body');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "black";
    }

    var p = document.getElementsByTagName('a');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "black";
    }
}

function makeOrange() {
    var p = document.getElementsByTagName('body');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "#FF6600";
    }

    var p = document.getElementsByTagName('a');
    for(i=0;i<p.length;i++) {
      p[i].style.color = "#FF6600";
    }
}