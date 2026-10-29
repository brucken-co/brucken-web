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
├── public/                   # Copiado como está: CNAME, favicon, robots.txt, imagens, PDF da LGPD
├── src/
│   ├── site.ts               # Dados institucionais (links de agendamento, WhatsApp, GA4…)
│   ├── styles/global.css     # Design system: cores, tipografia, botões, layout
│   ├── layouts/BaseLayout.astro  # <head>, SEO, Open Graph, JSON-LD, GA4, header e footer
│   ├── components/           # Header, Footer, Icon (Lucide), DecisionPanel
│   └── pages/index.astro     # Home
└── .github/workflows/deploy.yml  # Build e deploy automático a cada push na main
```

## Design system

- **Cores:** navy `--ink` para texto, azul `--brand` como único acento, laranja `--accent` só para destacar dados.
- **Tipografia:** Inter Variable (interface e títulos); Source Serif 4 reservada para textos longos (Insights).
- **Componentes:** botões `.btn--primary` / `.btn--secondary`, cards com borda de 1px, ícones Lucide via `<Icon name="…" />`.

Use sempre os tokens de `src/styles/global.css` em vez de cores e tamanhos soltos.

## Deploy

Cada push na `main` dispara o workflow `Deploy to GitHub Pages`. Em Settings → Pages, a origem precisa ser **GitHub Actions**.

## Analytics

GA4 (`G-LMKF2JBQ64`) carregado no layout. Links com `data-track="…"` enviam o evento `cta_click` com o local do clique.

© Brücken. Todos os direitos reservados.
