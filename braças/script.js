const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

     const md1 = document.getElementById('medida1').value;
     const md2 = document.getElementById('medida2').value;
     const valor1 = Number( md1 ) + Number(md2);



     const md3 = document.getElementById('medida3').value;
     const md4 = document.getElementById('medida4').value;
     const valor2 = Number(md3) + Number(md4);


    const valor = document.getElementById('value');
    let resultado ;
   

    document.getElementById('infos').classList.remove('hidden');

    valor.textContent = (((valor1 * valor2) / 25) /100).toFixed(1) ;
    document.getElementById('descriptiom').textContent = resultado;
});

