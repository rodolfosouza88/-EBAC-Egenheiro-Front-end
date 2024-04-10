const form = document.getElementById('form-content');

/**Função para Validar o nome**/
function validName (nomeCompleto){
  const nomeComArray = nomeCompleto.split(' '); /*Função para validar o form no mínimo com 2 nomes*/
  return nomeComArray.length >= 2;
}


/*Função que previne a atualização do submit*/
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nomeBeneficiario = document.getElementById('nome-beneficiario')
  if (!validName(nomeBeneficiario.value)) {
      alert('o nome não está completo!');
  } else {
    ('Nome correto!')
}
})
console.log(form);