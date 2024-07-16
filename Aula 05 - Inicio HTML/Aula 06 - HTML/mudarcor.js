const heading = document.getElementById("color-changing-text");
const colors = ["#FF5733", "#33FF57", "#5733FF", "#33AFFF", "#FF33AF"];
let currentColorIndex = 0;

function changeColor() {
  heading.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Troca de cor inicial
changeColor();

// Intervalo para trocar a cor a cada 1 segundo (1000 milissegundos)
setInterval(changeColor, 90);