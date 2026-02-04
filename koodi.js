const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let scores = {
    floor: 0,
    score: 0
};

let blueprints = {
    codes: {
        wall: "black",
        floor: "grey"
    },
    bottom: "..Rakenteet/Blueprints/Floor0.png"
}

let images = {
    wall: "..Rakenteet/Walls/Wall0.png",
    floor: "..Rakenteet/Floors/Floor0.png"
}

let building = {
    
}

function scoreboard() {
    ctx.fillStyle = "grey";
    ctx.fillRect(50, 50, 400, 200);

    ctx.fillStyle = "black";
    ctx.font = "40px Arial";
    ctx.fillText("Score: " + scores.score, 50, 100);
    ctx.fillText("Floor: " + scores.floor, 50, 150);
}

function build(Blueprint) {

}

function floor() {
    if (scores.floor === 0) {
        build(blueprints.bottom);
    }
}

function gameloop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    scoreboard();

    requestAnimationFrame(gameloop);
}

gameloop();