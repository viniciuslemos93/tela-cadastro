
function pesquisarCep() {
    var cep = document.getElementById('cep').value
    //Função para formatar o cep que venho com a máscara do input, deixando-o apenas números para enviar a API.
    var cep = cep.replace(/[^0-9]/g,'');
    
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);