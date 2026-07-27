# Registro de decisões

Última atualização: 2026-07-26

## D-001 — referências permanecem em `docs/references`

- **Decisão:** preservar o caminho recebido, embora o briefing cite
  `referencias-visuais/`.
- **Motivo:** evitar mover/renomear arquivos fornecidos e manter histórico
  claro.
- **Consequência:** AGENTS e manifest apontam para o caminho real.

## D-002 — Astro 7.1.3 em SSG

- **Decisão:** Astro 7.1.3, `output: "static"`, sem framework de UI.
- **Motivo:** versão estável consultada em 2026-07-26; landing essencialmente
  estática, com mínimo JavaScript.
- **Consequência:** Vercel pode servir o diretório `dist` sem adapter.

## D-003 — Node.js 24 LTS

- **Decisão:** linha 24.x em `engines` e 24.18.0 em `.nvmrc`.
- **Motivo:** Node 24 é LTS, atende ao mínimo do Astro (22.12+) e é suportado
  pela Vercel.
- **Consequência:** ambiente local atual 24.15.0 é compatível; CI/Vercel deve
  usar a linha 24.

## D-004 — TypeScript 6.0.3

- **Decisão:** fixar a versão 6.0.3.
- **Motivo:** é a versão estável mais recente compatível com o peer range do
  `@astrojs/check` 0.9.9; TypeScript 7.0.2 ainda está fora desse contrato.

## D-005 — sitemap condicional

- **Decisão:** ativar `@astrojs/sitemap` somente quando `PUBLIC_SITE_URL`
  existir.
- **Motivo:** não inventar domínio e manter build local funcional.

## D-006 — conteúdo ausente permanece vazio

- **Decisão:** tratamentos, resultados, depoimentos e FAQ são arrays tipados
  vazios.
- **Motivo:** placeholder tende a ser publicado por acidente.

## D-007 — marca textual provisória

- **Decisão:** não usar os WebPs recebidos como logo de produção na página
  inicial.
- **Motivo:** são referências raster; o contrato pede SVG final.

## D-008 — menu mobile sem dependência de JavaScript

- **Decisão:** usar `<details>`/`<summary>` na fundação.
- **Motivo:** navegação funcional antes de JavaScript. A fase visual pode
  aprimorar foco/Escape com script mínimo se um drawer for necessário.

## D-009 — sem schema publicado nesta fase

- **Decisão:** fornecer helper tipado, sem injetá-lo automaticamente.
- **Motivo:** URL oficial e outros campos de implantação ainda estão ausentes.

## D-010 — sem `vercel.json`

- **Decisão:** não criar configuração específica.
- **Motivo:** Astro SSG é detectado pela Vercel e não há necessidade real nesta
  fase.

## D-011 — tooling enxuto

- **Decisão:** Astro, sitemap, Astro check, TypeScript, Prettier e plugin Astro.
- **Motivo:** cobrem build, tipos e formatação sem ESLint/suíte pesada antes de
  existir lógica suficiente.

## D-012 — shells estruturais na home

- **Decisão:** renderizar seções mínimas com estado de conteúdo, sem reproduzir
  os screenshots.
- **Motivo:** comprovar composição e compilação preservando o escopo da fase 1.

## D-013 — build script permitido apenas para `esbuild`

- **Decisão:** configurar `onlyBuiltDependencies` e `allowBuilds` em
  `pnpm-workspace.yaml` com somente `esbuild: true`.
- **Motivo:** pnpm 11 bloqueou o script transitivo exigido pelo pipeline
  Astro/Vite; liberar apenas o pacote conhecido mantém a instalação explícita.

## D-014 — mídia com estados confirmados e pendentes

- **Decisão:** cada slot usa `status: "confirmed" | "pending"`; mídia pendente
  mantém `asset: null`.
- **Motivo:** impedir URL fictícia e diferenciar ausência planejada de arquivo
  validado.
- **Consequência:** cinco ativos recebidos foram registrados; os demais têm
  finalidade, crop, alt, prioridade e seção documentados.

## D-015 — um único ativo responsivo no hero

- **Decisão:** usar a fotografia vertical confirmada em mobile e desktop.
- **Motivo:** não existe uma versão horizontal aprovada; inventar crop amplo
  cortaria contexto ou simularia um asset inexistente.
- **Consequência:** o layout visual deverá acolher proporção 4:5 em ambos os
  breakpoints.

## D-016 — rótulo público “Profissionais”

- **Decisão:** usar “Profissionais”, não “Especialistas”.
- **Motivo:** nomes e CROs estão confirmados; especialidades e registros
  correspondentes não.
- **Consequência:** o nome técnico legado `SpecialistsSection` pode ser
  refatorado na fase visual, mas não define a copy pública.

## D-017 — status editorial por seção

- **Decisão:** classificar copy como `ready`, `partial` ou `pending`.
- **Motivo:** permitir implementação progressiva sem publicar headings ou
  alegações clínicas incompletas.
- **Consequência:** seções pendentes não entram no HTML; seções parciais exibem
  apenas os campos confirmados.

## D-018 — metadados reais antes da interface final

- **Decisão:** conectar favicon, Open Graph e nova copy SEO ao layout base nesta
  etapa.
- **Motivo:** os arquivos e textos já estão confirmados e a mudança não exige a
  interface visual final.
- **Consequência:** canonical e sitemap continuam condicionados ao domínio real.
