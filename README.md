# 🏠 Espaço Bem Estar

Landing page profissional para o **Espaço Bem Estar** - Casa de repouso feminina localizada em Uberlândia/MG.

![License](https://img.shields.io/badge/license-MIT-green)
![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)

## 📋 Sobre o Projeto

O Espaço Bem Estar é uma instituição de longa permanência focada exclusivamente no atendimento a mulheres idosas, oferecendo cuidado humanizado, atenção especial e ambiente acolhedor há mais de 10 anos.

### ✨ Características

- 🎨 **Design moderno e acolhedor** - Paleta de cores pensada para transmitir confiança e carinho
- 📱 **Totalmente responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ♿ **Acessível** - Segue diretrizes WCAG 2.1 AA
- ⚡ **Performance otimizada** - Código limpo e imagens otimizadas
- 🔍 **SEO friendly** - Meta tags e estrutura semântica
- 🎭 **Animações suaves** - Experiência de navegação agradável

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Design system customizado com variáveis CSS
- **JavaScript Vanilla** - Interatividade sem dependências pesadas
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Cormorant Garamond + DM Sans)

## 📁 Estrutura do Projeto

```
espaco-bem-estar/
├── 📄 index.html              # Página principal
├── 📄 sobre.html              # Página "Sobre Nós"
├── 📄 estrutura.html          # Página "Nossa Estrutura"
├── 📄 README.md               # Este arquivo
├── 📄 .gitignore              # Arquivos ignorados pelo Git
├── 📄 vercel.json             # Configuração de deploy na Vercel
└── 📁 src/
    ├── 📁 css/
    │   ├── design-tokens.css  # Variáveis de design (cores, tipografia, espaçamento)
    │   ├── components.css     # Componentes reutilizáveis (botões, cards, formulários)
    │   └── landing.css        # Estilos específicos da landing page
    ├── 📁 js/
    │   └── landing.js         # Interatividade (menu, scroll, formulário, animações)
    └── 📁 img/
        ├── logo.png           # Logo do Espaço Bem Estar
        ├── exemplo.jpg        # Fotos da estrutura
        ├── fundo.png          # Imagens de fundo
        └── bem estar bg.png   # Background
```

## 🛠️ Como Executar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/espaco-bem-estar.git
   cd espaco-bem-estar
   ```

2. **Abra o arquivo index.html**
   
   Você pode simplesmente abrir o arquivo `index.html` no navegador ou usar uma extensão como o Live Server do VS Code.

   ```bash
   # Opção 1: Abrir diretamente
   start index.html

   # Opção 2: Usando Python (se tiver instalado)
   python -m http.server 8000
   
   # Opção 3: Usando Node.js (npx serve)
   npx serve .
   ```

3. **Acesse no navegador**
   
   http://localhost:8000

## 🌐 Deploy na Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. Crie um repositório no GitHub
2. Envie o código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/espaco-bem-estar.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com)
4. Clique em "New Project"
5. Importe o repositório do GitHub
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

1. Instale a Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Faça login:
   ```bash
   vercel login
   ```

3. Execute o deploy:
   ```bash
   vercel
   ```

4. Para deploy em produção:
   ```bash
   vercel --prod
   ```

## 📝 Seções da Landing Page

| Seção | Descrição |
|-------|-----------|
| **Hero** | Chamada principal com estatísticas e botões de ação |
| **Serviços** | 6 cards com os principais serviços oferecidos |
| **Sobre** | História, propósito e diferenciais |
| **Estrutura** | Galeria de fotos e características físicas |
| **Depoimentos** | Feedback de familiares |
| **Contato** | Informações e formulário de contato |

## 🎨 Design System

### Cores Principais

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Primário | `#3D8B6F` | Botões, links, destaques |
| Bege/Cream | `#F5F0E8` | Fundos, cards |
| Dourado/Âmbar | `#D4A574` | Acentos, destaques especiais |

### Tipografia

- **Títulos:** Cormorant Garamond (serifada, elegante)
- **Corpo:** DM Sans (sans-serif, legível)

## 🔧 Personalização

### Alterar Cores

Edite o arquivo `src/css/design-tokens.css`:

```css
:root {
  --color-primary-500: #3D8B6F;  /* Cor principal */
  --color-accent-400: #D4A574;   /* Cor de destaque */
  --color-warm-200: #F5F0E8;     /* Fundo */
}
```

### Alterar Conteúdo

Cada seção está claramente identificada nos arquivos HTML com comentários:

```html
<!-- ==========================================
     HERO SECTION
     ========================================== -->
```

## 📞 Contato do Projeto

Para dúvidas ou sugestões sobre o site:

- **WhatsApp:** (34) 99652-5295
- **Endereço:** R. dos Ceamitas, 871 - Chácaras Panorama, Uberlândia/MG

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💚 para o Espaço Bem Estar
</p>
