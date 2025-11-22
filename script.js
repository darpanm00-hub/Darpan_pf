// small progressive JS: background color cycle, reveal on scroll, form handler


// reveal on scroll
function revealOnScroll(){
const items = document.querySelectorAll('.reveal');
const offset = window.innerHeight * 0.85;
items.forEach(i=>{
const top = i.getBoundingClientRect().top;
if(top < offset) i.classList.add('show');
})
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
document.addEventListener('DOMContentLoaded', ()=>{ revealOnScroll(); document.getElementById('year').textContent = new Date().getFullYear(); });


// simple contact form behavior
const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', (e)=>{
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
const note = document.getElementById('note');
if(!name||!email||!message){ note.textContent = 'Please fill all fields.'; return }
const subject = encodeURIComponent('Portfolio contact from ' + name);
const body = encodeURIComponent(message + "— " + name + " (" + email + ")");
window.location.href = `mailto:hello@darpan.com?subject=${subject}&body=${body}`;
note.textContent = 'Opening your email client...';
})
}