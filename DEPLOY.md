# 🚀 Guia de Deploy na Vercel

## Deploy Rápido (3 passos)

### 1. Preparar o Git

```bash
# Inicialize o repositório Git
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "🎉 Initial commit: Landing page Espaço Bem Estar"
```

### 2. Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nomeie o repositório: `espaco-bem-estar`
3. **NÃO** inicialize com README (já temos um)
4. Clique em "Create repository"

### 3. Conectar e Enviar

```bash
# Adicione o remote (substitua SEU-USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU-USUARIO/espaco-bem-estar.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

---

## Deploy na Vercel

### Opção A: Interface Web (Mais Fácil)

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório `espaco-bem-estar`
3. Clique em "Deploy"
4. Pronto! 🎉

### Opção B: CLI

```bash
# Instale a Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod
```

---

## ⚙️ Configurações Personalizadas

### Domínio Personalizado

1. No dashboard da Vercel, clique no projeto
2. Vá em "Settings" → "Domains"
3. Adicione seu domínio: `espacobemestarudi.com`
4. Siga as instruções de configuração de DNS

### Variáveis de Ambiente (se necessário)

1. Dashboard → "Settings" → "Environment Variables"
2. Adicione as variáveis do arquivo `.env.example`

---

## 📋 Checklist Pré-Deploy

- [ ] Todas as imagens estão otimizadas
- [ ] Links de WhatsApp estão corretos
- [ ] Informações de contato estão atualizadas
- [ ] Testado em mobile e desktop
- [ ] Meta tags de SEO estão preenchidas
- [ ] Favicon está funcionando

---

## 🔧 Comandos Úteis

```bash
# Testar localmente
npx serve .

# Ou com Python
python -m http.server 8000

# Verificar links quebrados
npx broken-link-checker http://localhost:8000
```

---

## 🆘 Troubleshooting

### Problema: Páginas não carregam (404)

**Solução:** Verifique o arquivo `vercel.json` - ele já está configurado com as rotas corretas.

### Problema: CSS/JS não carrega

**Solução:** Verifique se os caminhos estão relativos (`src/css/...` e não `/src/css/...`)

### Problema: Imagens não aparecem

**Solução:** 
1. Verifique se as imagens estão na pasta `src/img/`
2. Verifique os nomes dos arquivos (case-sensitive)
3. Teste os caminhos no navegador

---

## 📞 Suporte

Se tiver problemas:

1. Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
2. GitHub Issues: Crie uma issue no repositório
3. Comunidade Vercel: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
