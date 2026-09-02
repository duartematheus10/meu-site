const canvas = document.getElementById("canvas-particulas");
const ctx = canvas.getContext("2d");

// Ajusta o tamanho do canvas para o tamanho da janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particulasArray = [];
const numParticulas = 80; // Quantidade de pontos no ecrã

// Criação da Classe da Partícula
class Particula {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1; // Velocidade eixo X (lenta e suave)
        this.vy = (Math.random() - 0.5) * 1; // Velocidade eixo Y
        this.raio = Math.random() * 2 + 1; // Tamanho do ponto
    }

    // Atualiza a posição e faz "bater e voltar" nas bordas
    atualizar() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    desenhar() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 188, 212, 0.6)"; // Cor Ciano
        ctx.fill();
    }
}

// Inicializa as partículas
for (let i = 0; i < numParticulas; i++) {
    particulasArray.push(new Particula());
}

// Função para animar e criar as linhas de ligação
function animar() {
    requestAnimationFrame(animar);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o ecrã a cada frame

    for (let i = 0; i < particulasArray.length; i++) {
        particulasArray[i].atualizar();
        particulasArray[i].desenhar();

        // Verifica a distância entre partículas para desenhar a linha
        for (let j = i; j < particulasArray.length; j++) {
            const dx = particulasArray[i].x - particulasArray[j].x;
            const dy = particulasArray[i].y - particulasArray[j].y;
            const distancia = Math.sqrt(dx * dx + dy * dy);

            // Se estiverem próximas, liga com uma linha
            if (distancia < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 188, 212, ${1 - distancia/120})`; // Fica mais opaco quão mais perto estiverem
                ctx.lineWidth = 0.5;
                ctx.moveTo(particulasArray[i].x, particulasArray[i].y);
                ctx.lineTo(particulasArray[j].x, particulasArray[j].y);
                ctx.stroke();
            }
        }
    }
}

animar();

// Atualiza o tamanho do fundo se o utilizador redimensionar a janela
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});