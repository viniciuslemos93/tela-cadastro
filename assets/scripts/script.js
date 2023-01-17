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
        document.getElementById("btnCadastrar").addEventListener("click", usuario.salvar)
        
    }
    
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
            msg += 'Informe o seu Nome \n'
        }
        if (usuario.email == '') {
            msg += 'Informe o seu E-mail \n'
        }
        if (usuario.telefone == '') {
            msg += 'Informe o seu Telefone \n'
        }
        if (usuario.cpf == '') {
            msg += 'Informe o seu CPF \n'
        }
        if (usuario.cep == '') {
            msg += 'Informe o seu CEP \n'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
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