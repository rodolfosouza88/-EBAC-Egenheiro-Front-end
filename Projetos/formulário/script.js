const formulario = document.getElementById('meuFormulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    if (parseInt(campoB.value) > parseInt(campoA.value)) {
        exibirMensagem(true);
    } else {
        exibirMensagem(false);
    }
});

function exibirMensagem(valido) {
    if (valido) {
        mensagem.textContent = 'Formulário válido! B é maior que A.';
        mensagem.classList.remove('invalid');
        mensagem.classList.add('valid');
    } else {
        mensagem.textContent = 'Formulário inválido! B precisa ser maior que A.';
        mensagem.classList.remove('valid');
        mensagem.classList.add('invalid');
    }
    mensagem.style.display = 'block';
}
