class Usuario {
    nome;
    email;
    telefone;
    cpf;
    cep;    
    cidade;
    bairro;
    logradouro;
    numero;
        
    //Função com a lista de eventos a serem executadas.
    addEventos () {
        document.getElementById("btnCadastrar").addEventListener("click", usuario.clicar)
    }
/*    let btn = document.querySelector('#btn-cadastrar')
    btn.addEventListener('submit', usuario.salvar)*/
    //Função para capturar todos os inputs do formulário.    
    lerDados() {
        let usuario = {}
            
            usuario.nome = document.getElementById('nome').value
            usuario.email = document.getElementById('email').value
            usuario.telefone = document.getElementById('telefone').value
            usuario.cpf = document.getElementById('cpf').value
            usuario.cep = document.getElementById('cep').value
            usuario.cidade = document.getElementById('cidade').value
            usuario.bairro = document.getElementById('bairro').value
            usuario.logradouro = document.getElementById('logradouro').value
            usuario.numero = document.getElementById('numero').value            

            return usuario
    }
    
    validarCampos(usuario) {
        let msg = ''
        
        if (usuario.nome == '') {
            `${msg} Informe o seu Nome`
        }
        if (usuario.email == '') {
            msg += 'Informe o seu E-mail \n'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }

    clicar() {
        alert("Clicou!")
    }
    salvar() {

        let usuario = this.lerDados()
        if (this.validarCampos(usuario) == true) {
                alert ('OOKSS')
            }else {
                alert('Campos Vazios')
            }
    }

}
var usuario = new Usuario()
window.addEventListener("load", usuario.addEventos)
/*
    validarCampos(usuario) {
    //Variáveis para receber todos os valores do formulário
    var nome = formulario-cadastro.nome.value;    
    var email = formulario-cadastro.email.value;
    var telefone = formulario-cadastro.telefone.value;
    var cpf = formulario-cadastro.cpf.value;
    var cep = formulario-cadastro.cep.value;
    
    if (nome === "") {
        alert("O campo {Nome} é obrigatório!");
        form_cadastro.nome.focus();
        return false;
    }
    if (email === "") {
        alert("O campo {E-mail} é obrigatório!");
        form_cadastro.email.focus();
        return false;
    }
    if (telefone === "") {
        alert("O campo {Telefone} é obrigatório!");
        form_cadastro.telefone.focus();
        return false;
    }
    if (cpf === "") {
        alert("O campo {CPF} é obrigatório!");
        form_cadastro.cpf.focus();
        return false;
    }
    if (cep === "") {
        alert("O campo {CEP} é obrigatório!");
        form_cadastro.cep.focus();
        return false;
    }

}
*/