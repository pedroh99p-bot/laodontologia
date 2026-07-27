# Analytics e conversões

Última atualização: 2026-07-26

## Arquitetura

A camada `src/lib/analytics.ts` é independente de fornecedor. Sem GTM/GA4 ela
não carrega scripts e não lança erro. Quando houver implementação real, os
adaptadores devem consumir o mesmo contrato.

## Eventos

| Evento               | Quando disparar                               | Natureza           |
| -------------------- | --------------------------------------------- | ------------------ |
| `whatsapp_click`     | ativação de link para WhatsApp                | microconversão     |
| `phone_click`        | ativação de `tel:`                            | microconversão     |
| `route_click`        | abertura de rota/mapa oficial                 | microconversão     |
| `form_start`         | primeira interação intencional com formulário | intenção           |
| `form_submit`        | envio aceito pelo endpoint                    | conversão técnica  |
| `generate_lead`      | lead confirmado segundo regra futura          | conversão primária |
| `treatment_view`     | visualização/seleção de tratamento confirmado | engajamento        |
| `professional_view`  | abertura de perfil/bio confirmada             | engajamento        |
| `result_interaction` | interação com caso autorizado                 | engajamento        |
| `faq_open`           | abertura de pergunta                          | engajamento        |

## Parâmetros permitidos

- `page_path`
- `cta_location`
- `treatment`
- `professional`
- `campaign`
- `source`
- `medium`

Não enviar telefone, nome, e-mail, mensagem livre, dado clínico ou qualquer PII
para analytics. Valores de tratamento/profissional devem ser slugs controlados,
não entrada livre.

## Localizações padronizadas de CTA

- `header`
- `hero`
- `section`
- `location`
- `final`
- `footer`
- `thank_you`

Adicionar novo valor exige atualização tipada, documentação e plano de
relatórios.

## Sequência futura

1. Definir CMP/consentimento e política.
2. Configurar GTM/GA4/Google Ads em ambiente de teste.
3. Implementar um único listener por interação.
4. Validar payload no preview/debug.
5. Confirmar que `form_submit` só ocorre após resposta bem-sucedida.
6. Definir quando `generate_lead` é legítimo.
7. Testar origem/UTM, mobile e navegação de retorno.

## Critérios de qualidade

- Sem script de terceiros nesta fase.
- Falha de analytics nunca bloqueia navegação/contato.
- Sem evento duplicado em um clique.
- `page_path` sem query sensível.
- Eventos versionados e estáveis.
- Relatórios diferenciam clique, lead e resultado comercial.
