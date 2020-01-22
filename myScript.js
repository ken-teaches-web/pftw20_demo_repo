// let myX = 0;
// let myY = 23;
// let myRed = 0; // number
// let doILikeIceCream = true; // Boolean
// let name = "Ken"; // string
// console.log("hi, I'm a console log");
// console.log("this is myX " + myX);
// myX = myX + 15;
// console.log("this is myX " + myX);
// console.log(myX);
// console.log(doILikeIceCream);
// console.log(myX === myY);
let mood = "inconsolable";
let timeOfDay = "morning";
let arcColor = prompt("What color should the arc be", "blue");
function setup(){
    createCanvas(400, 400);
}
function draw(){
    background("#ccc");
    fill("#f00");
    stroke("black");
    strokeWeight(40);

    if(mood === "happy" && timeOfDay === "morning") { // first condition checks between parens
        ellipse(100, 100, 50); // first condition was true
    } else if(mood === "meh"){ // second check
        rect(100, 100, 50, 50); // second condition was true
    } else { // mood equal anything other than meh or happy
        
        line(100, 200, 200, 200);
    }
    point(200, 300);
    //quad(10, 10, 350, 30, 350, 350, 10, 350);
    stroke(arcColor);
    strokeWeight(10);
    noFill();
    arc(200, 300, 100, 100, 0, PI);
}
