# Brief do projeto

Última atualização: 2026-07-26

## Objetivo

Preparar e, na fase seguinte, implementar uma landing page local de alta
conversão para a **LA Odontologia**, orientada a tráfego de Google Ads e a
contatos por WhatsApp, telefone, formulário e rota. A página deve posicionar a
clínica no Recreio dos Bandeirantes com linguagem humana, contemporânea,
cuidadosa e sofisticada.

Esta fase entrega apenas a fundação técnica, documental e de conteúdo. A
interface final, integrações, fotografias de produção e conteúdo clínico
dependem de validação posterior.

## Público e momento

- Pessoas que procuram atendimento odontológico no Recreio dos Bandeirantes e
  proximidades.
- Usuários em fase de comparação, busca de confiança ou intenção direta de
  contato.
- Tráfego mobile e de pesquisa paga é prioritário.

Não há ainda dados confirmados sobre perfis demográficos, tratamentos,
convênios, horários, preços ou formas de pagamento.

## Posicionamento

Direção aprovada no briefing: odontologia contemporânea, humana, tecnicamente
cuidadosa e visualmente sofisticada, unindo saúde, estética, planejamento,
naturalidade e confiança.

Tagline existente: **“Lugar onde se constroem sorrisos”**.

A linguagem não deve prometer resultado, usar superlativos não comprovados nem
apresentar especialidades sem validação.

## Dados confirmados

- Marca: LA Odontologia
- Instagram: `@la.odontologia_`
- Instagram URL: `https://www.instagram.com/la.odontologia_/`
- Telefone/WhatsApp: `(21) 97188-2312`
- Telefone E.164: `+5521971882312`
- Endereço: Avenida das Américas, 13685, Sala 278, A4 Offices, Recreio dos
  Bandeirantes, Rio de Janeiro - RJ
- Dr. Lucas Ferreira — CRO 43440
- Dra. Amanda Perestelo — CRO 42823

## Conversão

A ação primária é iniciar contato pelo WhatsApp. Telefone e rota são ações
secundárias. Formulário será preparado posteriormente, após definição de
endpoint, campos, consentimento e política de tratamento de dados.

Eventos principais:

- `whatsapp_click`
- `phone_click`
- `route_click`
- `form_start`
- `form_submit`
- `generate_lead`

## Conceito visual

Editorial odontológico premium: fundos marfim, cobre como cor de ação, grafite
para contraste, serifada elegante em títulos, sans-serif legível em interface,
painéis arredondados, ícones lineares, imagens humanas grandes e rollers
verticais decorativos.

As referências são conceituais e estão analisadas em
`01-VISUAL-REFERENCE-ANALYSIS.md`.

## Stack e sucesso da fase

- Astro 7, SSG
- TypeScript strict
- CSS nativo e componentes Astro
- pnpm
- Node.js 24 LTS
- Destino futuro: Vercel

A fase está pronta quando instalação, `pnpm check`, formatação e build passam,
os dados confirmados estão centralizados e a próxima sessão consegue avançar
sem inferir informações comerciais.
