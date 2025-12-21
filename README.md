# WInsight Landing Page

Landing page do WInsight convertida de HTML para Next.js com React e TypeScript.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **React 18** - Biblioteca JavaScript
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **Inter Font** - Fonte do Google

## 📁 Estrutura do Projeto

```
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── Header.tsx           # Cabeçalho/Navbar
│   ├── Hero.tsx             # Seção hero
│   ├── Problem.tsx          # Seção do problema
│   ├── Solution.tsx         # Seção da solução
│   ├── Audience.tsx         # Público-alvo
│   ├── Demo.tsx             # Demonstração
│   ├── Benefits.tsx         # Benefícios
│   ├── VideoSection.tsx     # Seção de vídeo
│   ├── SocialProof.tsx      # Prova social
│   ├── FAQ.tsx              # Perguntas frequentes
│   ├── CTA.tsx              # Call-to-action
│   ├── Footer.tsx           # Rodapé
│   └── VideoModal.tsx       # Modal de vídeo
├── hooks/
│   ├── useScrollAnimations.ts # Hook para animações
│   └── useNavbarScroll.ts     # Hook para navbar
└── public/
    └── img/                 # Imagens e vídeos
```

## 🛠️ Instalação

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Copie as imagens:**
   Mova a pasta `img/` para `public/img/`

3. **Execute o projeto:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## ✨ Funcionalidades

- ✅ Design responsivo
- ✅ Animações de scroll
- ✅ Modal de vídeo interativo
- ✅ Navbar com mudança de cor no scroll
- ✅ FAQ interativo
- ✅ Formulário de contato
- ✅ Efeito de pulsar no botão de play
- ✅ Componentes modulares
- ✅ TypeScript para tipagem
- ✅ Hooks personalizados

## 🎨 Customização

### Cores
As cores principais estão definidas no `tailwind.config.js`:
- `primary-orange`: #FF5C39
- `dark-bg`: #1e293b

### Componentes
Cada seção é um componente independente em `components/`, facilitando manutenção e reutilização.

### Animações
As animações de scroll são controladas pelo hook `useScrollAnimations.ts`.

## 📱 Responsividade

O projeto é totalmente responsivo, com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

Para fazer deploy:

```bash
npm run build
npm start
```

Ou use plataformas como Vercel, Netlify ou AWS.

## 📄 Licença

Este projeto é privado e pertence à WInsight.