# Sistema Web de Pesquisa de Atletas

Este é um sistema web desenvolvido em ReactJS que permite a pesquisa de atletas de diferentes esportes. O projeto utiliza uma API de esportes para buscar informações sobre os atletas e exibi-las de forma organizada.

## Requisitos do Projeto

### Funcionalidades

A. **Tela de Pesquisa de Atletas**: O sistema possui uma tela onde é possível pesquisar atletas de um determinado esporte utilizando uma API de esportes.

B. **Pesquisa por Nome**: Os atletas podem ser pesquisados pelo seu nome.

C. **Componente `CardAtleta`**: As informações dos atletas são exibidas em um componente chamado `CardAtleta`.

D. **Exibição de Imagem**: Cada `CardAtleta` exibe uma imagem do atleta.

E. **Adicionar aos Favoritos**: Cada `CardAtleta` possui um botão "Adicionar aos favoritos", que permite ao usuário guardar o atleta em um array de favoritos.

F. **Componente `Painel Favoritos`**: O sistema inclui um componente chamado `Painel Favoritos`, que exibe todos os atletas que foram adicionados aos favoritos.

G. **Estrutura do Componente Raiz**: Todos os componentes são exibidos no componente raiz `App.js`.

H. **Versionamento e Hospedagem**: O sistema está versionado no GitHub e hospedado no Vercel.

## Tecnologias Utilizadas

- ReactJS
- Axios (ou Fetch API para chamadas de API)
- CSS (ou uma biblioteca de estilos como Styled Components)
- Git e GitHub para versionamento
- Vercel para hospedagem

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
