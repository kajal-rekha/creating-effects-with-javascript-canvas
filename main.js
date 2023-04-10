const canvas = document.querySelector(".my-canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");

const particles = [];
const particleCount = 400;

for (let i = 0; i <= particleCount; i++) {
  const particle = {
    x: (Math.random() * canvas.width) / 2,
    y: (Math.random() * canvas.height) / 2,
    radius: 5,

    color: `rgb(${Math.floor(Math.random() * 255) + 1}, ${
      Math.floor(Math.random() * 255) + 1
    }, ${Math.floor(Math.random() * 255) + 1})`,
    velocity: {
      x: Math.random() * 5 - 2.5,
      y: Math.random() * 5 - 2.5,
    },
  };
  particles.push(particle);
}

function drawParticle(particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.fill();
  ctx.closePath();
}

function updateParticle(particle) {
  particle.x += particle.velocity.x;
  particle.y += particle.velocity.y;

  if (
    particle.x + particle.radius > canvas.width ||
    particle.x - particle.radius < 0
  ) {
    particle.velocity.x = -particle.velocity.x;
  }

  if (
    particle.y + particle.radius > canvas.height ||
    particle.y - particle.radius < 0
  ) {
    particle.velocity.y = -particle.velocity.y;
  }
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    updateParticle(particle);
    drawParticle(particle);
  });
}

animate();
