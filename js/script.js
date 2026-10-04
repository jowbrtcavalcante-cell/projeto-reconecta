import { ativarMascaras } from "./modules/formularios.js";

// Envio e validação do formulário
function ativarFormulario() {
const formulario = document.getElementById("form-cadastro");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
            }
            const dadosCadastro = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                nascimento: document.getElementById("nascimento").value,
                cpf: document.getElementById("cpf").value,
                telefone: document.getElementById("telefone").value,
                cep: document.getElementById("cep").value,
                endereco: document.getElementById("endereco").value
            };
            localStorage.setItem("cadastro", JSON.stringify(dadosCadastro));
        });
    }
}

function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (dadosSalvos) {
        const dadosCadastro = JSON.parse(dadosSalvos);
            document.getElementById("nome").value = dadosCadastro.nome;
            document.getElementById("email").value = dadosCadastro.email;
            document.getElementById("nascimento").value = dadosCadastro.nascimento;
            document.getElementById("cpf").value = dadosCadastro.cpf;
            document.getElementById("telefone").value = dadosCadastro.telefone;
            document.getElementById("cep").value = dadosCadastro.cep;
            document.getElementById("endereco").value = dadosCadastro.endereco;
    }
}


            
// JavaScript para formatação de telefone  
    const telefone = document.getElementById("telefone");

        if (telefone) {
        telefone.addEventListener("input", function () {
            let valor = telefone.value.replace(/\D/g, "");

            valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{5})(\d{1,4})$/, "$1-$2");

            telefone.value = valor;
        });
}

// JavaScript para formatação de CEP
const cep = document.getElementById("cep");

    if (cep) {
        cep.addEventListener("input", function () {
        let valor = cep.value.replace(/\D/g, "");

        valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");

        cep.value = valor;
    });
    }
      


// JavaScript para abrir e fechar o modal
const abrirModal = document.querySelector(".abrir-modal");
const fecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");

    if (abrirModal && fecharModal && modal) {
        abrirModal.addEventListener("click", function () {
            modal.classList.add("ativo");
        });

        fecharModal.addEventListener("click", function () {
            modal.classList.remove("ativo");
        });
    }

function criarCadastro() {
    return `
    <form id="form-cadastro">
        <fieldset>
    <legend>Dados pessoais</legend>

    <label for="nome">Nome completo:</label>
    <input type="text" id="nome" name="nome" required>

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>

    <label for="nascimento">Data de nascimento:</label>
    <input type="date" id="nascimento" name="nascimento" required>
    <label for="cpf">CPF:</label>
<input type="text" id="cpf" name="cpf"
    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" required>

<label for="telefone">Telefone:</label>
<input type="tel" id="telefone" name="telefone"
    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" required>

</fieldset>

<fieldset>
    <legend>Endereço</legend>

    <label for="cep">CEP:</label>
    <input type="text" id="cep" name="cep"
        pattern="[0-9]{5}-[0-9]{3}" required>

    <label for="endereco">Endereço:</label>
    <input type="text" id="endereco" name="endereco" required>
</fieldset>

<button type="submit">Enviar cadastro</button>
</form>
`;
} 

// Navegação da SPA
const linksPagina = document.querySelectorAll("[data-pagina]");
const conteudo = document.getElementById("conteudo");
const paginaInicio = conteudo ? conteudo.innerHTML : "";

linksPagina.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const pagina = link.dataset.pagina;
            if (pagina === "inicio") {
        conteudo.innerHTML = paginaInicio;
        }
            if (pagina === "projetos") {
            conteudo.innerHTML = criarProjetos();
        }

        if (pagina === "cadastro") {
        conteudo.innerHTML = criarCadastro();
        ativarMascaras();
        ativarFormulario();
        carregarCadastro();
        }
    });
});

// Templates dinâmicos
const projetos = [
    {
        titulo: "Doações",
        descricao: "As doações ajudam o Projeto ReConecta a recuperar equipamentos eletrônicos."
    },
    {
        titulo: "Voluntariado",
        descricao: "Os voluntários participam das ações do projeto e contribuem com a inclusão digital."
    }
];

function criarProjetos() {
    let html = "";

    projetos.forEach(function (projeto) {
        html += `
            <section>
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
            </section>
        `;
    });

    return html;
}

ativarMascaras();
ativarFormulario();

