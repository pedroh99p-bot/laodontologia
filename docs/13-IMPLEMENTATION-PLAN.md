# Plano de implementação

Última atualização: 2026-07-26

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

## Fase 2B — validação da clínica (próxima)

1. Responder questões críticas de `11-OPEN-QUESTIONS.md`.
2. Validar tratamentos, especialidades, bios, processo e diferenciais.
3. Receber logo SVG, fontes e fotografias da estrutura.
4. Aprovar a copy pronta/parcial e liberar ou remover seções pendentes.
5. Definir formulário, privacidade e tracking.
6. Confirmar domínio, rota/Place ID e direitos de mídia.

Saída: conteúdo clínico aprovado e escopo visual fechado.

## Fase 3 — implementação visual

1. Refinar tokens com fontes/brand assets.
2. Implementar header e hero mobile-first.
3. Implementar faixa de confiança somente com prova real.
4. Construir necessidades e tratamentos confirmados.
5. Construir profissionais sem especialidades inferidas.
6. Construir processo/estrutura/diferenciais.
7. Construir localização com rota oficial e mapa fora do caminho crítico.
8. Construir FAQ e CTA final.
9. Implementar resultados/depoimentos apenas se autorizados.
10. Manter página utilizável sem JavaScript.

Critério: fidelidade à linguagem, não aos artefatos/textos dos screenshots.

## Fase 4 — interações e integrações

1. Menu mobile aprimorado, se necessário.
2. Comparador/carrossel acessíveis.
3. Formulário com validação, endpoint, antispam e estados.
4. Captura segura de campanha/UTM.
5. Consentimento e adaptadores GTM/GA4/Ads.
6. Rota/Google Maps sob demanda.

Critério: falha de terceiros não bloqueia contato principal.

## Fase 5 — QA e publicação

1. `pnpm format:check`, `pnpm check`, testes e `pnpm build`.
2. QA em 390 × 844, 430 × 932, 768 × 1024 e 1365 × 768.
3. Teclado, zoom, contraste, headings e leitores de tela nos fluxos críticos.
4. Links, metadados, robots, sitemap, schema e 404.
5. Lighthouse/cache frio e orçamento de mídia.
6. Deploy preview na Vercel.
7. Aprovação clínica, de marca, privacidade e conversões.
8. Deploy de produção e smoke test de URL/rotas.

## Critério de pronto da landing final

- Conteúdo real e aprovado.
- Nenhum dado inferido.
- CTA e jornadas funcionando.
- Sem overflow nas larguras testadas.
- WCAG 2.2 AA nas jornadas.
- Orçamento de performance acompanhado.
- Analytics sem PII/duplicidade.
- Build reproduzível e handoff atualizado.
