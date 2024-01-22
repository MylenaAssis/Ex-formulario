const form = document.getElementById('formulario')

form.addEventListener('submit', function(e){
    e.preventDefault();
})

console.log(form)

document.getElementById('btn').addEventListener('click', function() {
    validaFormulario();
});

function validaFormulario() {
    const valorA = parseFloat(document.getElementById('campo-a').value);
    const valorB = parseFloat(document.getElementById('campo-b').value);
    const mensagemSucesso = 'O valor B é maior que A';
    const mensagemErro = 'O valor B deve ser maior que A. Preencha novamente.'

    if (valorB > valorA) {
        alert(mensagemSucesso);
        document.getElementById('campo-a').value = '';
        document.getElementById('campo-b').value = '';

    } else {
        alert(mensagemErro)
    }
};






