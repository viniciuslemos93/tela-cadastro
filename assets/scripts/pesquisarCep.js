/*cidade, bairro e logradouro*/
const logradouro = document.getElementById('logradouro');
const bairro = document.getElementById('bairro');
const localidade = document.getElementById('cidade');
const hidden_show = document.querySelector('#hidden-show')

function consultarCep() {
    var cep = document.getElementById('cep').value
    //Função para formatar o cep que venho com a máscara do input, deixando-o apenas números para enviar a API.
    var cep = cep.replace(/[^0-9]/g,'');
    var url = 'https://viacep.com.br/ws/' + cep + '/json'
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onerror = function(e) {
        document.getElementById('resposta').innerHTML = 'API OFFLINE ou CEP INVÁLIDO'
        document.getElementById('resposta').style = 'color: red'
        document.getElementById("cep").style.border = '1px solid red'
}
request.onload = () => {
    var response = JSON.parse(request.responseText)
    if (response.erro === true) {
        document.getElementById('resposta').innerHTML = 'CEP NÃO ENCONTRADO'
    } else {
        hidden_show.style.display = 'block'
        logradouro.value = response.logradouro
        bairro.value = response.bairro
        cidade.value = response.localidade        
    }
}

request.send();
    logradouro.value = ''; // Limpa o campo
    bairro.value = ''; // Limpa o campo
    cidade.value = ''; // Limpa o campo    
    hidden_show.style.display = 'none'
    resposta.innerHTML = ''
}

document.getElementById('cep')
        .addEventListener('focusout',consultarCep);
