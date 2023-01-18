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
        document.getElementById('cep').addEventListener('focusout',usuario.consultarCep);        
    }
    salvar() {
        let cadastro = this.lerDados()
        if (this.validarCampos(cadastro) == true) {
                window.location.href = "../tela-cadastro/assets/paginas/login.html";
            }else {
                //Mostrar os campos que precisa preencher                
            }
    }    
    //Função para capturar todos os inputs do formulário.
    lerDados() {
        let dadosUsuario = {}            
        dadosUsuario.nome = document.getElementById('nome').value
        dadosUsuario.email = document.getElementById('email').value
        dadosUsuario.telefone = document.getElementById('telefone').value
        dadosUsuario.cpf = document.getElementById('cpf').value
        dadosUsuario.cep = document.getElementById('cep').value
        dadosUsuario.cidade = document.getElementById('cidade').value
        dadosUsuario.bairro = document.getElementById('bairro').value
        dadosUsuario.logradouro = document.getElementById('logradouro').value
        dadosUsuario.numero = document.getElementById('numero').value
        this.consultarCep(dadosUsuario.cidade, dadosUsuario.bairro, dadosUsuario.logradouro)
            return dadosUsuario
            
    }
    consultarCep(cidade, bairro, logradouro) {
        let c = cidade;
        let b = bairro;
        let l = logradouro        
        console.log(c)
        console.log(b)
        console.log(l)

        /*
        const hidden_show = document.querySelector('#hidden-show')
        
        //Função para formatar o cep que venho com a máscara do input, deixando-o apenas números para enviar a API.
        var cep = usuario.cep.replace(/[^0-9]/g,'');
        console.log(cep)
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
            usuario.logradouro = response.logradouro
            usuario.bairro = response.bairro
            usuario.cidade = response.localidade        
        }
    }
    
    request.send();
        usuario.logradouro = ''; // Limpa o campo
        usuario.bairro = ''; // Limpa o campo
        usuario.cidade = ''; // Limpa o campo    
        hidden_show.style.display = 'none'
        resposta.innerHTML = ''
        */
    }

    validarCampos(dadosObrigatorios) {
        let msg = ''
        
        if (dadosObrigatorios.nome == '') {
            msg += 'Informe o seu Nome \n'
        }
        if (dadosObrigatorios.email == '') {
            msg += 'Informe o seu E-mail \n'
        }
        if (dadosObrigatorios.telefone == '') {
            msg += 'Informe o seu Telefone \n'
        }
        if (dadosObrigatorios.cpf == '') {
            msg += 'Informe o seu CPF \n'
        }
        if (dadosObrigatorios.cep == '') {
            msg += 'Informe o seu CEP \n'
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }
}

var usuario = new Usuario()
window.addEventListener("load", usuario.addEventos)