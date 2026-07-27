# Changelog

Todas as mudanças relevantes deste projeto serão registradas aqui.

## [0.3.0] — 2026-07-27

### Adicionado

- Primeira home visual mobile-first com hero, confiança, necessidades,
  profissionais, localização, CTA final e rodapé.
- Registro de visibilidade das seções em `src/config/home-sections.ts`.
- `src/lib/cloudinary.ts` com transformações responsivas AVIF/WebP.
- Tracking tipado de CTAs e visualização de profissionais, além de menu mobile
  progressivo.
- Preview Vercel público para validação da etapa.

### Alterado

- Hero e retratos passaram a usar os assets Cloudinary confirmados com
  `srcset`, dimensões explícitas e estratégia de carregamento por prioridade.
- Seções clínicas pendentes continuam preparadas, mas não são renderizadas.
- A autenticação SSO padrão do Preview foi removida após o teste mobile anônimo
  receber a página de login da Vercel em vez da landing.
- Handoff, decisões, plano de implementação, questões abertas e posicionamento
  de mídia atualizados para a Fase 02B.

## [0.2.0] — 2026-07-26

### Adicionado

- Copy deck das 15 seções, plano SEO, especificações editoriais e plano de
  posicionamento de mídia.
- Cinco assets Cloudinary confirmados: hero, favicon, dois retratos e Open
  Graph.
- Placeholders formais para toda mídia ainda ausente.
- Status tipados `ready`, `partial` e `pending` para a copy da home.
- Requisitos de publicação para tratamentos, resultados, depoimentos e FAQ.

### Alterado

- Metadados SEO da home, Open Graph e favicon conectados ao layout base.
- Documentação de arquitetura, fonte de verdade, pendências e implementação
  atualizada para a fase 02A.

## [0.1.0] — 2026-07-26

### Adicionado

- Fundação Astro 7 em SSG com TypeScript strict e pnpm.
- Design tokens e estilos globais.
- Dados centrais da clínica, mídia e analytics tipados.
- Layout, componentes estruturais e páginas mínimas.
- Arquitetura de SEO, schema, WhatsApp e Cloudinary.
- Inventário e análise das 15 referências visuais.
- Documentação de conteúdo, conversão, performance, acessibilidade, compliance,
  implantação e handoff.

### Decisões

- Node.js 24 LTS.
- Sitemap condicional ao domínio real.
- Conteúdo clínico vazio até confirmação.
- Nenhum screenshot ou asset simulado na página.

# [0.4.0] — 2026-07-27

## Fase 02C

- Conclusão visual mobile-first com resultados, tratamentos, processo, clínica,
  diferenciais e FAQ na home.
- Rollers verticais com linha/seta, marquee decorativo, reveals progressivos e
  suporte a reduced motion.
- Comparador antes/depois neutro, trilho horizontal com scroll-snap, mapa
  temporário por endereço e capturas de QA em `docs/audits/02c-final/`.
- Conteúdo clínico não confirmado permanece sinalizado; logos aprovadas ainda
  não foram recebidas.
