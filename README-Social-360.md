### Social 360

Portal de notícias desenvolvido com **Next.js**, **React**, **TypeScript** e **Tailwind CSS**, com foco em publicação de notícias, destaques, categorias, publicidade e apresentação responsiva em diferentes dispositivos.

## 1. Sobre o projeto

O **Social 360** é um site de notícias com uma estrutura preparada para apresentar conteúdos jornalísticos de forma organizada e responsiva.

O projeto inclui:

- Página inicial
- Menu de navegação
- Manchetes e notícias em destaque
- Últimas notícias
- Categorias de notícias
- Notícias secundárias
- Publicidade com slider
- Colunistas/opinião
- Notícias em destaque
- Mais notícias
- Footer institucional
- Sistema de tema
- Edição Impressa
- Área de login e cadastro (Em desenvolvimento)
- Estrutura de painel administrativo (Em desenvolvimento)

## 2. Tecnologias utilizadas

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Swiper**
- **Lucide React**
- **React Icons**
- **next/image**

## 3. Requisitos para executar o projeto

Para abrir o projeto localmente, é necessário ter:

- **Node.js 20.9 ou superior**
- **npm**
- Navegador moderno
- Git (opcional)

O projeto é uma aplicação **Next.js/Node.js**. Não é necessário instalar PHP, XAMPP ou Apache para executá-lo localmente.

Referência oficial do Next.js:
https://nextjs.org/docs/app/getting-started/installation

## 4. Como abrir o projeto no computador

Depois de receber o projeto, abra o terminal dentro da pasta principal e execute:

```bash
npm install
```

Esse comando instala todas as dependências do projeto.

Para iniciar em modo de desenvolvimento:

```bash
npm run dev
```

Depois abra no navegador:

```text
http://localhost:3000
```

Caso a porta 3000 esteja ocupada, pode ser utilizada outra porta, por exemplo:

```bash
npm run dev -- -p 3001
```

e acessar:

```text
http://localhost:3001
```

## 5. Executar em modo de produção

Para gerar e testar a versão de produção:

```bash
npm run build
```

Depois:

```bash
npm run start
```

A aplicação ficará disponível na porta configurada pelo ambiente, normalmente:

```text
http://localhost:3000
```

## 6. Requisitos para hospedagem

Para hospedar o Social 360 com a aplicação Next.js completa, o servidor deve permitir a execução de **Node.js**.

Requisitos recomendados:

- Node.js **20.9+**
- npm
- Suporte para aplicações Next.js
- Acesso SSH/terminal ou painel com suporte a Node.js
- Domínio
- HTTPS/SSL

### Servidor recomendado

Uma **VPS Linux** com Node.js é uma opção adequada para a aplicação.

Hospedagens com cPanel também podem ser utilizadas **desde que o plano permita executar aplicações Node.js/Next.js**.

### Importante

Um servidor que disponibilize somente:

```text
PHP + Apache + MySQL
```

sem suporte a Node.js não é suficiente para executar diretamente esta versão do Social 360.

Não é necessário converter o projeto para PHP.

## 7. Arquivos que devem ser enviados

Ao transferir o projeto para o servidor, devem ser enviados os arquivos do código-fonte, incluindo:

```text
app/
components/
public/
package.json
package-lock.json
next.config.*
tsconfig.json
postcss.config.*
README.md
```

Não é necessário enviar:

```text
node_modules/
.next/
```

Essas pastas podem ser recriadas no servidor.

## 8. Instalação no servidor

Depois de colocar o projeto no servidor:

```bash
npm install
```

Criar a versão de produção:

```bash
npm run build
```

Iniciar a aplicação:

```bash
npm run start
```

Para manter a aplicação rodando continuamente em um servidor Linux, recomenda-se utilizar um gerenciador de processos ou uma configuração equivalente de serviço.

## 9. Domínio e HTTPS

Após a aplicação estar funcionando, o domínio deve ser apontado para o servidor.

Exemplo:

```text
https://social360.com
```

Em uma VPS, pode ser utilizado um proxy reverso, como Nginx, para encaminhar o tráfego do domínio para a aplicação Next.js.

Também é recomendado utilizar HTTPS/SSL em produção.

## 10. Variáveis de ambiente

Se a aplicação utilizar serviços externos, banco de dados, autenticação, CMS ou APIs, as variáveis de ambiente devem ser configuradas no servidor.

Exemplo:

```env
DATABASE_URL=
AUTH_SECRET=
NEXT_PUBLIC_API_URL=
```

As credenciais reais não devem ser colocadas diretamente no código-fonte.

Também não devem ser enviados para o cliente/repositório arquivos contendo senhas ou chaves privadas, como um `.env` real.

Quando disponível, utilize:

```text
.env.example
```

como modelo para configuração.

## 11. Estrutura do projeto

Uma estrutura típica do Social 360:

```text
social360/
│
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│
├── components/
│   ├── admin/
│   ├── home/
│   ├── navbar/
│   ├── footer/
│   └── ...
│
├── public/
│   ├── images/
│   ├── ads/
│   └── ...
│
├── package.json
├── package-lock.json
├── next.config.*
├── tsconfig.json
└── README.md
```

## 12. Principais rotas

Site:

```text
/
```

Login:

```text
/login
```

Cadastro:

```text
/cadastro
```

Painel administrativo:

```text
/admin
```

As demais rotas dependem dos módulos implementados no projeto.

## 13. Conteúdo e componentes principais

A página inicial foi estruturada com componentes independentes para facilitar manutenção e futuras integrações com CMS ou banco de dados.

Exemplos:

```text
HeroNews
LatestNews
Advertisement
NewsGrid
NewsContent
OpinionColumnists
FeaturedNews
NewsSection
MoreNews
Footer
Navbar
```

Isso permite alterar uma parte do site sem precisar reescrever toda a página.

## 14. Publicidade

As imagens de publicidade ficam normalmente dentro da pasta:

```text
public/ads/
```

Exemplo:

```text
public/ads/pub1.jpg
public/ads/pub2.jpg
public/ads/pub3.jpg
```

O componente de publicidade apresenta os banners em um slider automático.

## 15. Imagens

As imagens estáticas utilizadas pelo site devem ser armazenadas dentro de:

```text
public/
```

Exemplo:

```text
public/images/logo.png
public/colabora1.jpeg
public/colabora2.jpeg
public/colabora4.jpeg
```

No código Next.js, essas imagens podem ser utilizadas através do caminho público:

```tsx
<Image
  src="/images/logo.png"
  alt="Social 360"
/>
```

## 16. Painel administrativo

O projeto possui uma área administrativa separada da interface pública.

Exemplo:

```text
/admin
```

O painel pode conter módulos como:

```text
Dashboard
Notícias
Categorias
Publicidade
Utilizadores
Configurações
```

A área administrativa deve ser protegida por autenticação e permissões antes de ser utilizada em produção.

## 17. Banco de dados e CMS

A versão do frontend pode inicialmente utilizar dados locais nos componentes.

Caso o projeto seja ligado posteriormente a um banco de dados ou CMS, os conteúdos como:

- notícias
- categorias
- imagens
- destaques
- publicidade
- utilizadores

podem passar a ser administrados através de um painel.

Nesse cenário, será necessário configurar o respetivo banco de dados, API/CMS e variáveis de ambiente.

## 18. Boas práticas de entrega ao cliente

Recomenda-se entregar:

```text
Social360/
├── código-fonte
├── package.json
├── package-lock.json
├── public/
├── README.md
└── .env.example
```

Não entregar:

```text
node_modules/
.next/
.env
```

Também é recomendado manter uma cópia do projeto em um repositório Git privado.

## 19. Processo recomendado de instalação

```text
Receber projeto
      ↓
Instalar Node.js 20.9+
      ↓
Colocar projeto no servidor
      ↓
npm install
      ↓
Configurar variáveis de ambiente
      ↓
npm run build
      ↓
npm run start
      ↓
Configurar domínio
      ↓
Configurar HTTPS
      ↓
Testar site
      ↓
Testar painel administrativo
```

## 20. Problemas comuns

### Node.js não encontrado

Se aparecer uma mensagem como:

```text
'npm' is not recognized...
```

verifique se o Node.js está instalado e se foi adicionado ao PATH do sistema.

### Dependência não encontrada

Execute novamente:

```bash
npm install
```

### Erro durante o build

Execute:

```bash
npm run build
```

e verifique a mensagem apresentada no terminal.

### Porta ocupada

Use outra porta:

```bash
npm run dev -- -p 3001
```

### O site funciona localmente mas não no servidor

Verifique:

- versão do Node.js
- instalação das dependências
- resultado de `npm run build`
- processo `npm run start`
- configuração do domínio
- proxy reverso
- HTTPS
- variáveis de ambiente

## 21. Resumo para o cliente

Para utilizar o projeto localmente:

```bash
npm install
npm run dev
```

Para publicar em produção:

```bash
npm install
npm run build
npm run start
```

### Requisito principal

O servidor precisa ter suporte a **Node.js 20.9+ e aplicações Next.js**.


## 21. Como baixar o projeto pelo GitHub

O projeto pode ser obtido diretamente do repositório GitHub, desde que o utilizador tenha acesso ao repositório.

### Opção A — Clonar pelo Git

Com o Git instalado, abra o terminal e execute:

```bash
git clone URL_DO_REPOSITORIO
```

Exemplo:

```bash
git clone https://github.com/SEU-USUARIO/social-360.git
```

Depois entre na pasta:

```bash
cd social-360
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

### Opção B — Baixar pelo navegador

Na página do repositório GitHub:

```text
Code
  ↓
Download ZIP
```

Depois:

1. Extraia o arquivo ZIP.
2. Abra a pasta do projeto no terminal.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Acesse `http://localhost:3000`.

## 22. Como utilizar o projeto depois de baixado

Depois da instalação, o fluxo normal de utilização é:

```text
Baixar/Clonar o projeto
        ↓
Entrar na pasta
        ↓
npm install
        ↓
npm run dev
        ↓
Abrir http://localhost:3000
```

Para desenvolvimento, utilize:

```bash
npm run dev
```

Para preparar uma versão de produção:

```bash
npm run build
npm run start
```

### Atualizar o projeto quando houver novas versões

Se o projeto estiver clonado pelo Git, entre na pasta e execute:

```bash
git pull
```

Depois, caso existam novas dependências:

```bash
npm install
```

E para voltar ao desenvolvimento:

```bash
npm run dev
```

### Importante sobre o repositório

Substitua o exemplo:

```text
https://github.com/SEU-USUARIO/social-360.git
```

pelo **link real do repositório GitHub do Social 360** antes de entregar o README ao cliente.

Se o repositório for privado, o utilizador precisará ter autorização de acesso ao repositório para conseguir cloná-lo.

---

**Projeto:** Social 360  
**Tipo:** Portal de Notícias  
**Framework:** Next.js 16  
**Linguagem:** TypeScript  
**Frontend:** React + Tailwind CSS  
