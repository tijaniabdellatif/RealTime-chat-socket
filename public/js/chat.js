//make connexion with socket io
const socket = io();
const button = document.querySelector('#btn');

button.addEventListener('click',() => {

    console.log('Clicked');
    socket.emit('increment');
})


//getting the value from server
socket.on('counter',(res) => {
console.log('counter is : ' + res);
});