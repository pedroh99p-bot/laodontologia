# Acessibilidade

Última atualização: 2026-07-26

Meta inicial: WCAG 2.2 AA nas jornadas principais.

## Fundação implementada

- HTML em `pt-BR`.
- Skip link para `#conteudo`.
- Landmarks `header`, `nav`, `main` e `footer`.
- Hierarquia de headings controlada.
- Foco visível com `:focus-visible`.
- Links e botões semânticos com alvos mínimos.
- Conteúdo compreensível sem CSS/JavaScript.
- `prefers-reduced-motion` no CSS global.
- Rollers decorativos com `aria-hidden="true"`.

## Requisitos da fase visual

- Verificar contraste de cada combinação, inclusive cobre/marfim.
- Alt funcional para mídia informativa e `alt=""` para decoração.
- Labels sempre visíveis em formulários.
- Mensagens de erro associadas ao campo e resumo de erros focável.
- Não usar placeholder como label.
- Menu mobile com estado anunciado, Escape e manejo de foco se usar drawer.
- Não depender de hover, cor ou gesto.
- Área de toque mínima de 44 × 44 CSS px.
- Ordem do DOM deve seguir a ordem de leitura, ainda que o layout sobreponha
  elementos.

## Carrossel acessível

- Preferir grade quando a navegação sequencial não agrega.
- Região nomeada e instrução curta.
- Botões anterior/próximo com nomes específicos.
- Status/paginação legível por leitor de tela sem anúncios excessivos.
- Teclado e toque.
- Sem autoplay; se existir no futuro, oferecer pausa e respeitar reduced motion.
- Slides ocultos não podem permanecer focáveis.

## Comparador antes/depois

- Duas imagens com rótulos claros e descrição textual equivalente.
- Controle de faixa com label, valor e operação por teclado.
- Alternativa de visualização lado a lado.
- Não depender apenas do divisor visual.
- Consentimento e contexto clínico são pré-requisitos.

## Formulário futuro

- Campos mínimos necessários.
- Autocomplete correto.
- Descrição de privacidade e finalidade.
- Validação no cliente e servidor.
- Erro específico, não apenas cor.
- Estado de envio e confirmação.
- Foco encaminhado ao erro/resultado.
- Endpoint com proteção contra spam sem CAPTCHA inacessível.

## QA

Testar teclado, zoom a 200%, largura 320/390 px, contraste, headings e
landmarks. Antes da publicação, usar auditoria automatizada como triagem e teste
manual nas jornadas de WhatsApp, telefone, rota, formulário, menu, FAQ e
carrossel.
