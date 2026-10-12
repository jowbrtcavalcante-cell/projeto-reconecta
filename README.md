# Projeto ReConecta

ONG voltada ao reaproveitamento de equipamentos eletrônicos e à inclusão digital.

## Sobre o projeto

O ReConecta recebe equipamentos eletrônicos em desuso, realiza a triagem e o reaproveitamento das peças que ainda podem ser utilizadas e destina o restante à reciclagem especializada. O objetivo é reduzir o descarte irregular de lixo eletrônico e ampliar o acesso à tecnologia por meio da doação de equipamentos recuperados.

## Estrutura do projeto

projetoOng/
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── imagens/
├── js/
│   ├── script.js
│   └── modules/
│       └── formularios.js
└── README.md
git 
## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git e GitHub

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `html/index.html` em qualquer navegador moderno.

Não é necessário servidor ou instalação de dependências.

## Funcionalidades

- Navegação entre as páginas Início, Projetos e Cadastro.
- Layout responsivo com CSS Grid e Flexbox.
- Menu hambúrguer para dispositivos móveis.
- Formulário de cadastro com máscaras para CPF, telefone e CEP.

## Versionamento

O projeto utiliza Git para controle de versão e o GitHub como repositório remoto, seguindo uma adaptação do fluxo GitFlow:

- **main** — contém as versões estáveis do projeto.
- **develop** — branch de integração, onde as funcionalidades são reunidas antes de chegarem à `main`.
- **feature/...** — branches de trabalho criadas a partir da `develop` para desenvolver cada funcionalidade de forma isolada.

As alterações são registradas por meio de commits com mensagens descritivas e, quando concluídas, integradas à `develop` por meio de Pull Requests vinculados às issues correspondentes.

## Licença

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Front-end.