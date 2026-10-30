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
│   ├── site.ts               # Dados institucionais (CTA, WhatsApp, GA4, HubSpot…)
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

## Formulário de contato (HubSpot)

O formulário de `/contato/` (`src/components/ContactForm.astro`) envia os dados direto para a [API de formulários do HubSpot](https://developers.hubspot.com/docs/api/marketing/forms), sem carregar scripts do HubSpot na página. Após o envio, o visitante vai para `/contato/obrigado/` (fora do sitemap, com `noindex`) e o GA4 recebe o evento `generate_lead`.

Os códigos do formulário ficam em `src/site.ts` → `hubspot.portalId` e `hubspot.formId`. Enquanto estiverem vazios, o formulário mostra uma mensagem pedindo contato pelo WhatsApp.

Os campos espelham o formulário "Contato Site" do HubSpot. `0-1` grava no **Contato** e `0-2` na **Empresa**:

| Campo no site | Propriedade no HubSpot |
|---|---|
| Nome / Sobrenome | `0-1/firstname`, `0-1/lastname` |
| E-mail corporativo | `0-1/email` |
| Telefone (opcional; +55 por padrão) | `0-1/phone` |
| O que você quer avaliar? | `0-1/message` |
| Nome da empresa | `0-2/nome_da_empresa` |
| Segmento | `0-2/segmento` |
| Seus clientes são | `0-2/tipo_de_clientes` (PF ou PJ) |
| Número aproximado de clientes | `0-2/tamanho_de_base` (número) |

Se um campo mudar de nome no HubSpot, atualize `ContactForm.astro`: campos que não existem no formulário são descartados pelo HubSpot sem erro.

## Analytics

GA4 (`G-LMKF2JBQ64`) com modo de consentimento: o script só carrega depois que o visitante aceita os cookies (`CookieConsent.astro`). A escolha fica no `localStorage` e pode ser revista pelo link "Preferências de cookies" no rodapé. Links com `data-track="…"` enviam o evento `cta_click` com o local do clique.

© Brücken. Todos os direitos reservados.
