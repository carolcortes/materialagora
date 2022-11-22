# SuperHero App

Projeto desenvolvido para o desafio técnico da [Material Agora](http://www.materialagora.com.br/).

https://carolcortes.github.io/materialagora/

## Desafio

A Material Agora nasceu para descomplicar o dia a dia de todos que estão realizando obras através de uma forma simples de comprar sem ter que gastar tempo com pesquisa, deslocamento e transporte.

Para o desafio você precisa criar um app basico inspirado em super heróis e vilões utilizando a SuperHeroAPI como fonte de dados. A app deverá conter um CRUD básico dos heróis e o gerenciamento de listas, como descrito abaixo nos requisitos:

- O app deve ser escrito usando o framework **React**;
- Consumir os dados dos heróis diretamente da https://superheroapi.com;
- Ser possível visualizar todos os heróis disponíveis;
- Ser possível pesquisar um herói/vilao pelo nome;
- Ser possível visualizar cada herói individualmente e suas respectivas características;
- Ser possível criar, editar e visualizar grupos de heróis (listas) com nome customizado;
- Ser possível adicionar ou remover um herói/vilao de uma lista.

> Pensar no app como um pequeno e-commerce onde os heróis/viloes sao os produtos pode ajudar.

### Primeiros passos:
1. Clone o repositório
  ``git clone git@github.com:carolcortes/materialagora.git``

#### Acesso da aplicação local:
2. No repositório clonado, instale as dependências do projeto:
  ``npm install``
3. Inicie o app para visualização da página e acesse através da porta 3000:
  ``npm start``
  - http://localhost:3000/ 

#### Acesso da aplicação local com Docker:
2. No repositório clonado, inicie o container da aplicação:
  ``docker-compose up``
4. Acesse a aplicação através da porta 3001: http://localhost:3001/

### Desenvolvimento:
- Projeto de Front-end de uma aplicação para consulta de heróis e vilões de diferentes editoras. 

- Desenvolvido com React.js, utilizando React Router, React Hooks e Context API.

- Integração com a API de super-heróis [SuperHero API](https://www.superheroapi.com/) utilizando a biblioteca [Axios](https://axios-http.com/ptbr/docs/intro).

- Conteinerização da aplicação em React com Docker.

### Utilização da aplicação:
Ao utilizar a aplicação, o usuário é capaz de:

  - Na página inicial, visualizar os Cards de cada herói;
  - Realizar a busca de heróis pelo nome;
  - Adicionar ou remover os heróis escolhidos pelo usuário aos favoritos;
  - Selecionar os heróis e adicioná-los a um novo grupo nomeado pelo usuário;
  - Na barra de navegação lateral, visualizar ou remover os heróis favoritados;
  - Na barra de navegação lateral, visualizar, remover ou editar o nome dos grupos criados.
  - Remover um usuário individualmente de cada grupo.
  - Acessar a página de detalhes clicando na foto ou nome de cada herói.


###### Projeto desenvolvido por: [Carol Cortes](https://github.com/carolcortes)

  <a href = "mailto:caroline.ocortes@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/carolinecortess/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
