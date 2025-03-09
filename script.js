let blue = document.getElementById('blue');
let red = document.getElementById('red');
let green = document.getElementById('green');

blue.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
});

red.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
});

green.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});
