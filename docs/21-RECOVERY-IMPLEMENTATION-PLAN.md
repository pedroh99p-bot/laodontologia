# Plano cirúrgico de recuperação — Fase 02B-R

Última atualização: **2026-07-27**

Este plano descreve o trabalho posterior à auditoria. Nenhuma etapa abaixo foi
implementada nesta recuperação.

## Prioridade e dependências

### P0 — identidade e segurança de publicação

1. Receber e validar `logo-navbar`, `logo-principal` e `logo-selo` reais,
   preferencialmente em SVG e com variantes WebP somente se aprovadas.
2. Registrar public ID/arquivo, dimensões, alt, uso e licença em
   `src/config/media.ts`.
3. Substituir a marca tipográfica em `Header.astro` e `Footer.astro`.
4. Confirmar domínio, canonical, direitos dos cinco assets existentes e
   licenças das fontes.

### P1 — primeiro viewport e navegação

5. Revalidar navbar em 320/360/390/430; corrigir largura de links desktop e
   manter CTA/menu confortáveis.
6. Refinar hero a partir do mobile: logo, foco 4:5, painel, rollers
   contextuais, prova confirmada e faixa inferior.
7. Repetir QA visual e de imagem antes de tocar nas seções clínicas.

### P1 — profissionais

8. Manter os dois painéis desktop e a sequência vertical mobile.
9. Receber aprovação de especialidades, biografias e tags; só então adicionar
   texto abaixo do CRO.
10. Aplicar selo/decoração aprovados e revisar o roller lateral.

### P1 — rollers verticais

11. Criar cápsula com linha fina, texto vertical, botão circular e seta,
    mantendo `aria-hidden`.
12. Definir pontos de entrada por seção e ocultação em larguras estreitas.
13. Testar reduced motion e garantir que o conteúdo não dependa do roller.

### P2 — movimento e transições

14. Definir textos decorativos para faixas automáticas.
15. Implementar marquee lento por `transform`, sem JS contínuo, com
    `prefers-reduced-motion` desativando o movimento.
16. Medir custo e evitar que a faixa roube atenção do CTA.

### P0 — resultados clínicos

17. Receber casos antes/depois, contexto, tratamento, consentimento e revisão
    clínica/ética.
18. Atualizar `results.ts` e `media.ts` somente com registros confirmados.
19. Implementar carrossel/comparador acessível: card principal, preview lateral,
    controles, gesto horizontal e estado para leitores de tela.
20. Testar sem autoplay e com reduced motion.

### P1 — demais seções

21. Necessidades: liberar cards e imagens reais confirmados.
22. Processo: confirmar fluxo e implementar timeline mobile/desktop.
23. Clínica: receber fotos e fatos reais; manter mapa/rota fora do caminho
    crítico.
24. Localização: adicionar rota, mapa e prédio somente após validação.
25. FAQ, tratamentos, diferenciais e depoimentos: liberar por evidência,
    revisão e consentimento.

### P2 — conteúdo e conversão

26. Auditar comprimento de texto mobile, CTA único e ordem de prova.
27. Confirmar mensagem inicial do WhatsApp e jornada real de agendamento.
28. Implementar formulário somente com endpoint, controlador, política,
    consentimento e antispam definidos.

### P2 — QA final

29. Rodar `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build` e
    `pnpm validate`.
30. Testar 320, 360, 390, 430, 1024, 1365, 1440 e 1920 px.
31. Testar rotas diretas, refresh, imagens, console, teclado, foco, reduced
    motion, contraste, metadados e orçamento de mídia.
32. Fazer revisão clínica/marca/privacidade antes de qualquer produção.

## Ordem operacional recomendada

`logos → navbar/hero → profissionais → rollers → movimento → conteúdo clínico
e resultados → demais seções → copy mobile → QA → aprovação`.

Não remover os shells ou os estados `pending` antes de as dependências de cada
seção estarem documentadas e aprovadas.

# Estado da recuperação

A sequência executável foi concluída na branch `feat/mobile-visual-completion`.
Os itens que dependem de logos, casos, fotos reais, Place ID e copy clínica
continuam pendentes e estão explicitamente sinalizados no relatório 22.
