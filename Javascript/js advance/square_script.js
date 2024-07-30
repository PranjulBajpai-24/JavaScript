const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Function to draw a square at given coordinates (x, y) with a specified size
    function drawSquare(x, y, size) {
        ctx.beginPath();
        ctx.rect(x-size/2, y-size/2, size, size);
        ctx.fillStyle = 'blue';  // Set the fill color for the square
        ctx.fill();
        ctx.lineWidth = 2;  // Set the border width of the square
        ctx.strokeStyle = 'black';  // Set the border color of the square
        ctx.stroke();
    }

    drawSquare(x, y, 50);  // Draw a square of size 50x50 pixels
});

document.getElementById('clearButton').addEventListener('click', function() {
    // Function to clear the canvas
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    clearCanvas();
});
