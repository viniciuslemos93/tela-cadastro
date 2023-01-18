class EventosDoUsuario {
    constructor(window) {
      this.window = window;
    }
  
    registrarEventos() {
      const tabelaDeEventos = [
        {
          elementId: "btnCadastrar",
          event: "click",
          eventHandler: EventosDoUsuario.salvarDados,
        },
        {
          elementId: "cep",
          event: "focusout",
          eventHandler: EventosDoUsuario.consultarCep,
        },
      ];
  
      const document = this.window.document;
  
      for (const { elementId, event, eventHandler } of tabelaDeEventos) {
        document.getElementById(elementId)?.addEventListener(event, eventHandler);
      }
    }
  
    static salvarDados() {
      const dadosDoUsuario = EventosDoUsuario.obterDados();
      const informacoesCorretas = EventosDoUsuario.validarDados(dadosDoUsuario);
  
      if (informacoesCorretas) {
        window.location.href = "../tela-cadastro/assets/paginas/login.html";
      } else {
        
      }
    }
  
    static obterDados() {
      const dados = {};
  
      const propriedades = [
        "nome",
        "email",
        "telefone",
        "cpf",
        "cep",
        "cidade",
        "bairro",
        "logradouro",
        "numero",
      ];
  
      for (const propriedade of propriedades) {
        dados[propriedade] = document.getElementById(propriedade)?.value;
      }
  
      return dados;
    }
  
    static validarDados(dados) {
      let msg = "";
  
      if (dados.nome == "") {
        msg += "Informe o seu Nome \n";
      }
      if (dados.email == "") {
        msg += "Informe o seu E-mail \n";
      }
      if (dados.telefone == "") {
        msg += "Informe o seu Telefone \n";
      }
      if (dados.cpf == "") {
        msg += "Informe o seu CPF \n";
      }
      if (dados.cep == "") {
        msg += "Informe o seu CEP \n";
      }
      if (msg != "") {
        alert(msg);
        return false;
      }
      return true;
    }
  
    static async consultarCep() {
      const validarCep = (cep) => {
        const cepPattern = /\d{5}\d{3}/;
        return cepPattern.test(cep);
      };
  
      const exibirErro = (mensagem) => {
        const resposta = document.getElementById("resposta");
        const cep = document.getElementById("cep");
        resposta.style.display = "block";
        resposta.innerText = mensagem;
        resposta.style.color = "red";
        cep.style.border = "1px solid red";
      };
  
      const exibirResultado = (cepInfo) => {
        const resposta = document.getElementById("resposta");
        const cep = document.getElementById("cep");
        resposta.style.display = "none";
        cep.style.border = "1px solid #ccc";
  
        const logradouro = document.getElementById("logradouro");
        const bairro = document.getElementById("bairro");
        const cidade = document.getElementById("cidade");
  
        logradouro.value = cepInfo.logradouro;
        bairro.value = cepInfo.bairro;
        cidade.value = cepInfo.localidade;
      };
  
      let { cep } = EventosDoUsuario.obterDados();
  
      cep = cep.replace(/\D/g, "");
  
      const cepOk = validarCep(cep);
      if (!cepOk) {
        exibirErro("CEP INVÁLIDO");
        return;
      }
  
      const resource = `https://viacep.com.br/ws/${cep}/json/`;
  
      await fetch(resource)
        .then((response) => response.json())
        .then((cepInfo) => {
          if (cepInfo.erro) {
            exibirErro("CEP NÃO ENCONTRADO");
          } else {
            exibirResultado(cepInfo);
          }
        })
        .catch((err) => console.log(err));
    }
  }
  
  const eventos = new EventosDoUsuario(window);
  eventos.registrarEventos();
  