# Fonte de verdade de conteúdo

Última atualização: 2026-07-26

## Regra

O arquivo executável de dados confirmados é `src/config/site.ts`. Componentes
não podem repetir manualmente telefone, endereço, Instagram ou CRO. Este
documento governa o status editorial de todos os demais conteúdos. Copy da home
fica em `src/content/home.ts`; mídia fica em `src/config/media.ts`.

## Confirmado e publicável

| Dado              | Valor                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| Marca             | LA Odontologia                                                                                   |
| Tagline existente | Lugar onde se constroem sorrisos                                                                 |
| Instagram         | `@la.odontologia_`                                                                               |
| Instagram URL     | `https://www.instagram.com/la.odontologia_/`                                                     |
| Telefone          | `(21) 97188-2312`                                                                                |
| Telefone E.164    | `+5521971882312`                                                                                 |
| WhatsApp          | `5521971882312`                                                                                  |
| Endereço          | Avenida das Américas, 13685, Sala 278, A4 Offices, Recreio dos Bandeirantes, Rio de Janeiro - RJ |
| Profissional      | Dr. Lucas Ferreira — CRO 43440                                                                   |
| Profissional      | Dra. Amanda Perestelo — CRO 42823                                                                |

## Confirmado como direção, não como afirmação clínica

- Odontologia contemporânea, humana, tecnicamente cuidadosa e sofisticada.
- Ênfase conceitual em saúde, estética, planejamento, naturalidade e confiança.
- Objetivo de conversão por WhatsApp, telefone, formulário e rota.

Esses itens orientam copy, mas o texto final deve ser revisado pelos
responsáveis.

## Confirmado nesta etapa

- Hero com os dois profissionais.
- Retratos individuais de Dr. Lucas Ferreira e Dra. Amanda Perestelo.
- Favicon e arte Open Graph.
- Title, meta description, H1 e copy estrutural marcada como `ready`.

Dimensões, URLs, public IDs, crops e alts estão em
`docs/18-MEDIA-PLACEMENT-PLAN.md`.

## Provisório ou parcial

- Arquitetura de seções.
- Nome do CTA como “Falar pelo WhatsApp” até o processo real de agendamento ser
  confirmado.
- Design tokens e fallbacks tipográficos.
- Headings propostos de seções ainda marcadas como `pending`.

## Não confirmado

- Lista de tratamentos.
- Especialidades dos profissionais e respectivos registros como especialistas.
- Biografias, formação, experiência e títulos acadêmicos.
- Fluxo exato de atendimento.
- Horários e canais de resposta.
- Convênios, preços, pagamentos e financiamento.
- Estacionamento, acessibilidade física e equipamentos.
- CEP, coordenadas, Place ID e URL definitiva de rota.
- Avaliações, depoimentos, números e selos de confiança.
- Fotografias da estrutura, acesso, tratamentos, casos e depoimentos.
- Registro formal dos direitos/autorizações dos arquivos recebidos.

## Não pode ser publicado ainda

- Casos antes/depois sem autorização e consentimento documentados.
- Fotos, nomes ou relatos de pacientes sem consentimento.
- Resultados simulados ou gerados por IA apresentados como reais.
- Tratamentos e especialidades extraídos dos screenshots.
- Mapa, CEP ou foto do prédio presentes nas referências.
- O depoimento atribuído a “Paciente LA Odontologia”.
- Os nomes “Luciana e André” e CROs `XXXX` visíveis em MB-05.
- Promessas de resultado, “melhor”, “garantido”, “duradouro” ou equivalentes sem
  sustentação aprovada.

## Conteúdo tipado e estados editoriais

`treatments.ts`, `results.ts`, `testimonials.ts` e `faq.ts` exportam coleções
tipadas vazias. Isso evita placeholders publicáveis e torna a ausência explícita
no build. `home.ts` classifica cada seção como `ready`, `partial` ou `pending`;
seções pendentes não devem entrar no HTML. Só preencher coleções clínicas após
confirmação e registrar a fonte.

## Fluxo de aprovação

1. Receber conteúdo/fonte.
2. Classificar como confirmado, provisório ou bloqueado.
3. Validar textos clínicos/promocionais com responsáveis.
4. Validar consentimento/direitos de mídia.
5. Atualizar código tipado.
6. Atualizar este documento, decisões e handoff.
