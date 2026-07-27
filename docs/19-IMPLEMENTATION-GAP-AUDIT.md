# Auditoria de gap da implementação — Fase 02B-R

Última atualização: **2026-07-27**

## Escopo e evidências

Esta auditoria reconstrói o estado encontrado antes de qualquer alteração:

- Git em `main`, árvore de trabalho limpa.
- Commit da implementação visual: `74a0a49 feat: implement Phase 02B visual home`.
- Commit-base anterior à implementação visual: `5693d44`.
- Diferença entre os commits: 26 arquivos alterados, 2.086 adições e 370
  remoções.
- Referências analisadas individualmente: seis mobile (`MB-01` a `MB-06`),
  seis desktop (`DT-01` a `DT-06`) e três peças de marca (`BR-01` a `BR-03`).
- Capturas do estado atual:
  - `docs/audits/02b-recovery/current-mobile-390.png`
  - `docs/audits/02b-recovery/current-mobile-430.png`
  - `docs/audits/02b-recovery/current-desktop-1365.png`

Não houve reconstrução ampla, alteração de copy, criação de asset ou deploy
nesta auditoria.

## Possíveis evidências de execução interrompida

Não há evidência forte de uma execução interrompida. O estado encontrado tem
commit completo, build reproduzível, documentação de handoff e Preview
funcional. Os arquivos não aplicados parecem ser decisões explícitas de
escopo, não arquivos cortados no meio:

- `src/config/home-sections.ts` centraliza as seções `pending` como
  `implementation: "prepared"` e `enabled: false`.
- `src/content/results.ts`, `treatments.ts`, `testimonials.ts` e `faq.ts`
  exportam coleções vazias com requisitos de publicação.
- `ResultsSection.astro` e `ProcessSection.astro` existem como shells, mas não
  são importados pela home.
- `src/assets/brand/` não existe; portanto as logos esperadas nunca chegaram
  como arquivos de origem.

Conclusão: a implementação anterior terminou a primeira composição visual, mas
não terminou a identidade nem as seções clínicas. O gap é principalmente
intencional/pendente, com alguns desvios visuais relevantes em relação às
referências.

## Auditoria de logos e marca

Os três caminhos exigidos pelo briefing não existem:

| Caminho esperado                       | Encontrado | Registro em `media.ts`               | Uso atual                                               |
| -------------------------------------- | ---------- | ------------------------------------ | ------------------------------------------------------- |
| `src/assets/brand/logo-navbar.webp`    | não        | não; `logoHorizontal` está `pending` | marca textual `LA` + “LA Odontologia” em `Header.astro` |
| `src/assets/brand/logo-principal.webp` | não        | não; `logoPrimary` está `pending`    | nenhum                                                  |
| `src/assets/brand/logo-selo.webp`      | não        | não; `logoSeal` está `pending`       | nenhum                                                  |

As três imagens em `docs/references/brand/` são referências raster, não assets
aprovados para produção. Não existe import correto ou fallback silencioso para
elas. A identidade visual, portanto, está explicitamente bloqueada até a
entrega dos arquivos reais; o texto “LA” é substituto provisório já registrado
em `D-007` e `D-024` não deve ser considerado identidade concluída.

## Matriz de gaps

| Seção | Referência | Componente | Estado atual | Fidelidade mobile | Fidelidade desktop | Asset disponível | Conteúdo disponível | Problema principal | Causa provável | Correção recomendada | Prioridade |
| --- | --- | --- | --- | ---: | ---: | --- | --- | --- | --- | --- |
| Navbar | MB-01/02/04/05; DT-01/04/06 | `Header.astro` | live | 6/10 | 6/10 | logos locais ausentes | NAP, CTA e links curtos | marca não é a assinatura aprovada; menu/CTA têm proporções diferentes; links desktop não têm largura mínima de 44 px | asset ausente + decisão provisória | aplicar logo-navbar real, revisar escala do CTA e alvos de toque | P0 |
| Hero | MB-01; DT-01 | `HeroSection.astro` | live | 6/10 | 7/10 | hero Cloudinary confirmado | copy aprovada, NAP e CROs | composição de painel e foto é próxima, mas faltam rollers mobile, ícones/faixa da referência e a assinatura real | escolha segura de conteúdo + direção incompleta | preservar 4:5 e ajustar somente depois da logo/rollers aprovados | P1 |
| Faixa de confiança | MB-01/02; DT-01/02 | `TrustStrip.astro` | live | 4/10 | 5/10 | ícones decorativos ausentes | quatro provas confirmadas | strip escura textual substitui a faixa clara com ícones e prova visual das referências | conteúdo confirmado limitado + ícones pendentes | redesenhar com itens confirmados e ícones reais/decorativos aprovados | P1 |
| Necessidades | MB-02; DT-02 | `NeedsSection.astro` | partial | 3/10 | 3/10 | fotos/tratamentos ausentes | heading, corpo e CTA | referência tem seis cards com imagens; implementação mostra apenas monograma editorial | conteúdo clínico e mídia `pending` | liberar cards somente após lista de necessidades/tratamentos e mídia aprovada | P1 |
| Resultados | MB-03; DT-03 | `ResultsSection.astro` | preparado, não renderizado | 0/10 | 0/10 | `beforeAfterCases` ausente | array vazio | não há carrossel/comparador nem caso principal | conteúdo, consentimento e mídia `pending` | preencher contrato e implementar slider acessível somente após autorização | P0 |
| Especialistas/Profissionais | MB-04; DT-04 | `ProfessionalsSection.astro` | live parcial | 6/10 | 7/10 | dois retratos confirmados | nomes e CROs; bio/especialidade ausentes | estrutura de duas colunas desktop e sequência mobile existe, mas faltam logo-selo, bios, tags e roller “ESPECIALISTAS”; o rótulo público correto continua “Profissionais” | conteúdo não aprovado + marca ausente | manter nomes/CROs, receber aprovação de especialidades/bios e aplicar composição final | P1 |
| Processo | MB-05; DT-05 | `ProcessSection.astro` | preparado, não renderizado | 0/10 | 0/10 | fotos da clínica ausentes | fluxo real ausente | shell textual não reproduz foto, cards nem timeline | conteúdo operacional e mídia `pending` | confirmar fluxo e construir timeline progressiva sem copiar artefatos da referência | P1 |
| Localização | MB-06; DT-06 | `LocationSection.astro` | live parcial | 5/10 | 5/10 | mapa, prédio e selo ausentes | endereço, telefone, WhatsApp e Instagram | bloco cobre e NAP funcionam, mas faltam mapa/fachada/rota; ordem diverge da referência | Place ID e fotos pendentes | adicionar mapa/rota somente com URL oficial e asset aprovado | P1 |
| CTA final | MB-05; DT-05/06 | `FinalCTASection.astro` | live | 6/10 | 6/10 | selo/foto ausentes | CTA aprovado | bloco curto e seguro, porém sem o painel cobre/foto da referência e sem prova adicional | copy aprovada é mais limitada | refinar depois das seções clínicas, sem criar promessa | P2 |
| Rodapé | sem referência dedicada; linguagem BR-02/03 | `Footer.astro` | live | 5/10 | 5/10 | logos ausentes | NAP, CROs, Instagram e privacidade | funcional, mas marca textual e hierarquia não usam assinatura aprovada | asset ausente | aplicar logo principal/selo e revisar densidade após aprovação de marca | P1 |
| Rollers | todos os MB/DT | `Roller.astro` + wrappers | parcial | 2/10 | 4/10 | nenhum asset necessário | rótulos decorativos | só aparecem a partir de 88rem, não têm botão circular/linha da referência e não há rollers mobile | implementação incompleta + regra responsiva conservadora | implementar cápsula vertical com botão/linha, mantendo `aria-hidden` e ocultação por espaço | P1 |
| Texto automático | transições das referências | nenhum componente | ausente | 0/10 | 0/10 | não aplicável | não aplicável | não há faixa contínua, `@keyframes` ou transform de marquee | componente não implementado | criar somente após definir textos decorativos e teste de reduced motion | P2 |

## Itens críticos relatados

| Relato                                  | Evidência                                                                                                                                          | Causa                                                       |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Logos aprovadas não usadas              | `src/assets/brand/` ausente; slots `logoPrimary`, `logoHorizontal` e `logoSeal` `pending`; header/footer usam `<span class="brand-mark">LA</span>` | asset ausente, não interrupção                              |
| Especialistas sem os dois painéis       | desktop já tem dois cards equivalentes e mobile empilha dois retratos; faltam bio, tags, selo e roller                                             | implementação parcial + conteúdo não aprovado               |
| Resultados sem carrossel                | `ResultsSection.astro` é shell não importado; `results` é `[]`; `beforeAfterCases` é `pending`                                                     | regra do prompt anterior, consentimento e asset ausentes    |
| Rollers ausentes/incompletos            | `.roller` existe, `writing-mode` existe, mas só em `min-width: 75rem` no componente e wrappers só exibem em `88rem`; sem botão circular            | componente incompleto + comportamento responsivo inadequado |
| Movimento automático ausente            | `motion.css` só contém `prefers-reduced-motion`; não há `@keyframes`, `animation` base ou script de movimento                                      | componente não implementado                                 |
| Seções das referências não reproduzidas | necessidades, resultados, processo, clínica, FAQ, tratamentos e depoimentos não entram no HTML                                                     | conteúdo/mídia pendentes e decisão de segurança             |

## Auditoria mobile

| Viewport  | Overflow | Seções no DOM        | Hero/panel                        | Cards de profissionais | Rollers  | Observação                                                        |
| --------- | -------- | -------------------- | --------------------------------- | ---------------------- | -------- | ----------------------------------------------------------------- |
| 320 × 800 | não      | 6 seções de conteúdo | foto 273 × 341; painel sobreposto | uma coluna             | ausentes | marca reduzida para `LA`; link da marca fica com 42 px de largura |
| 360 × 800 | não      | 6 seções de conteúdo | foto 312 × 390; painel sobreposto | uma coluna             | ausentes | composição estável                                                |
| 390 × 844 | não      | 6 seções de conteúdo | foto 341 × 426; painel sobreposto | uma coluna             | ausentes | melhor equilíbrio do primeiro viewport                            |
| 430 × 932 | não      | 6 seções de conteúdo | foto 380 × 475; painel sobreposto | uma coluna             | ausentes | CTA secundário começa a aparecer no viewport                      |

O mobile atual está **parcialmente fiel à direção aprovada**, mas não fiel à
composição completa das referências. Ele acerta a cápsula, a fotografia vertical,
o painel sobreposto, a coluna de cards e o contraste marfim/cobre; diverge por
não usar a logo aprovada, não mostrar rollers laterais, não reproduzir faixas
automáticas, ícones e cards clínicos das referências. A ausência de conteúdo
clínico é correta e não deve ser “corrigida” com placeholders.

## Auditoria desktop

| Viewport   | Overflow | Grade profissional | Rollers        | Observação                                                                            |
| ---------- | -------- | ------------------ | -------------- | ------------------------------------------------------------------------------------- |
| 1024 × 768 | não      | duas colunas       | ausentes       | tablet usa composição desktop sem rollers; navegação já troca para links              |
| 1365 × 768 | não      | duas colunas       | ausentes       | captura salva; painel do hero e foto são equilibrados, mas sem assinatura visual      |
| 1440 × 900 | não      | duas colunas       | cinco visíveis | primeiro breakpoint em que rollers aparecem; ainda sem botão circular e sem movimento |

O desktop está mais próximo estruturalmente da referência no hero e nos
profissionais, mas ainda é uma interpretação reduzida: a navbar tem só três
links confirmados, não cinco links da prancha; as demais seções não estão
presentes; a identidade raster/vetorial não foi aplicada.

## Rollers e movimento

- Rollers verticais: existem em `Roller.astro`, usam `aria-hidden="true"`,
  `writing-mode: vertical-rl` e são decorativos. Não há linha separada nem
  botão circular com seta.
- Breakpoint atual: o componente só exibe o roller a partir de `75rem`, e os
  wrappers dos blocos principais só o exibem a partir de `88rem`; por isso não
  aparecem em 1024/1365 e nunca aparecem no mobile.
- Rollers automáticos: ausentes. Não há faixa de texto contínua, `@keyframes`,
  `animation` de transform ou JavaScript para marquee.
- Reduced motion: `src/styles/motion.css` desativa animações/transições caso
  existam, mas atualmente não há movimento base para reduzir.
- Implementação encontrada: sem JavaScript desnecessário; a lacuna é visual,
  não de performance.

## Runtime e entrega

Executado no estado auditado:

```text
pnpm install --frozen-lockfile  PASS
pnpm check                    PASS — 42 arquivos, 0 errors, 0 warnings, 0 hints
pnpm build                    PASS — 3 páginas + robots
pnpm validate                 PASS
pnpm preview                  PASS — http://127.0.0.1:4322/
```

Rotas locais responderam `200`: `/`, `/privacidade/`, `/obrigado/` e
`/robots.txt`. O console do app ficou sem erros/avisos no navegador. Após a
captura full-page, as três imagens (hero e dois retratos) carregaram com
`naturalWidth > 0`. O HTML gerado tem um H1, não contém IDs das seções
pendentes e não injeta scripts externos.

Componentes preparados mas não utilizados pela home: `ResultsSection.astro`,
`ProcessSection.astro` e `IconButton.astro`. Isso é detectável no código e não
é um erro de import quebrado. O conteúdo tipado de resultados, tratamentos,
depoimentos e FAQ permanece vazio por segurança.

## Fidelidade geral

- **Mobile:** **5/10** — boa base de direção, mas faltam logo, rollers,
  iconografia/faixas, cards de necessidades, resultados/processo e os detalhes
  das pranchas.
- **Desktop:** **6/10** — hero e profissionais têm estrutura próxima; as
  seções omitidas, identidade provisória e rollers simplificados reduzem a
  fidelidade.

## Assets ainda necessários

- `src/assets/brand/logo-navbar.webp` (ou SVG equivalente aprovado).
- `src/assets/brand/logo-principal.webp` (ou SVG equivalente aprovado).
- `src/assets/brand/logo-selo.webp` (ou SVG equivalente aprovado).
- Fotos reais de recepção, consultório e detalhes da clínica.
- Foto real do exterior/acesso ao prédio.
- Mapa/preview ou URL oficial com Place ID.
- Ícones vetoriais decorativos aprovados, se a faixa visual for recuperada.
- Casos antes/depois padronizados, com consentimento e revisão clínica.
- Fotos/identificação de depoimentos autorizados.
- Fotos por tratamento somente após lista clínica confirmada.

# Follow-up da Fase 02C

Os gaps de logos e conteúdo clínico permanecem abertos. Rollers, movimento,
seções estruturais, FAQ confirmado e mapa temporário foram implementados na
branch `feat/mobile-visual-completion`; a matriz abaixo registra o estado-base
da auditoria 02B.
