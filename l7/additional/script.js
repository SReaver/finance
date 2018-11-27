let circle = document.getElementById("circle");

function step() {
 requestAnimationFrame(step, circle);

}
step();