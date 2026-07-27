# Publicação futura na Vercel

Última atualização: 2026-07-26

Nenhum deploy, login ou recurso externo foi criado nesta fase.

## Configuração esperada

- Framework preset: Astro
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Output directory: `dist`
- Node.js: 24.x
- Root directory: raiz deste repositório

Astro está em `output: "static"` e não requer adapter. `vercel.json` não é
necessário no estado atual.

## Variáveis públicas

- `PUBLIC_SITE_URL`
- `PUBLIC_GTM_ID`
- `PUBLIC_GA4_ID`
- `PUBLIC_GOOGLE_ADS_ID`
- `PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`
- `PUBLIC_GOOGLE_PLACE_ID`
- `PUBLIC_GOOGLE_MAPS_EMBED_URL`
- `PUBLIC_CLOUDINARY_CLOUD_NAME`
- `PUBLIC_LEAD_ENDPOINT`

Tudo com prefixo `PUBLIC_` pode ser exposto ao navegador/build. Não colocar
segredos nesses campos.

Credenciais futuras de endpoint, tokens de API ou chaves privadas devem usar
nomes sem `PUBLIC_`, existir apenas no ambiente da Vercel e ser acessadas por
código server-side — o que pode exigir endpoint/function e nova decisão
arquitetural.

## Antes do primeiro preview

1. Confirmar domínio/URL e preencher `PUBLIC_SITE_URL`.
2. Confirmar assets e Cloudinary.
3. Executar build com as mesmas variáveis do preview.
4. Revisar política/consentimento antes de habilitar analytics.
5. Garantir que formulário não aponta para endpoint vazio.
6. Confirmar se sitemap e canonical foram gerados.

## Smoke test do preview

- Abrir `/`, `/privacidade`, `/obrigado` e `/robots.txt` diretamente.
- Recarregar cada rota.
- Verificar links WhatsApp, telefone, Instagram e rota.
- Verificar console e requests 4xx/5xx.
- Inspecionar title, description, canonical, OG/Twitter, noindex e sitemap.
- Testar mobile/desktop e teclado.
- Validar que nenhum screenshot entrou no `dist` como asset da página.

## Produção

Publicar somente após aprovação de conteúdo, compliance, privacidade, assets e
tracking. Após o deploy, repetir smoke test na URL real, confirmar cache e
monitorar Web Vitals/conversões sem interpretar clique como lead fechado.
