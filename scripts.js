
function bin() {
  document.getElementById("binImg").style.position="absolute"; 
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  var a = Math.floor((Math.random() * (vh-(vw * 0.2))) + 300);
  var b = Math.floor((Math.random() * (vw-(vw * 0.2))) + 200);
  var x = document.getElementById("binImg");
    document.getElementById("binImg").style.top=a + "px"; 
    document.getElementById("binImg").style.left=b + "px"; 
  console.log(a)
  console.log(b)
}

function start() {
  var x = document.getElementById("start");
    document.getElementById("spawn").onclick = bin;
}