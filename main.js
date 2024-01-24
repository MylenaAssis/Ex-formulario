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
    const mensagemSucesso = `O valor ${valorB} é maior que o valor ${valorA}. Formulário válido.`;
    const mensagemErro = `Esse valor deve ser maior que ${valorA}. Preencha novamente.`

    if (valorB > valorA) {
        const containerMensagemSucesso = document.querySelector('.successMessage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.getElementById('campo-a').value = '';
        document.getElementById('campo-b').value = '';

    } else {
        const containerMensagemErro = document.querySelector('.errorMessage');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
};






