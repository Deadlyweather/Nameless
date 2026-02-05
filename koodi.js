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

let grid = 16

function milestones() {
    if (scores.floor >= 1 && scores.floor <= 9) {
        // Random generation 1
    }
}

function floor(blueprint) {
    if (!blueprint) {
        
    } else {

    }

}

function gameloop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    scoreboard();

    requestAnimationFrame(gameloop);
}

function loadingScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText("Downloading images", canvas.width / 2 - 100, canvas.height / 2);
    for (let key in images) {
        let img = new Image();
        img.src = images[key];
        images[key] = img;
    }

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.font = "50px Arial";
        ctx.fillText("Loading floor", canvas.width / 2 - 100, canvas.height / 2);
        floor()
    }, 500)

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "lime";
        ctx.font = "400px Arial";
        ctx.fillText("Done", canvas.width / 2 -400, canvas.height / 2);
    },1000)

    setTimeout(() => {
        gameloop()
    }, 1500);
}

loadingScreen();
