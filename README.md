# Brücken - Site

Site institucional da Brücken ([brucken.com.br](https://brucken.com.br)), feito com [Astro](https://astro.build) e publicado no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:4321`. Para gerar a versão final em `dist/`:

```bash
npm run build
npm run preview
```

## Estrutura

```
brucken-web/
├── astro.config.mjs          # URL do site e geração do sitemap
├── public/                   # Copiado como está: favicon, robots.txt, llms.txt, imagens, PDF da LGPD
├── src/
│   ├── site.ts               # Dados institucionais (links de agendamento, WhatsApp, GA4…)
│   ├── styles/global.css     # Design system: cores, tipografia, botões, layout
│   ├── layouts/BaseLayout.astro  # <head>, SEO, Open Graph, JSON-LD, GA4, header e footer
│   ├── components/           # Header, Footer, Icon (Lucide), DecisionPanel, CookieConsent
│   ├── content/              # Textos longos em Markdown (política de privacidade)
│   └── pages/                # index.astro (home), privacidade.astro
└── .github/workflows/deploy.yml  # Build e deploy automático a cada push na main
```

## Design system

- **Cores:** navy `--ink` para texto, azul `--brand` como único acento, laranja `--accent` só para destacar dados.
- **Tipografia:** Inter Variable, auto-hospedada.
- **Componentes:** botões `.btn--primary` / `.btn--secondary`, cards com borda de 1px, ícones Lucide via `<Icon name="…" />`.

Use sempre os tokens de `src/styles/global.css` em vez de cores e tamanhos soltos.

## Deploy

Cada push na `main` dispara o workflow `Deploy to GitHub Pages`; PRs rodam só o build. Em Settings → Pages, a origem é **GitHub Actions** e o domínio personalizado (`brucken.com.br`) fica configurado lá, não em arquivo `CNAME`.

## Analytics

GA4 (`G-LMKF2JBQ64`) com modo de consentimento: o script só carrega depois que o visitante aceita os cookies (`CookieConsent.astro`). A escolha fica no `localStorage` e pode ser revista pelo link "Preferências de cookies" no rodapé. Links com `data-track="…"` enviam o evento `cta_click` com o local do clique.

© Brücken. Todos os direitos reservados.
