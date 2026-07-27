# Especificações de copy por seção

Última atualização: 2026-07-26

Os limites são guias editoriais, não metas rígidas. “Pendente” significa que a
seção não deve ser renderizada, mesmo quando já existe um heading estrutural.

| Seção              | Status   | Objetivo                                    | Hierarquia e tamanho ideal                       | CTA                                | Prioridade mobile                     | Notas visuais                                             |
| ------------------ | -------- | ------------------------------------------- | ------------------------------------------------ | ---------------------------------- | ------------------------------------- | --------------------------------------------------------- |
| Navbar             | pronto   | orientar e oferecer contato imediato        | marca + até 4 links curtos + CTA de 2–4 palavras | Falar pelo WhatsApp                | CTA e acesso ao menu                  | marca textual até chegar SVG; não linkar seções pendentes |
| Hero               | pronto   | situar marca, local e próximo passo         | eyebrow 3–6 palavras; H1 7–11; corpo 20–32       | WhatsApp + âncora de profissionais | H1, CTA e retrato                     | usar retrato 4:5 confirmado sem crop agressivo            |
| Faixa de confiança | pronto   | reforçar dados verificáveis                 | 3–4 itens, até 7 palavras por item               | nenhum                             | leitura rápida                        | sem avaliações, notas ou selos inventados                 |
| Necessidades       | parcial  | ajudar o visitante a reconhecer sua demanda | H2 7–11; corpo 16–28; cards de 2–5 palavras      | Conversar com a equipe             | heading e CTA; cards após confirmação | cards continuam ocultos até lista clínica                 |
| Resultados         | pendente | demonstrar casos com contexto               | H2 6–10; legenda de 20–45 por caso               | definir após casos                 | preservar leitura do caso             | sem carousel ou antes/depois nesta etapa                  |
| Profissionais      | parcial  | identificar equipe e registro               | H2 6–10; nome; CRO; bio futura de 35–65          | Falar com a equipe                 | nome, CRO e foto                      | chamar de “Profissionais”; especialidades ausentes        |
| Tratamentos        | pendente | explicar oferta clínica confirmada          | H2 5–9; cards com título 2–5 e corpo 18–35       | definir por intenção               | títulos e clareza dos cards           | nenhum tratamento presumido                               |
| Processo           | pendente | reduzir incerteza operacional               | H2 4–8; 3–4 passos; 12–24 palavras por passo     | contato ao fim                     | sequência linear                      | fluxo precisa refletir operação real                      |
| Clínica            | pendente | mostrar o espaço real                       | H2 5–9; corpo 25–45                              | rota ou contato, após validação    | primeira foto e fatos essenciais      | somente fotos reais; sem alegar recursos                  |
| Diferenciais       | pendente | apresentar evidências verificáveis          | H2 6–10; 3–5 itens de 12–22 palavras             | opcional                           | itens curtos                          | evitar slogans e ícones com significados não confirmados  |
| Depoimentos        | pendente | oferecer prova social autorizada            | H2 5–9; citação de 20–55; atribuição curta       | nenhum                             | texto completo, sem truncar           | sem conteúdo fictício; autorização obrigatória            |
| Localização        | pronto   | permitir reconhecer e contatar a clínica    | H2 5–9; endereço em até 3 linhas; telefone       | WhatsApp; rota futura              | endereço e contato                    | mapa e fachada permanecem pendentes                       |
| FAQ                | pendente | resolver dúvidas reais                      | H2 5–9; 4–8 perguntas; resposta de 25–60         | contato ao fim                     | accordions acessíveis no futuro       | perguntas e respostas precisam de validação               |
| CTA final          | pronto   | fechar a jornada com ação única             | eyebrow; H2 8–12; corpo 14–24                    | Chamar no WhatsApp                 | botão único e evidente                | evitar formulário ou CTA concorrente                      |
| Rodapé             | pronto   | repetir NAP, CROs e links legais            | blocos curtos, sem parágrafo promocional         | telefone/WhatsApp/Instagram        | contato e privacidade                 | usar dados centralizados em `site.ts`                     |

## Regras transversais

- Linguagem direta, acolhedora e sem infantilização.
- Não prometer resultado, ausência de dor, rapidez, superioridade ou preço.
- Não usar “especialista” sem qualificação confirmada.
- Parágrafos mobile preferencialmente abaixo de 320 caracteres.
- O CTA principal usa verbo de ação e descreve o canal.
- Botões não devem dizer apenas “saiba mais”.
- As versões mobile e desktop compartilham a mesma mensagem; apenas ordem,
  quebra e tamanho podem mudar.
- O status tipado equivalente vive em `src/content/home.ts`.
