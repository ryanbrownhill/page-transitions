// window.onbeforeunload = function (e) {
//     document.querySelectorAll('.box1').className = 'fadein';
// }
// 
// http://www.onextrapixel.com/2010/02/23/how-to-use-jquery-to-make-slick-page-transitions/
// 
console.log("test");

var box1 = document.getElementById("box1");

box1.onclick = function () {
	console.log("test2");
 if (classie.has(box1,"fadeinup")) {
    classie.remove(box1,"fadeinup");
} else {
    classie.add(box1,"fadeinup");
}
};

// window.onbeforeunload = function (e) {
//     classie.add(box1,"animated");
//     console.log("test");
// };


// function test() {
// 	console.log("test2");
//  if (classie.has(box1,"animated")) {
//     classie.remove(box1,"animated");
// } else {
//     classie.add(box1,"animated");
// }
// }

