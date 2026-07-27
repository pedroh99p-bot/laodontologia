# Plano de implementação

Última atualização: 2026-07-27

## Fase 1 — fundação (esta entrega)

- [x] Inventariar e analisar referências.
- [x] Definir arquitetura, design tokens e contratos.
- [x] Centralizar dados confirmados.
- [x] Preparar SEO, analytics, Cloudinary, acessibilidade e performance.
- [x] Criar shells de componentes e rotas mínimas.
- [x] Formatação, check, build e QA final registrados no handoff.

## Fase 2A — conteúdo estrutural e mídia recebida (concluída)

- [x] Registrar e inspecionar hero, favicon, retratos e Open Graph.
- [x] Formalizar placeholders de toda mídia ainda ausente.
- [x] Produzir copy deck das 15 seções com status editorial.
- [x] Definir plano SEO, especificações por seção e posicionamento de mídia.
- [x] Atualizar contratos tipados sem preencher conteúdo clínico ausente.
- [x] Conectar metadados confirmados ao layout base.

## Fase 2B — validação da clínica (concluída como base de conteúdo)

1. Responder questões críticas de `11-OPEN-QUESTIONS.md`.
2. Validar tratamentos, especialidades, bios, processo e diferenciais.
3. Receber logo SVG, fontes e fotografias da estrutura.
4. Aprovar a copy pronta/parcial e liberar ou remover seções pendentes.
5. Definir formulário, privacidade e tracking.
6. Confirmar domínio, rota/Place ID e direitos de mídia.

Saída: conteúdo clínico seguro para a primeira composição visual, com as
pendências preservadas e tipadas.

## Fase 02B — primeira implementação visual (concluída em Preview)

- [x] Refinar o layout com os tokens atuais, sem inventar fontes ou logo.
- [x] Implementar navbar, hero e CTA mobile-first.
- [x] Implementar faixa de confiança somente com provas confirmadas.
- [x] Implementar necessidades em estado parcial, sem cards clínicos.
- [x] Implementar profissionais sem especialidades inferidas.
- [x] Implementar localização com NAP e contatos confirmados, sem rota/mapa.
- [x] Implementar CTA final e rodapé.
- [x] Criar registro de seções ativas e manter pendências fora do HTML.
- [x] Adicionar tracking progressivo e aprimoramento mínimo do menu nativo.
- [x] Executar QA responsivo e de interação nas larguras definidas.

Critério atendido: fidelidade à linguagem visual, não aos artefatos ou textos
dos screenshots.

## Fase 03 — conteúdo aprovado e refinamento de marca (próxima)

1. Receber logo SVG, fontes e fotos estruturais aprovadas.
2. Resolver tratamentos, especialidades, bios, processo e diferenciais.
3. Liberar seções `pending` somente após evidência e revisão clínica.
4. Confirmar rota/Place ID, formulário, consentimento e domínio.

## Fase 04 — interações e integrações

1. Menu mobile aprimorado, se necessário.
2. Comparador/carrossel acessíveis.
3. Formulário com validação, endpoint, antispam e estados.
4. Captura segura de campanha/UTM.
5. Consentimento e adaptadores GTM/GA4/Ads.
6. Rota/Google Maps sob demanda.

Critério: falha de terceiros não bloqueia contato principal.

## Fase 05 — QA e publicação

1. `pnpm format:check`, `pnpm check`, testes e `pnpm build`.
2. QA em 390 × 844, 430 × 932, 768 × 1024 e 1365 × 768.
3. Teclado, zoom, contraste, headings e leitores de tela nos fluxos críticos.
4. Links, metadados, robots, sitemap, schema e 404.
5. Lighthouse/cache frio e orçamento de mídia.
6. Deploy preview na Vercel (executado nesta etapa; público para QA).
7. Aprovação clínica, de marca, privacidade e conversões.
8. Deploy de produção e smoke test de URL/rotas somente após domínio e
   aprovações.

## Critério de pronto da landing final

- Conteúdo real e aprovado.
- Nenhum dado inferido.
- CTA e jornadas funcionando.
- Sem overflow nas larguras testadas.
- WCAG 2.2 AA nas jornadas.
- Orçamento de performance acompanhado.
- Analytics sem PII/duplicidade.
- Build reproduzível e handoff atualizado.
