const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Basic canvas interaction
canvas.addEventListener('click', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  drawNode(x, y, "New Node");
});

// Draw node on canvas
function drawNode(x, y, text) {
  ctx.fillStyle = '#007BFF';
  ctx.fillRect(x - 50, y - 25, 100, 50);
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText(text, x, y + 5);
}

// Handle node creation via button
document.getElementById('generate-node').addEventListener('click', () => {
  const userInput = document.getElementById('node-input').value;
  if (userInput) {
    drawNode(Math.random() * canvas.width, Math.random() * canvas.height, userInput);
  }
});
