# Sistema de Pesquisa e Favoritos de Atletas

Este é um projeto web desenvolvido com ReactJS que permite aos usuários pesquisar atletas de um determinado esporte e adicionar seus atletas favoritos a um painel personalizado. O projeto utiliza uma API de esportes para obter os dados dos atletas e foi hospedado no Vercel para fácil acesso.

## Funcionalidades

- **Pesquisa de atletas**: Pesquise por atletas usando seus nomes.
- **Exibição de informações**: Visualize as informações dos atletas em cartões (componente `CardAtleta`).
- **Imagens dos atletas**: Cada atleta possui uma imagem exibida no cartão.
- **Favoritar atletas**: Adicione atletas aos favoritos com um botão "Adicionar aos favoritos".
- **Painel de favoritos**: Veja todos os atletas favoritos no componente `PainelFavoritos`.

## Tecnologias Utilizadas

- ReactJS com VITE
- CSS para estilização
- API de esportes: https://www.api-football.com/
- Vercel para hospedagem
- Git/GitHub para controle de versão

## Pré-requisitos

Antes de começar, você precisará ter o Node.js instalado na sua máquina.

- [Node.js](https://nodejs.org/)

## Como Executar Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/BrenoLima54/Atividade---Projetos-de-Sistemas-Web

   ```

2. Acesse o diretório do projeto:

   ```bash
   cd Atividade---Projetos-de-Sistemas-Web

   ```

3. Instale as dependências:

   ```bash
   npm install

   ```
4. Configurar a API
Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```env
VITE_API_URL=https://v1.mma.api-sports.io
VITE_API_KEY=sua-chave-api
```
No arquivo `services/api.js`, certifique-se de usar estas variáveis para configurar a URL da API esportiva e as credenciais necessárias.

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Hospedagem

O projeto está hospedado no Vercel e pode ser acessado no seguinte link:

https://search-athlets.vercel.app/

## Desenvolvedores

Os responsáveis pelo desenvolvimento deste projeto são:

- [Breno Lima](https://github.com/BrenoLima54) - **BrenoLima54**
- [Matheus Eduardo](https://github.com/BarbosaNath) - **BarbosaNath**
- [Francinilton Junior](https://github.com/chapoliso) - **chapoliso**
