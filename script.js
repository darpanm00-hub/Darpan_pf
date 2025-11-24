// Theme toggle
const themeBtn=document.getElementById('themeToggle');
if(themeBtn){themeBtn.addEventListener('click',()=>{
const isLight=document.documentElement.classList.toggle('light');
localStorage.setItem('theme',isLight?'light':'dark');
themeBtn.textContent=isLight?'☀️':'🌙';
});}

// Navigation toggle for mobile
const navToggle = document.querySelectorAll('.nav-toggle');
navToggle.forEach(btn => btn.addEventListener('click', ()=>{
const links = btn.parentElement.querySelector('.nav-links');
if(!links) return;
links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
}));


// Year updater
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year2')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year3')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year4')?.appendChild(document.createTextNode(new Date().getFullYear()));


// Simple contact form handler (example only)
document.getElementById('contactForm')?.addEventListener('submit', e=>{
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
alert(`Thanks ${name}! Message received. (This is a demo handler)`);
// You can hook this to EmailJS, Formspree, or a backend.
e.target.reset();
});


// Smooth in-page scroll (if needed)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', e=>{
const href = a.getAttribute('href');
if(href.length>1 && href.startsWith('#')){
e.preventDefault();
const el = document.querySelector(href);
if(el) el.scrollIntoView({behavior:'smooth'});
}
});
});