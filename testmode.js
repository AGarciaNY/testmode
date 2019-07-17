import forebase from "./index.html"

var test=document.getElementById("test");
var dbref =firebase().ref().chiled('test');
dbref.on('value',snap => test.innerText = snap.val());
