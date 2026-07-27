# Plano de fidelidade mobile — Fase 02B-R

Última atualização: **2026-07-27**

## Objetivo

Aproximar a implementação da lógica específica das seis referências mobile sem
empilhar o desktop e sem transformar imagens, textos ou casos simulados em
conteúdo factual. O mobile continua sendo a fonte de composição quando houver
conflito com desktop.

## Invariantes

- Começar em 390 px e confirmar em 320, 360 e 430 px.
- Manter largura útil sem overflow e alvos de toque com pelo menos 44 × 44 CSS
  px.
- Preservar copy aprovada e ocultar status `pending`.
- Usar logo real quando entregue; não promover os rasters de referência a
  identidade final sem aprovação.
- Reservar dimensões de mídia e manter hero 4:5.
- Rollers e faixas automáticas são decorativos, `aria-hidden`, não podem ser a
  única identificação da seção e devem respeitar `prefers-reduced-motion`.

## Plano por referência

### MB-01 — hero

1. Aplicar a variante `logo-navbar` real na cápsula.
2. Preservar o hero vertical e o painel sobreposto atual.
3. Recuperar rollers laterais apenas quando houver espaço; em 320 px eles
   podem virar indicadores menores ou desaparecer.
4. Adicionar faixa de prova/ícones somente com itens confirmados; os cinco
   rótulos da referência não são autorização de conteúdo.
5. Revalidar H1, CTA primário, CTA secundário e CROs em 320/390/430.

### MB-02 — necessidades

1. Confirmar lista de necessidades/tratamentos antes de alterar a composição.
2. Receber seis imagens ou definir um conjunto aprovado de imagens reais.
3. Implementar grid 2 × 3 somente se títulos e descrições couberem em 390 px;
   caso contrário, usar uma coluna ou trilho horizontal acessível.
4. Manter a faixa inferior como prova confirmada, não como promessa de
   tecnologia, segurança ou excelência.

### MB-03 — resultados

1. Receber casos reais, pares antes/depois padronizados, contexto, tratamento,
   consentimento e revisor.
2. Implementar um card cobre principal com parte do próximo card visível.
3. Adicionar controles anterior/próximo, estado anunciado e alternativa sem
   gesto.
4. Não usar o depoimento “Paciente LA Odontologia” da referência.
5. Desligar autoplay com reduced motion e, preferencialmente, não usar
   autoplay.

### MB-04 — profissionais

1. Aplicar logo-selo aprovada somente quando existir.
2. Manter foto grande → nome → CRO como ordem primária.
3. Liberar bio, especialidade e tags somente após fonte/registro aprovado.
4. Manter cards em sequência vertical e preservar respiro; nunca compactar em
   duas colunas no mobile.
5. Recuperar o roller lateral “ESPECIALISTAS” apenas como decoração; o rótulo
   público continua “Profissionais” até confirmação.

### MB-05 — processo

1. Confirmar fluxo real e os textos de quatro passos.
2. Receber fotos reais da clínica; não usar o consultório simulado da prancha.
3. Implementar timeline vertical com linha lateral e números.
4. Remover qualquer menção aos nomes “Luciana e André” e `CRO XXXX`.
5. Encerrar com CTA único e aprovado, sem inventar garantia de segurança ou
   acompanhamento.

### MB-06 — localização

1. Manter o bloco cobre e o NAP já confirmado.
2. Receber Place ID/URL oficial antes de “Traçar rota”.
3. Receber foto real do prédio e/ou preview de mapa validado.
4. No mobile, empilhar CTAs quando a largura não comportar dois controles
   confortáveis.
5. Usar o selo somente quando o asset real existir.

## Sequência de QA mobile

1. Screenshot de cada primeiro viewport em 320 × 800, 360 × 800, 390 × 844 e
   430 × 932.
2. Scroll por todas as seções e verificação de imagens lazy.
3. Teste de menu, Escape, foco, âncoras e gestos do carrossel quando existir.
4. Verificação de overflow por geometria, não por `overflow-x: hidden`.
5. Teste com `prefers-reduced-motion: reduce`.
6. Repetição após aplicar fontes e logos reais.

## Critério de fidelidade

O mobile poderá ser considerado alinhado quando mantiver a composição por
prancha (cápsula, margem, sobreposição, cards/gestos e rollers contextuais),
sem publicar os artefatos factuais das referências e sem degradar leitura,
toque, contraste ou performance.
