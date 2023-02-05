let names = prompt('tell me your name');
const divs = document.querySelectorAll('.name');
divs.forEach(div => div.innerHTML += names);