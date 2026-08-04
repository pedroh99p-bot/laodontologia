# Registro de decisões

Última atualização: 2026-07-27

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

## D-019 — direção visual editorial mobile-first

- **Decisão:** implementar a home com hero vertical, painel de copy
  sobreposto, faixa de prova, blocos de respiro, cobre/graphite e rollers
  editoriais em telas amplas.
- **Motivo:** traduzir a linguagem das referências sem copiar textos ou
  artefatos não confirmados.
- **Consequência:** a composição permanece própria, responsiva e utilizável em
  320 px antes de receber logo e fontes finais.

## D-020 — transformações Cloudinary no componente

- **Decisão:** gerar `srcset` AVIF/WebP por `transformCloudinaryUrl`, usando
  `q_auto`, `c_fill` e `g_auto`, preservando URL versionada e public ID.
- **Motivo:** reduzir bytes sem criar novos arquivos ou alterar a fotografia
  recebida.
- **Consequência:** hero carrega eager com `fetchpriority="high"`; retratos
  abaixo da dobra usam lazy loading e dimensões explícitas.

## D-021 — registro único de visibilidade das seções

- **Decisão:** centralizar `status`, `enabled` e implementação em
  `src/config/home-sections.ts`.
- **Motivo:** impedir que uma seção `pending` entre acidentalmente no HTML.
- **Consequência:** a home renderiza somente navbar, hero, confiança,
  necessidades, profissionais, localização, CTA e rodapé nesta fase.

## D-022 — localização sem mapa ou rota

- **Decisão:** mostrar NAP, telefone, WhatsApp e Instagram confirmados, sem
  mapa, link de rota ou Place ID.
- **Motivo:** o link oficial de rota ainda está em `docs/11-OPEN-QUESTIONS.md`.
- **Consequência:** o bloco é útil e honesto; integração de mapa fica para uma
  etapa posterior.

## D-023 — JavaScript mínimo e progressivo

- **Decisão:** usar somente `src/scripts/site.ts` para tracking de cliques,
  `professional_view`, fechamento do menu com `Escape` e fechamento após link.
- **Motivo:** preservar HTML funcional sem JavaScript e evitar dependências
  externas.
- **Consequência:** não há formulário, carrossel, mapa, CMP ou tags de mídia
  paga nesta entrega.

## D-024 — Preview público, sem produção

- **Decisão:** publicar somente um Preview Vercel e remover a autenticação SSO
  do projeto.
- **Motivo:** a landing não contém dados sensíveis e precisa ser validada em
  celulares sem sessão Vercel; a proteção padrão fazia o mobile receber uma
  página de login em vez do site.
- **Consequência:** o Preview é acessível anonimamente e foi retestado em
  390 × 844. Nenhuma versão foi promovida para produção.

# Decisões adicionadas na Fase 02C

## D-025 — Placeholders visuais explícitos

Renderizar a arquitetura das seções pendentes com `Preview estrutural` e
`Foto real pendente`, sem imagens, casos ou alegações clínicas inventadas.

## D-026 — FAQ e mapa com dados confirmados

Publicar somente perguntas sobre endereço, contato, solicitação de agendamento e
profissionais; usar mapa/rota temporários baseados no endereço confirmado.

## D-027 — Movimento decorativo progressivo

Usar marquee CSS decorativo e reveal por IntersectionObserver, com fallback
visível e desativação via `prefers-reduced-motion`.

# Decisões adicionadas na evolução de conversão e resultados

## D-028 — Central de conversão como seção 02

Inserir após o hero uma central com um card principal de pré-atendimento e dois
atalhos para resultados e localização. A seção não remove nem substitui as
seções de destino; funciona como índice de alta intenção para visitantes de
busca.

## D-029 — Resultados em moldura 640 × 780 sem crop clínico

Registrar os sete comparativos fornecidos na coleção Cloudinary e entregá-los
com `c_pad`, fundo neutro e dimensões 640 × 780. A decisão preserva o conteúdo
integral de origens quadradas e verticais, evitando cortes que alterem a leitura
do comparativo.

## D-030 — Pré-atendimento sem coleta clínica no site

Implementar um quiz local de duas escolhas amplas e uma confirmação, sem nome,
telefone, sintomas, medicamentos ou histórico clínico. As escolhas ficam apenas
em memória e geram uma mensagem codificada para o WhatsApp; analytics registra
somente início, avanço e conclusão, nunca as respostas.

## D-031 — Movimento com controle e fallback

Manter rollers verticais e faixas automáticas em seções editoriais, desligar
movimento contínuo com `prefers-reduced-motion` e oferecer pausa no carrossel de
resultados. O preloader é curto, centraliza a marca e desaparece sem bloquear a
página caso o JavaScript falhe.
