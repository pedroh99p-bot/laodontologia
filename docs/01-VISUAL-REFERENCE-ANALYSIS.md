# Análise das referências visuais

Última atualização: 2026-07-26

## Método e limites

Foram inspecionadas todas as 15 imagens listadas em
`docs/REFERENCE-MANIFEST.md`. A análise abaixo separa padrões de direção de arte
de dados que não podem ser tratados como verdade. Medidas são estimativas
visuais, não especificações pixel-perfect.

## Síntese

### Linguagem geral

A direção combina clínica premium, editorial de beleza e produto digital:
marfim luminoso, cobre queimado, grafite suave, serifas de alto contraste,
grandes fotografias humanas, painéis arredondados e microdetalhes lineares.
O resultado pretendido é calmo, sofisticado, próximo e tecnicamente cuidadoso.

### Layout, grid e ritmo de rolagem

- Desktop: conteúdo central em aproximadamente 12 colunas, margens generosas,
  navbar flutuante e blocos que ocupam quase toda a largura útil.
- Mobile: página central semelhante a uma prancha, com margens laterais,
  cabeçalho compacto e algumas composições ainda em duas colunas.
- O ritmo alterna abertura editorial, prova visual e faixas de atributos.
- Há sobreposição controlada entre fotografia, cartões e selos.
- Cartões parcialmente visíveis nas laterais sugerem carrossel, sem esconder que
  existem mais itens.
- Rollers verticais funcionam como marcadores de capítulo. Devem ser
  decorativos, com `aria-hidden="true"`, e desaparecer quando roubarem espaço do
  conteúdo.

### Tipografia

- Títulos: serifada editorial de contraste moderado/alto, peso regular, entrelinha
  curta e tamanhos amplos.
- Ênfase: palavras em cobre, às vezes itálicas.
- Corpo e interface: sans-serif humanista/geometricamente neutra, peso regular a
  semibold, com boa altura-x.
- Microtextos: caixa alta, tracking amplo e cobre.
- A implementação inicial usa fallbacks seguros; fontes finais dependem de
  aprovação e licenciamento.

### Cor, borda e profundidade

- Fundos: marfim/off-white com variações quentes.
- Ação e destaque: cobre, incluindo blocos sólidos na seção de localização.
- Texto: grafite e cinza quente.
- Bordas: brancas ou bege muito finas.
- Raios: grandes, inclusive em navbar, painéis, cartões e mídia.
- Sombras: amplas, claras e difusas; devem ser reduzidas na implementação para
  evitar aparência lavada e preservar performance.
- O verde sálvia aparece em folhas decorativas, nunca como principal.

### Responsividade provável

- Navbar de links vira marca + CTA/WhatsApp + menu.
- Layouts divididos viram pilhas ou cartões roláveis.
- Títulos diminuem com `clamp()`, sem perder caráter editorial.
- Rollers migram para uma lateral ou são removidos em telas estreitas.
- Cards de processo passam de linha horizontal para linha do tempo vertical.
- Localização passa de duas colunas para bloco cobre empilhado.
- A grade mobile de necessidades mostrada em duas colunas só deve ser mantida se
  o conteúdo real continuar legível em 390 px; uma coluna é o fallback seguro.

### Iconografia e decoração

Ícones lineares, monocromáticos e circulares aparecem com frequência. Folhas,
linhas orgânicas e curvas topográficas dão ritmo, mas devem ser SVGs próprios,
leves e ignorados por tecnologias assistivas. Alguns ícones das referências são
semanticamente genéricos ou inconsistentes e não devem ser copiados.

### Indícios de geração por IA

As pranchas têm sinais de composição gerada/simulada: textos factualmente
inconsistentes, nomes e CRO placeholders, mapas ilustrados com rótulos
imprecisos, casos clínicos/depoimentos não verificáveis, anatomia dentária muito
regular, mistura de ícones e fotografia com acabamento sintético. Esses sinais
não invalidam a direção visual, mas impedem o uso como fonte de conteúdo ou
prova.

## Análise individual

### BR-01 — monograma circular

- **Hierarquia/composição:** letras `LA` serifadas sobrepostas dentro de um
  círculo fino; composição central e simétrica, adequada a selo.
- **Tipografia/proporção:** hastes finas e alto contraste; o `A` avança sobre o
  `L`, criando uma marca compacta.
- **Cor/profundidade:** cobre com leve variação tonal; transparência ao redor.
- **Uso responsivo provável:** favicon visual, selo e avatar, desde que exista
  uma versão vetorial simplificada para tamanhos pequenos.
- **Aproveitar:** monograma, proporção circular e cobre.
- **Não copiar/publicar ainda:** raster como logo definitivo; a borda e os
  filetes podem desaparecer em 16–32 px. Solicitar SVG original.

### BR-02 — assinatura horizontal

- **Hierarquia/composição:** monograma à esquerda, divisor vertical, nome em uma
  linha e três atributos em linha secundária.
- **Tipografia/proporção:** nome serifado; descritores em sans/versalete com
  tracking amplo.
- **Cor/profundidade:** cobre e cinza quente sobre transparência.
- **Uso responsivo provável:** navbar desktop e rodapé largo; em mobile a
  assinatura precisa de variante reduzida.
- **Aproveitar:** relação entre símbolo e wordmark.
- **Não copiar/publicar ainda:** raster de baixa altura como origem mestre;
  tagline gráfica não deve substituir texto HTML quando tiver valor semântico.

### BR-03 — assinatura vertical

- **Hierarquia/composição:** monograma grande acima do nome; atributos no
  rodapé, adequado a selo institucional e peças quadradas.
- **Tipografia/proporção:** mesma lógica serifada + tracking da variante
  horizontal.
- **Uso responsivo provável:** espaços quadrados, cards e redes sociais, não a
  navbar.
- **Aproveitar:** estrutura de assinatura para futuras peças.
- **Não copiar/publicar ainda:** raster como ativo final; confirmar se “Estética
  • Saúde • Confiança” é assinatura oficial ou apenas proposta visual.

### DT-01 — hero desktop

- **Hierarquia:** navbar flutuante; foto grande dos profissionais; painel
  editorial sobreposto com localização, CROs, CTA e faixa de atributos.
- **Grid/espaçamento:** imagem quase full-bleed; painel inferior em duas colunas;
  margens externas amplas e respiro de 24–40 px.
- **Tipografia/proporção:** título serifado ocupa cerca de metade do painel;
  microheading em caixa alta; texto sans mais compacto.
- **Cor/bordas/sombras:** painel marfim translúcido, borda branca, raio alto,
  CTA cobre e sombra difusa.
- **Rollers/ícones:** rollers “Cuidado” e “Confiança” nas laterais; cinco ícones
  circulares na faixa inferior.
- **Responsividade:** o painel vira coluna, CTAs ocupam a largura e rollers
  reduzem ou desaparecem.
- **Indícios de IA:** ícones/legendas genéricos, foto não comprovada e
  “Pagamentos/Atendimentos” sem confirmação.
- **Aproveitar:** sobreposição, navbar cápsula, CTA primário/secundário,
  localização e CROs centralizados.
- **Rejeitar:** foto como asset, categoria de pagamentos e qualquer afirmação
  não confirmada.

### MB-01 — hero mobile

- **Hierarquia:** navbar cápsula, foto vertical, rollers laterais e painel de
  conteúdo sobreposto que continua abaixo da dobra.
- **Grid/espaçamento:** uma coluna central, botões full-width e faixa de ícones
  compacta em cinco colunas.
- **Tipografia:** título muito grande, mas ainda legível; texto com entrelinha
  confortável.
- **Cor/profundidade:** mesma base marfim/cobre; sombras mais fortes que o
  necessário.
- **Responsividade:** adequado como conceito para 430 px; em 390 px a faixa de
  cinco ícones e rollers pode comprimir conteúdo.
- **Indícios de IA:** mesma imagem/legendas não verificáveis do desktop.
- **Aproveitar:** prioridade de CTA e empilhamento.
- **Rejeitar:** rolagem lateral causada por rollers, microtexto pequeno e cinco
  ações simultâneas sem necessidade comprovada.

### DT-02 — necessidades desktop

- **Hierarquia:** pergunta editorial + explicação; grade 3 × 2 de necessidades;
  faixa de confiança inferior.
- **Grid/espaçamento:** cards largos em três colunas, com imagem ocupando parte
  do fundo e conteúdo alinhado à esquerda.
- **Tipografia:** título serifado e labels pequenas; corpo sans reduzido.
- **Cor/profundidade:** cartões claros, fotos dessaturadas, tags pêssego e
  botões circulares.
- **Rollers/decoração:** roller “Cuidado”, folha no canto e selos lineares.
- **Responsividade:** três colunas devem virar duas/uma; conteúdo precisa ser
  real antes de definir densidade.
- **Indícios de IA:** implante, sorriso, alinhadores e instrumentos têm aspecto
  de banco/geração; tratamentos e benefícios são não confirmados.
- **Aproveitar:** organizar por necessidade do paciente, não apenas catálogo
  técnico; relação texto + imagem.
- **Rejeitar:** nomes de tratamentos, promessas de segurança/duração e imagens.

### MB-02 — necessidades mobile

- **Hierarquia:** título e explicação, foto parcial dos profissionais, grade 2
  colunas e faixa de atributos.
- **Grid/espaçamento:** cartões muito densos em duas colunas; corpo próximo do
  limite mínimo de leitura.
- **Tipografia:** bom contraste título/corpo, mas microcopy pequena.
- **Responsividade:** em 390 px, preferir uma coluna ou cards horizontais; duas
  colunas só após teste com conteúdo final.
- **Indícios de IA:** mesmos assets e tratamentos não confirmados.
- **Aproveitar:** destaque inicial para desejo/problema.
- **Rejeitar:** densidade e tamanho de texto do mockup; qualquer tratamento não
  validado.

### DT-03 — resultados desktop

- **Hierarquia:** título central; carrossel com caso principal e previews
  laterais; comparador antes/depois; paginação.
- **Grid/espaçamento:** caso central dominante, cards laterais cortados para
  indicar continuidade.
- **Tipografia:** título serifado central e legendas discretas.
- **Cor/profundidade:** fundo marfim com halo radial, cards claros e controles
  cobre.
- **Rollers:** “Naturalidade” à direita.
- **Responsividade:** um card por vez no mobile, controles separados e status
  anunciado a leitores de tela.
- **Indícios de IA:** fotografias clínicas, rótulo “caso real” e procedimentos
  não verificáveis.
- **Aproveitar:** padrão comparador + carrossel somente com conteúdo autorizado;
  previews laterais.
- **Rejeitar:** todas as imagens/descrições clínicas atuais e a alegação “caso
  real”.

### MB-03 — resultados mobile

- **Hierarquia:** título, descrição, grande card cobre, comparador e controles.
- **Grid/espaçamento:** carrossel horizontal deixa o próximo card parcialmente
  visível; comparador ocupa a maior parte do viewport.
- **Tipografia:** título editorial forte; depoimento serifado ao final do card.
- **Cor/profundidade:** cobre sólido com texto claro; alto contraste de marca.
- **Responsividade:** conceito válido, mas requer gestos, botões, teclado,
  instrução e alternativa sem arrastar.
- **Indícios de IA:** depoimento atribuído a “Paciente LA Odontologia”, caso e
  foto de equipe não comprovados.
- **Aproveitar:** card cobre e indicação de continuidade.
- **Rejeitar:** depoimento, resultado, procedimento e qualquer uso antes de
  consentimento documentado.

### DT-04 — profissionais desktop

- **Hierarquia:** título + manifesto curto; dois retratos em cards equivalentes;
  nomes/CROs; descrição e tags.
- **Grid/espaçamento:** duas colunas simétricas com retrato no topo e conteúdo
  abaixo.
- **Tipografia:** nomes serifados, CRO em caixa alta cobre, texto sans.
- **Cor/profundidade:** marfim, bordas leves, sombras sutis e folhas decorativas.
- **Rollers:** “Especialistas” à esquerda.
- **Responsividade:** cartões empilham, mantendo nome/CRO próximos da foto.
- **Indícios de IA:** biografias, especialidades e tags atribuídas sem fonte.
- **Aproveitar:** cards equivalentes e ênfase correta em nome + CRO.
- **Rejeitar:** palavra “especialistas” até confirmação de registro e todas as
  biografias/tags presentes.

### MB-04 — profissionais mobile

- **Hierarquia:** abertura editorial e dois cards empilhados, com retratos
  grandes.
- **Grid/espaçamento:** conteúdo em coluna, bom alvo de leitura; tags em linha
  podem quebrar.
- **Responsividade:** estrutura natural para mobile; roller deve desaparecer em
  telas estreitas.
- **Indícios de IA:** mesmas especialidades e textos não confirmados.
- **Aproveitar:** sequência foto → nome → CRO.
- **Rejeitar:** especialidades, benefícios e palavras-chave não validadas.

### DT-05 — processo desktop

- **Hierarquia:** copy à esquerda, foto da clínica ao centro, três atributos
  sobrepostos e quatro etapas na base.
- **Grid/espaçamento:** composição assimétrica superior e linha de processo
  horizontal inferior.
- **Tipografia:** título serifado, passos e atributos em sans.
- **Cor/profundidade:** cartões claros com sombra; números em círculos cobre.
- **Rollers:** “Planejamento” à direita e pequeno marcador lateral.
- **Responsividade:** etapas viram linha do tempo vertical; atributos podem
  sobrepor menos a imagem.
- **Indícios de IA:** imagem da clínica não comprovada, fluxo e alegações
  operacionais ainda não confirmados.
- **Aproveitar:** narrativa em etapas, desde que validada pelos responsáveis.
- **Rejeitar:** etapas e equipamento implícito como fatos antes de confirmação.

### MB-05 — processo mobile

- **Hierarquia:** copy + foto pequena do casal, foto da sala com atributos,
  timeline vertical e CTA cobre final.
- **Grid/espaçamento:** bom encadeamento vertical; cards de etapas ficam ligados
  por uma linha lateral.
- **Tipografia:** boa diferenciação entre eyebrow, título e etapas.
- **Cor/profundidade:** marfim dominante, CTA cobre e contornos finos.
- **Indícios de IA:** rodapé do CTA contém “Luciana e André” e “CRO XXXX”,
  inconsistentes com os dados confirmados; prova clara de artefato de geração.
- **Aproveitar:** linha do tempo vertical e CTA final.
- **Rejeitar:** nomes/CROs incorretos, fotos e processo sem validação.

### DT-06 — localização desktop

- **Hierarquia:** painel claro sobre fundo grafite; contato e CTAs à esquerda;
  mapa ilustrado e foto do prédio à direita; faixa de atributos inferior.
- **Grid/espaçamento:** duas colunas com mapa dominante e bom agrupamento NAP.
- **Tipografia:** título serifado e dados de contato sans.
- **Cor/profundidade:** contraste entre fundo escuro, marfim e cobre; cards
  internos elevados.
- **Rollers:** “Localização” à esquerda.
- **Responsividade:** informações e CTAs devem preceder mapa; mapa fora do
  caminho crítico.
- **Indícios de IA:** mapa desenhado, rótulos/traçado não confiáveis, CEP não
  fornecido no briefing e foto do prédio sem comprovação.
- **Aproveitar:** hierarquia endereço → rota/WhatsApp/telefone.
- **Rejeitar:** mapa, CEP, coordenadas, foto e alegações como “localização
  privilegiada”.

### MB-06 — localização mobile

- **Hierarquia:** bloco cobre com título, endereço, equipe/CRO, CTAs, telefone e
  mapa ilustrado; roller externo.
- **Grid/espaçamento:** uma coluna; dois CTAs lado a lado podem ficar estreitos
  em 390 px.
- **Tipografia:** contraste alto e título muito expressivo.
- **Cor/profundidade:** cobre como grande superfície, cercado por grafite.
- **Responsividade:** empilhar CTAs em largura reduzida; substituir mapa por link
  até URL oficial ser validada.
- **Indícios de IA:** mesmos mapa, CEP e prédio não comprovados.
- **Aproveitar:** bloco de contato de alto contraste e telefone fácil de tocar.
- **Rejeitar:** todos os detalhes geográficos não confirmados e a imagem do
  mapa/prédio.

## Decisões aproveitáveis

1. Navbar flutuante em cápsula e CTA de WhatsApp visível cedo.
2. Títulos editoriais com palavra-chave em cobre.
3. Painéis marfim, raios generosos e bordas discretas.
4. Rollers como assinatura decorativa, não como navegação necessária.
5. Layouts de resultados e processo preparados para enhancement progressivo.
6. Seção de localização com contraste grafite/cobre e NAP centralizado.
7. Grid fluido, `clamp()` e prioridade mobile-first.

## Elementos que não devem ser copiados

- Screenshots, recortes, mapas desenhados e fotografias simuladas.
- Tratamentos, benefícios, etapas, especialidades e qualificações não
  confirmados.
- Depoimentos, avaliações, casos clínicos e alegações de resultado.
- CEP, coordenadas, Place ID, estacionamento, pagamento ou estrutura física não
  fornecidos.
- Ícones inconsistentes, textos pequenos e sombras excessivas.
- Os nomes “Luciana e André” e os CROs `XXXX`.
