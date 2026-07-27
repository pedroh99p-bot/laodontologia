# AGENTS.md

## Objetivo

Construir uma landing page local, acessível e de alta conversão para a LA
Odontologia, sem inventar dados clínicos ou comerciais. A fase atual é a
validação de conteúdo antes da implementação visual; consulte
`docs/HANDOFF.md`.

## Ordem de leitura

1. `docs/HANDOFF.md`
2. `docs/04-CONTENT-SOURCE-OF-TRUTH.md`
3. `docs/11-OPEN-QUESTIONS.md`
4. `docs/12-DECISIONS.md`
5. `docs/13-IMPLEMENTATION-PLAN.md`
6. `docs/01-VISUAL-REFERENCE-ANALYSIS.md`
7. `docs/15-COPY-DECK.md`
8. `docs/16-SEO-CONTENT-PLAN.md`
9. `docs/17-SECTION-COPY-SPECS.md`
10. `docs/18-MEDIA-PLACEMENT-PLAN.md`
11. Documento temático pertinente em `docs/`.

## Comandos

- Instalar: `pnpm install`
- Desenvolvimento: `pnpm dev`
- Formatar: `pnpm format`
- Validar formatação: `pnpm format:check`
- Tipos/Astro: `pnpm check`
- Build: `pnpm build`
- Validação completa: `pnpm validate`

## Regras operacionais

- Nunca invente tratamentos, especialidades, horários, avaliações, depoimentos,
  preços, convênios, pagamentos, estrutura, resultados, coordenadas ou assets.
- Marque ausências em `docs/11-OPEN-QUESTIONS.md`; campos devem ser opcionais e
  não renderizados.
- Screenshots em `docs/references/` são referências; nunca use screenshots,
  recortes, mapas ou fotos simuladas como assets finais.
- Telefone, endereço, Instagram, profissionais e CROs vêm de
  `src/config/site.ts`; conteúdo repetível deve ser tipado.
- Preserve HTML funcional antes de JavaScript; adicione o mínimo de JS.
- Não adicione dependência sem justificativa em `docs/12-DECISIONS.md`.
- Preserve semântica, teclado, foco, contraste, alvos de toque e texto
  alternativo. Elementos decorativos ficam fora da árvore de acessibilidade.
- Respeite `prefers-reduced-motion`; nenhum conteúdo depende de animação.
- Antes de encerrar, execute `pnpm format:check`, `pnpm check` e `pnpm build`.
- Atualize `docs/HANDOFF.md` após mudança material.

## Definição de pronto

Conteúdo confirmado e centralizado, nenhuma referência usada como asset final,
interações acessíveis, sem erro TypeScript, formatação/check/build passando,
documentação e handoff atualizados.
