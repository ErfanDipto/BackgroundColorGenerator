var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var h3=document.querySelector("h3");
var body=document.getElementById("grad");
var ranbutton=document.getElementById("randomcolor");
// console.log(body);
// console.log(color1);
// console.log(color2);
// console.log(h3);
// console.log(document.querySelector("input"))
function backchanger(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	h3.textContent = body.style.background;
	console.log(color1.value)
}
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
function getRandomColor(){
	var latters = "0123456789ABCDEF";
	var color = "#";
	for(var i=0; i<6; i++){
		color+=latters[Math.floor(Math.random()*16)];
	}
	return color;
}
color1.addEventListener("input", backchanger);
color2.addEventListener("input", backchanger);
function backchangerrandom(){
	body.style.background = "linear-gradient(to right,"+getRandomColor()+","+getRandomColor()+")";
	h3.textContent = body.style.background;
}
ranbutton.addEventListener("click", backchangerrandom)