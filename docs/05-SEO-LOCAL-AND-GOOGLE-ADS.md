# SEO local e Google Ads

Última atualização: 2026-07-26

## Princípio

Nome, endereço e telefone (NAP) devem vir sempre de `src/config/site.ts`. Não
publicar domínio, Place ID, coordenadas, horário, avaliações, tratamentos ou
área de atendimento sem confirmação.

## Base técnica

- `lang="pt-BR"` e HTML semântico.
- `title` e `description` por rota.
- canonical somente após `PUBLIC_SITE_URL` ser configurada.
- Open Graph e Twitter com título/descrição; imagem apenas após asset aprovado.
- `/robots.txt` gerado estaticamente.
- `/obrigado` com `noindex, nofollow`.
- sitemap ativado apenas quando a URL pública for fornecida.
- dados estruturados preparados em `src/lib/schema.ts`, mas não publicados
  automaticamente enquanto campos críticos/URL não forem validados.

## SEO local

- Manter NAP idêntico no site, Perfil da Empresa no Google e diretórios.
- Usar o bairro e a cidade em títulos/copy quando fizer sentido, sem repetição
  artificial.
- Vincular rota ao Google Maps apenas depois de receber URL ou Place ID oficial.
- Estruturar nomes e CROs em conteúdo visível.
- Adicionar horário, `sameAs`, `geo`, avaliações e faixa de preço ao schema
  somente se confirmados e permitidos.
- Não criar páginas de localização duplicadas sem conteúdo e intenção distintos.

## Dados estruturados

O helper aceitará um tipo compatível com `Dentist`/`LocalBusiness` contendo:

- nome;
- URL pública;
- telefone;
- endereço postal confirmado;
- profissionais, se a modelagem for aprovada;
- `sameAs` para Instagram;
- imagem/brand asset aprovado;
- campos opcionais de mapa, horário e coordenadas.

Se `PUBLIC_SITE_URL` estiver vazio, nenhum schema com `url` inventada deve ser
injetado. Antes da publicação, validar no Rich Results Test e Schema Markup
Validator.

## Arquitetura para Google Ads

### Conversões

- Primária: lead confirmado (`generate_lead`), quando existir confirmação
  técnica do envio/contato.
- Microconversões: WhatsApp, telefone, rota, início e envio de formulário.
- Não contar clique bruto como atendimento realizado.
- Evitar disparo duplicado entre listener local, GTM e GA4.

### UTMs

Preservar e ler, sem enviar dados pessoais:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid`, quando a política e integração forem definidas

Persistência futura deve ter prazo e base legal revisados. A camada inicial
aceita `campaign`, `source` e `medium`, sem cookies ou scripts externos.

### Landing pages por intenção

Rotas candidatas, não autorizadas para conteúdo definitivo:

- `/dentista-recreio/`
- `/tratamentos/implante-dentario/`
- `/tratamentos/clareamento-dental/`
- `/tratamentos/estetica-do-sorriso/`
- `/tratamentos/reabilitacao-oral/`

Criar somente após confirmar que a clínica oferece o tratamento, validar a copy
clínica e mapear palavras-chave/negativas. Cada página deve ter proposta e prova
próprias, não apenas trocar o H1.

## Checklist pré-publicação

- URL e domínio oficiais.
- Canonicals absolutos.
- OG image 1200 × 630 acessível publicamente.
- Sitemap sem páginas `noindex`.
- Robots de produção.
- Titles/descriptions únicos.
- NAP conferido com responsáveis.
- Links WhatsApp/telefone/rota testados.
- Schema validado e sem campos inferidos.
- Política de privacidade revisada.
- Consent mode/GTM/GA4/Ads configurados somente após aprovação.
