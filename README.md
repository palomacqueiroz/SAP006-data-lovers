# Data Lovers

## Índice

- [1. Projeto](#1-projeto)
- [2. Tema](#3-tema)
- [3. Usuários](#-usuários)
- [4. Desenho de interface do usuário](#4-desenho-de-interface-do-usuário)
- [5. Testes de Usabilidade](#5-teste-de-usabilidade)
- [6. Testes Unitários](#6-testes-unitário)
- [7. Objetivos de Aprendizagem](#7-objetivos-de-aprendizagem)

---

## 1. Projeto

O projeto tem como objetivo o desenvolvimento de um aplicação web em que o usuário possa filtrar, ordenar, visualizar cálculo agregado e demais informações, através de uma interface amigável.

Visualize o site [aqui](https://data-lovers-studio-ghibli.netlify.app/)

## 2. Tema

Escolhemos como tema do projeto o dataset sobre o Studio Ghibli. 
O estúdio de cinema de animação japonês é conhecido por seus filmes com heroínas fortes, cenas com paisagens da natureza e criaturas incríveis, presentes em todos os filmes. Um dos filmes mais famosos do estúdio é A Viagem de Chihiro, vencedor do Oscar(2003) de Melhor Animação.

## 3. Usuários

### Definição do Usuário(a)

- Usuários principais do produto: Adultos, fãs do Studio Ghibli que buscam "resgatar" a infância.

- Objetivos dos usuários com relação ao produto: ver todos os personagens, filmes com notas mais altas, todos os filmes de um diretor ou produtor específico.

- Dados mais relevantes que querem ver na interface: 
Nomes e personagens dos filmes, ano de lançamento e notas.

- Quando utilizam ou utilizariam o produto:
O usuário acessa o site depois de assistir a um filme para saber mais detalhes ou curiosidades e/ou informações mais refinadas. 

### Histórias de Usuáro

A história de usuário é uma descrição curta, informal e em linguagem simples do que um usuário quer fazer dentro da aplicação.
Como história de usuário usamos três cenários que simbolizam as necessidades deste com relação a aplicação.

1. História
Como fã dos filmes quero ver alguma informação na tela sobre os filmes do produtor Isao Takahata.

2. História
Como fã dos filmes quero filtrar categorias  por produtor, diretor, personagens e ver na tela as informações em cards.

3. Historia
Como usuário quero ver as informações na tela em ordem alfabética, cliclando em um botão.

### O usuário(a) poderá realiazar as seguintes ações nesta aplicação:

- Escolher uma opção para filtrar e ver filmes ou personagens relacionados a esta opção.

- Visualizar filmes por notas e data de lançamento em ordem decrescente.

- Ordenar as informações por ordem alfabética clicando em um botão. 

- Visualizar cálculos de média de notas dos filmes e a porcentagem de representatividade de um genero ou espécie, dentre todos os filmes.

- Ser direcionado(a) através de links para informações extras sobre Studio Ghibli como: ler curiosidades, escutar trilha sonora e assitir aos filmes.


## 4. Desenho de interface do usuário

No primeiro planejamento para o projeto, decidimos em relação ao layout, fazer um dashboard e as informações ficariam no centro da tela dispostas em cards para cada filme.

![desenho](https://github.com/palomacqueiroz/SAP006-data-lovers/blob/main/desenho.png)

Com o desenvolvimento do projeto, fizemos os protótipos no Figma para definir melhor como queríamos os layouts.

![protótipo](https://github.com/palomacqueiroz/SAP006-data-lovers/blob/main/prototipoBaixaFidelidade.png)

Após finalizarmos o projeto, tinhamos o seguinte layout:

![principal](https://github.com/palomacqueiroz/SAP006-data-lovers/blob/main/telaInicial.png)


### Paleta de Cores

Fizemos pesquisas sobre o Estudio Ghibli para saber quais cores são mais usadas nos filmes para usá-las em nossa aplicação.

![paleta](https://github.com/palomacqueiroz/SAP006-data-lovers/blob/main/paleta.png)


## 5. Testes de Usabilidade

Fizemos pesquisas com usuários sobre a utilização da página e recebemos alguns feedbacks:

1. Problema nos seletores dos filtros; o filtro depois de selecionado não voltava para seu estado inicial, dando a entender que ainda estava sendo utilizado.

- Para implementar uma solução, conseguimos fazer com que os filtros mudem para o estado inicial, quando outro é selecionado.

2. Responsividade na barra lateral. Um dos itens da lista mudava a posição ao alterar o tamanho do display.

- Aplicamos uma propriedade no CSS chamada white-space e colocamos o valor nowrap para retirar os espaços em branco para não quebrar linha. Para evitar o mesmo problema no display Mobile mudamos o valor da propriedade para Normal.

3. incluir o nome do projeto em um lugar onde possam visualizar (mobile).

- Incluimos o nome Studio Ghibli na barra lateral.

![foto] ()

## 6. Testes Unitários

Escrevemos os testes unitários  para verificar se as funções JavaScript estão funcionando e garantir que a aplicação continue funcionando após alguma alteração em sua base do código.

![testes](https://github.com/palomacqueiroz/SAP006-data-lovers/blob/main/test.png)


## 7. Objetivos dOe Aprendizagem

### HTML e CSS

- [X] [Uso de HTML semântico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
- [X] Uso de seletores de CSS.
- [X] Construir sua aplicação respeitando o desenho realizado (protótipo).
- [X] [Uso de flexbox em CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM e Web APIs

- [X] Uso de seletores de DOM.
- [X] Gerenciamento de eventos de DOM.
- [X] [Manipulação dinâmica de DOM.](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o) (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

- [X] Uso de condicionais (if-else | switch | operador ternário)
- [X] Uso de laços (for | for..in | for..of | while)
- [X] Uso de funções (parâmetros | argumentos | valor de retorno)
- [X] Manipular arrays (filter | map | sort | reduce)
- [X] Manipular objects (value)
- [X] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [X] Diferenciar entre expression e statements.
- [X] Diferenciar entre tipos de dados atômicos e estruturados.

### Testing

- [X] [Teste unitário.](https://jestjs.io/docs/pt-BR/getting-started)

### Estrutura do código e guia de estilo

- [X] Organizar e dividir o código em módulos (Modularização)
- [X] Uso de identificadores descritivos (Nomenclatura | Semântica)
- [X] Uso de linter (ESLINT)

### Git e GitHub

- [X] Uso de comandos de git (add | commit | pull | status | push)
- [X] Gerenciar repositórios de GitHub (clone | fork | gh-pages)
- [X] Colaboração no Github (branches | pull requests | |tags)
