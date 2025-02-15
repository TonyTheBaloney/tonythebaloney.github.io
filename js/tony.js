

async function getGithubData() {
    let url = "https://api.github.com/users/TonyTheBaloney"
    
    let response = await fetch(url);
    let userData = await response.json();
    return userData;
}

function checkSupported() {
    canvas = document.getElementById('snake');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');
        // Canvas is supported
        // Set canvas background black
        var snake = {
            x: 10,
            y: 10,
            width: 5,
            height: 5,
            dx: 1,
            dy: 0,
            length: 4
        }
        snakeBody = [];

        // This function is called every 100ms
        setInterval(function() {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Move the snake
            snake.x += snake.dx;
            snake.y += snake.dy;
            
            ctx.fillStyle = "rgb(200,0,0)";
            drawSnake(snake, snakeBody);
            
            if(snake.x > canvas.width) {
                snake.x = 0;
            }
            if(snake.x < 0) {
                snake.x = canvas.width;
            }
            if(snake.y > canvas.height) {
                snake.y = 0;
            }
            if(snake.y < 0) {
                snake.y = canvas.height;
            }

            // Random direction
            if(Math.random() < 0.2) {
                snake.dx = Math.random() < 0.5 ? -5 : 5;
                snake.dy = Math.random() < 0.5 ? -5 : 5;
            }

        }, 200);
    } else {
        // Canvas is not supported
        document.getElementById('canvas').style.display = 'none';
    }
}

function drawSnake(snake, snakeBody) {
    snakeBody.push([snake.x, snake.y]);
    for(var i = 0; i < snakeBody.length; i++) {
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], 5, 5);
    }

    if (snakeBody.length > snake.length) {
      var itemToRemove = snakeBody.shift();
    }
}