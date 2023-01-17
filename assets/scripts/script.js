function mascaraCPF() {
    const cpf = document.getElementById('cpf').value    
    let inputLength = cpf.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        cpf.value += '.'
    }else if (inputLength == 11) {
        cpf.value += '-'
    }
}