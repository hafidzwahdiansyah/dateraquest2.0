const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 50) {
      el.classList.add('active');
    }
  });
});




  const menuToggle = document.getElementById('mobile-menu');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  // Optional: close menu saat klik link
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('active');
    });
  });

  // Optional: nav background saat scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

/* ===============================
   FIREFLIES / KUNANG-KUNANG
   untuk tema alam Sumatera
================================ */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w, h;
function resizeCanvas(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const fireflies = [];
const FIREFLY_COUNT = 55;

function rand(min, max){
  return Math.random() * (max - min) + min;
}

for(let i=0; i<FIREFLY_COUNT; i++){
  fireflies.push({
    x: rand(0, w),
    y: rand(0, h),
    r: rand(1.2, 3.2),
    vx: rand(-0.25, 0.25),
    vy: rand(-0.15, 0.15),
    glow: rand(0.2, 1),
    pulse: rand(0.005, 0.02),
    phase: rand(0, Math.PI * 2)
  });
}

function draw(){
  ctx.clearRect(0, 0, w, h);

  for(const f of fireflies){

    // movement slow
    f.x += f.vx;
    f.y += f.vy;

    // bounce
    if(f.x < 0) f.x = w;
    if(f.x > w) f.x = 0;
    if(f.y < 0) f.y = h;
    if(f.y > h) f.y = 0;

    // pulse glow
    f.phase += f.pulse;
    const alpha = 0.25 + (Math.sin(f.phase) + 1) * 0.25;

    // glow effect
    const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 10);
    gradient.addColorStop(0, `rgba(255, 231, 38, ${alpha})`);
    gradient.addColorStop(0.4, `rgba(138, 193, 74, ${alpha * 0.55})`);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(f.x, f.y, f.r * 10, 0, Math.PI * 2);
    ctx.fill();

    // core point
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 231, 38, ${alpha + 0.2})`;
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();

// spark kecil random
if(Math.random() < 0.003){
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.arc(f.x + rand(-8,8), f.y + rand(-8,8), 1.2, 0, Math.PI*2);
  ctx.fill();
}

// =========================
// COUNTDOWN DASHBOARD HERO
// Target: 12 November 2026
// =========================

const countdownEl = document.getElementById("countdown");

// format: tahun, bulan-1, tanggal, jam, menit, detik
const targetDate = new Date(2026, 10, 12, 0, 0, 0); 
// bulan 10 = November (karena JS mulai dari 0)

function renderCountdown(days, hours, minutes, seconds){
  countdownEl.innerHTML = `
    <div class="cd-box">
      <div class="cd-num">${days}</div>
      <div class="cd-label">Days</div>
    </div>

    <div class="cd-box">
      <div class="cd-num">${hours}</div>
      <div class="cd-label">Hours</div>
    </div>

    <div class="cd-box">
      <div class="cd-num">${minutes}</div>
      <div class="cd-label">Minutes</div>
    </div>

    <div class="cd-box">
      <div class="cd-num">${seconds}</div>
      <div class="cd-label">Seconds</div>
    </div>
  `;
}

function updateCountdown(){
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if(distance <= 0){
    countdownEl.innerHTML = `<div class="cd-finish">🔥 Event Dimulai Hari Ini!</div>`;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  renderCountdown(days, hours, minutes, seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);


// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});
