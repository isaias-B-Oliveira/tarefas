const btn1 = document.getElementById('botao1');
const btn2 = document.getElementById('botao2');

btn1.addEventListener('click', ()=> {
    if(btn1){
        location.href = './metros/metros.html';
    }
});
btn2.addEventListener('click', () => {
    if(btn2){
        location.href = './braças/bracas.html';
    }
})