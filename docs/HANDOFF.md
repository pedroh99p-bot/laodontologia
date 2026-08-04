# Handoff — LA Odontologia

## Estado atual — 2026-08-04

Esta atualização prevalece sobre os registros históricos abaixo. A home está
com a central de conversão na seção 02, pré-atendimento por intenção na seção
03, galeria automática de sete resultados na seção 04 e os dois profissionais
lado a lado no mobile.

Mudanças mais recentes:

- corrigida a condição em que o loop de Resultados avançava fora da tela sobre
  imagens com `loading="lazy"`; os sete arquivos agora têm carregamento
  determinístico, fallback para a URL original e a animação só roda enquanto a
  galeria está próxima/visível;
- removido o `scrollIntoView()` do autoplay que deslocava a página da seção 02
  para Resultados sem interação;
- Resultados agora exibe somente os sete comparativos em uma faixa automática,
  contínua, não focável e não arrastável, sem cards, textos, botões ou CTA dentro
  do carrossel;
- a seção 03 foi convertida em seis intenções claras de pré-atendimento: dor ou
  desconforto, melhoria do sorriso, dente quebrado ou ausente, revisão e
  prevenção, avaliação de uma situação e outro assunto;
- o assistente fixo inferior direito e os cards da seção 03 compartilham o mesmo
  quiz de duas escolhas e resumo para WhatsApp;
- o quiz não coleta nem persiste dados clínicos e não realiza diagnóstico;
- rollers verticais ganharam faixa de segurança em relação a títulos, cards e
  botões; faixas horizontais ganharam margem editorial própria;
- a assinatura do footer foi reduzida e centralizada.

Validação desta etapa:

```text
pnpm format:check  PASS
pnpm check         PASS — 51 arquivos, 0 errors, 0 warnings, 0 hints
pnpm build         PASS — 3 páginas + robots
```

QA no navegador cobriu 320, 390, 430, 768 e 1365 px, sem overflow horizontal.
O teste de regressão manteve a posição vertical exatamente igual após 7,5 s na
seção 02. Os cards da seção 03 abrem o quiz na etapa 2 com a intenção já
preenchida; o assistente flutuante abre na etapa 1.

O alias público que acompanha a versão atual é
`https://laodontologia.vercel.app`. O endereço de deployment único registrado
na documentação histórica não acompanha novos commits da `main`.

## Atualização de marca

Os quatro assets Cloudinary fornecidos em 2026-07-27 estão aplicados:
favicon, assinatura horizontal na navbar, selo redondo na seção de profissionais
e assinatura institucional no footer escuro. Os registros correspondentes em
`src/config/media.ts` estão `confirmed`.

Última atualização: **2026-08-04**

## Estado real encontrado

O repositório está em `main`, limpo, no commit
`74a0a49 feat: implement Phase 02B visual home`. A implementação visual
anterior está presente e compila; esta etapa realizou apenas auditoria de
recuperação. Não houve reconstrução ampla, deploy ou alteração de código visual.

As seções atuais da home são:

- Navbar, hero, faixa de confiança, necessidades parcial, profissionais,
  localização, CTA final e rodapé.
- Resultados, tratamentos, processo, clínica, diferenciais, depoimentos e FAQ
  estão preparados/`pending`, desabilitados em
  `src/config/home-sections.ts` e ausentes do HTML.

## Implementação anterior: concluída ou interrompida?

Não há evidência forte de interrupção. O commit é coerente, a árvore estava
limpa, `pnpm install --frozen-lockfile` foi reproduzido, check/build/validate
passaram, as rotas responderam `200` e as imagens carregaram no navegador.

O estado não deve ser chamado de identidade ou landing final concluída: ele é
uma primeira composição visual com conteúdo seguro, assets confirmados e gaps
intencionais.

## Principais gaps

- As logos aprovadas não existem em `src/assets/brand/` e os slots
  `logoPrimary`, `logoHorizontal` e `logoSeal` permanecem `pending`.
- Header e footer usam marca tipográfica provisória.
- Rollers verticais existem apenas em telas amplas, sem botão circular/linha da
  referência; não aparecem no mobile.
- Faixas de texto automáticas não existem.
- Necessidades não tem cards porque tratamentos/imagens não foram confirmados.
- Resultados não tem carrossel/comparador porque casos, consentimentos e mídia
  estão ausentes.
- Processo, clínica, tratamentos, diferenciais, depoimentos e FAQ não são
  renderizados por falta de conteúdo e assets aprovados.
- Localização não tem mapa, fachada ou rota porque Place ID/URL oficial está
  pendente.
- A fidelidade estimada é 5/10 mobile e 6/10 desktop.

## Assets ausentes

Esperados e não encontrados:

- `src/assets/brand/logo-navbar.webp`
- `src/assets/brand/logo-principal.webp`
- `src/assets/brand/logo-selo.webp`

Também faltam fotos reais da clínica/prédio, mapa/Place ID, ícones decorativos
aprovados, casos antes/depois e mídia de depoimentos. As imagens em
`docs/references/` continuam apenas referências conceituais.

## Auditoria e evidências criadas

- `docs/19-IMPLEMENTATION-GAP-AUDIT.md`
- `docs/20-MOBILE-FIDELITY-PLAN.md`
- `docs/21-RECOVERY-IMPLEMENTATION-PLAN.md`
- `docs/audits/02b-recovery/current-mobile-390.png`
- `docs/audits/02b-recovery/current-mobile-430.png`
- `docs/audits/02b-recovery/current-desktop-1365.png`

## Validação executada

```text
pnpm install --frozen-lockfile  PASS
pnpm check                    PASS — 42 arquivos, 0 errors, 0 warnings, 0 hints
pnpm build                    PASS — 3 páginas + robots
pnpm validate                 PASS
pnpm preview                  PASS — http://127.0.0.1:4322/
```

QA visual/runtime cobriu 320 × 800, 360 × 800, 390 × 844, 430 × 932,
1024 × 768, 1365 × 768 e 1440 × 900, sem overflow horizontal. O console
permaneceu limpo; o HTML gerado não contém seções pendentes nem scripts
externos.

## Próximo passo recomendado

Seguir `docs/21-RECOVERY-IMPLEMENTATION-PLAN.md` nesta ordem:

`logos → navbar/hero → profissionais → rollers → movimento → conteúdo clínico
e resultados → demais seções → copy mobile → QA → aprovação`.

Não liberar seções `pending` ou considerar a identidade concluída antes de
receber e registrar os assets, conteúdos, autorizações e decisões clínicas
correspondentes.

# Estado após a Fase 02C

A branch `feat/mobile-visual-completion` contém a conclusão visual mobile-first
executável. As seções de resultados, tratamentos, processo, clínica,
diferenciais e FAQ agora entram na home; resultados/tratamentos/processo/clínica
e diferenciais usam `previewPlaceholder` explícito até receber conteúdo
autorizado. O FAQ usa somente endereço, telefone, WhatsApp, nomes e CROs
confirmados. A localização inclui mapa temporário por endereço e link de rota;
o Place ID oficial continua pendente.

Rollers verticais receberam linha/seta e aparecem a partir de 70rem. Faixas
automáticas e reveals usam CSS/IntersectionObserver e respeitam
`prefers-reduced-motion`. As logos WebP aprovadas foram aplicadas na navbar,
seção de profissionais, favicon e footer.

QA 02C gerou capturas em `docs/audits/02c-final/` para 320, 360, 390, 430,
1024, 1365 e 1440 px, sem overflow horizontal.

# Evolução de conversão e resultados — 2026-08-04

A home recebeu uma evolução visual e funcional mobile-first:

- Central de conversão como seção 02, com pré-atendimento, resultados e
  localização.
- Quiz de pré-atendimento em `dialog`, com escolhas amplas, resumo e mensagem
  codificada para o WhatsApp. Nenhuma resposta é persistida ou enviada ao
  analytics.
- Sete comparativos Cloudinary registrados e exibidos em carrossel automático
  acessível, com pausa, setas, indicadores, próximo card visível e respeito a
  `prefers-reduced-motion`.
- Molduras padronizadas em 640 × 780 por contenção, sem crop clínico.
- Dr. Lucas Ferreira e Dra. Amanda Perestelo lado a lado no mobile, sob o título
  “Os Especialistas”.
- Rollers verticais recuperados em 390/430 px e faixas automáticas presentes na
  central, confiança, resultados, profissionais e processo.
- Preloader curto com logo centralizada e entrada escalonada de foto, painel e
  textos do hero.
- Não foram adicionadas dependências.

Pendências preservadas: contexto/tratamento e consentimento arquivado para cada
comparativo, fotos reais da clínica/fachada, tratamentos confirmados,
biografias/especialidades e Place ID oficial.
