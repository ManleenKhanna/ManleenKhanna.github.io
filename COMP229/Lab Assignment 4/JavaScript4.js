var canvas = document.createElement("canvas");
var gamearea = document.getElementById("gamearea");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
canvas.style.marginLeft = 0;
canvas.style.marginTop = 0;
gamearea.appendChild(canvas);

var bgReady = false;
var bgImage = new Image();

bgImage.src = "Game_Background.png";
bgImage.onload = function () {
    ctx.drawImage(bgImage, 0, 0);
    bgReady = true;
}

var bloodImage = new Image();
bloodImage.src = "blood.png";

var bugReady = false;
var bugImage = new Image();

bugImage.src = "MyBug.jpg";

var player = {
    canvas_x: 0,
    canvas_y: 0
};

var bug = {
    x: 0,
    y: 100,
    speed: 2500
}

var bugscaught = 0;

canvas.addEventListener("mousedown", function (event) {
    player.canvas_x = event.pageX;
    player.canvas_y = event.pageY;
    if (player.canvas_x <= (bug.x + 70)
        && player.canvas_x >= (bug.x + 10)
        && player.canvas_y <= (bug.y + 160)
        && player.canvas_y >= (bug.y + 100)) {
        ctx.drawImage(bloodImage, bug.x, bug.y, 60, 60);
    }
});

var reset = function () {
    player.canvas_y = 0;
    player.canvas_x = 0;
    bug.x = 5 + (Math.random() * (canvas.width - 70));
    bug.y = 5 + (Math.random() * (canvas.height - 70));
    clearInterval(intervalID);
    intervalID = setInterval(main, bug.speed);
}

var update = function () {
    if (player.canvas_x <= (bug.x + 70)
        && player.canvas_x >= (bug.x + 10)
        && player.canvas_y <= (bug.y + 160)
        && player.canvas_y >= (bug.y + 100)) {
        ++bugscaught;
        document.getElementById("bugsCaught").innerHTML = "Score: " + bugscaught;

        if (bug.speed > 100) {
            bug.speed -= 100;
        }
    }
    reset();
}

var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y, 60, 60);
    }
}

var main = function () {
    update();
    render();
};

function resetSpeed() {
    player.canvas_x = 0;
    player.canvas_y = 0;
    clearInterval(intervalID);
    intervalID = setInterval(main, 2500)
    bug.speed = 2500;
}

function resetScore() {
    bugscaught = 0;
    document.getElementById("bugsCaught").innerHTML = "Score: 0";
}

function startGame() {
    bugReady = true;
    document.getElementById("btnStartGame").disabled = true;
    intervalID = setInterval(main, 0);
}

var intervalID;