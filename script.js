// Do your work in this file.

var boxes = document.querySelectorAll(".box");
var color;
var n = boxes.length;


// for (var i=0; 200 < i < 300 ;){ 
//     // function changeColor(){
//     // var boxes = boxes.style.backgroundChange ("yellow");
//    color = "yellow";
//     // boxes[i].backgroundColor("yellow", boxClicked);        
// }

if (201 <= n && n <= 300) {
    color = "yellow";
} else if (301 <= n && n <= 400) {
    color = "green";
} else if (401 <= n && n <= 500) {
    color = "purple";
} else if (501 <= n && n <= 600) {
    color = "orange";
} else if (601 <= n && n <= 700) {
    color = "pink";
} else if (701 <= n && n <= 800) {
    color = "black";
} else if (801 <= n && n <= 900) {
    color = "brown";
} else {
    color = "blue";
}

var action;

function boxClicked(action) {
    return function colorChange() {
        if(boxes[action].className == "box"){
            boxes[action].className = "clicked";
        }else{
            boxes[action].className = "box";
        }
        
        boxes[action].style.backgroundColor = color;
    };
}

for (var i = 0; i < boxes.length; i++) {
    
    boxes[i].addEventListener("click", boxClicked(i));
}