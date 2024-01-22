const form = document.getElementById('formulario')

document.getElementById('btn').addEventListener('click', function() {
    validaFormulario();
});

function validaFormulario() {
    var valorA = parseFloat(document.getElementById('campo-a').value);
    var valorB = parseFloat(document.getElementById('campo-b').value);

    if (valorB > valorA) {
      alert('O valor do campo B é maior que o valor do campo A.');
    } else {
        alert('Outra opcao')
    }
};

form.addEventListener('submit', function(e){
    e.preventDefault();
})

console.log(form)




