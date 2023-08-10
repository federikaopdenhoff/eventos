
const divElement = document.getElementById('container');

divElement.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

const button = document.getElementById('saludarBtn');

button.addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation();
});