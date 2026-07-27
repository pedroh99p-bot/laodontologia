# Handoff — LA Odontologia

Última atualização: **2026-07-26**

## Fase atual

**Fase 02A — copy estrutural, SEO e contrato de mídia concluídos.**

A entrega ainda não implementa a interface visual final. A próxima sessão deve
validar o conteúdo clínico e operacional que permanece parcial ou pendente
antes de construir novas seções.

## Resultado desta etapa

- Cinco ativos Cloudinary baixados, abertos e inspecionados: hero, favicon,
  retrato da Dra. Amanda, retrato do Dr. Lucas e Open Graph.
- URLs, public IDs, dimensões, alts, prioridades e crops registrados em
  `src/config/media.ts`.
- Placeholders formais criados para toda mídia ausente, sempre com
  `status: "pending"` e `asset: null`.
- Copy deck das 15 áreas da home com status `ready`, `partial` ou `pending`.
- Title, meta description, H1, Open Graph, favicon, hierarquia semântica,
  palavras-chave e critérios de páginas futuras documentados.
- Copy tipada da home e requisitos tipados de publicação para tratamentos,
  resultados, depoimentos e FAQ.
- Open Graph e favicon conectados ao `BaseLayout`; canonical e sitemap continuam
  condicionados ao domínio real.
- Arquitetura, fonte de verdade, pendências, decisões e plano de implementação
  atualizados.

## Arquivos para ler primeiro

1. `AGENTS.md`
2. `docs/HANDOFF.md`
3. `docs/04-CONTENT-SOURCE-OF-TRUTH.md`
4. `docs/11-OPEN-QUESTIONS.md`
5. `docs/12-DECISIONS.md`
6. `docs/13-IMPLEMENTATION-PLAN.md`
7. `docs/15-COPY-DECK.md`
8. `docs/16-SEO-CONTENT-PLAN.md`
9. `docs/17-SECTION-COPY-SPECS.md`
10. `docs/18-MEDIA-PLACEMENT-PLAN.md`

## Arquivos técnicos importantes

- `src/config/site.ts`: única fonte de NAP, Instagram, profissionais, CROs e
  metadados padrão.
- `src/config/media.ts`: ativos confirmados e placeholders discriminados por
  status.
- `src/content/home.ts`: copy estrutural e status editorial de cada seção.
- `src/content/professionals.ts`: perfis parciais sem especialidades inferidas.
- `src/content/treatments.ts`, `results.ts`, `testimonials.ts`, `faq.ts`:
  coleções vazias e requisitos explícitos de publicação.
- `src/layouts/BaseLayout.astro`: metadados, Open Graph, favicon e skip link.

## Copy publicável agora

- Navbar com links apenas para conteúdo existente.
- Hero.
- Faixa de confiança.
- Nomes, CROs e retratos na seção “Profissionais”.
- Localização, telefone e WhatsApp.
- CTA final.
- Rodapé.

A seção de necessidades está parcial: heading, texto e CTA são seguros, mas os
cards clínicos ainda não. Resultados, tratamentos, processo, clínica,
diferenciais, depoimentos e FAQ permanecem pendentes e não devem entrar no HTML.

## Mídia confirmada

| Chave            | Uso                     |   Dimensões |
| ---------------- | ----------------------- | ----------: |
| `heroImage`      | Hero responsivo         | 1122 × 1402 |
| `favicon`        | Favicon global          | 1080 × 1080 |
| `amandaPortrait` | Card da Dra. Amanda     | 1122 × 1402 |
| `lucasPortrait`  | Card do Dr. Lucas       | 1122 × 1402 |
| `openGraph`      | Compartilhamento social |  1731 × 909 |

O mesmo ativo vertical do hero deve ser usado em mobile e desktop, preservando
os dois rostos. Não existe fotografia horizontal aprovada.

## Validação

Executado depois das alterações:

```text
pnpm validate
  PASS — Prettier sem divergências
  PASS — Astro check: 38 arquivos, 0 errors, 0 warnings, 0 hints
  PASS — Astro build: 3 páginas + robots
```

Rotas geradas:

- `/index.html`
- `/privacidade/index.html`
- `/obrigado/index.html`
- `/robots.txt`

## Pendências críticas

- domínio e URL canônica;
- tratamentos oferecidos;
- especialidades registradas e biografias aprovadas;
- processo real de atendimento;
- logo SVG e fontes licenciadas;
- fotos reais da estrutura e acesso;
- registro formal de direitos/autorizações dos arquivos recebidos;
- rota oficial/Place ID;
- endpoint, campos, política de privacidade e controlador do formulário;
- IDs, consentimento e definição de conversão para analytics;
- casos, depoimentos e respectivas autorizações, se essas seções forem usadas.

Lista completa: `docs/11-OPEN-QUESTIONS.md`.

## Decisões que devem ser preservadas

- Conteúdo pendente não aparece no HTML.
- “Profissionais” é o rótulo público até confirmar especialidades.
- Tratamentos, resultados, depoimentos e FAQ continuam como arrays vazios.
- Nenhuma mídia recebe URL, mock ou banco de imagens provisório.
- Screenshots permanecem referência visual, nunca fonte factual.
- A landing deve continuar utilizável sem JavaScript.
- Não criar mapa, formulário, carousel ou comparador antes dos dados e
  autorizações correspondentes.

## Próximos passos

1. Resolver as perguntas críticas com a clínica.
2. Aprovar a copy pronta e decidir quais seções pendentes permanecerão.
3. Preencher apenas os campos clínicos confirmados.
4. Receber logo SVG e mídia restante.
5. Implementar a primeira faixa visual mobile-first.
6. Repetir `pnpm validate`, QA responsivo e atualização deste handoff.

## Próximo prompt recomendado

> Leia `AGENTS.md`, `docs/HANDOFF.md`, `docs/15-COPY-DECK.md`,
> `docs/16-SEO-CONTENT-PLAN.md`, `docs/17-SECTION-COPY-SPECS.md` e
> `docs/18-MEDIA-PLACEMENT-PLAN.md`. Valide os novos dados fornecidos contra
> `docs/11-OPEN-QUESTIONS.md`, atualize somente os campos confirmados e
> implemente o primeiro bloco visual mobile-first sem renderizar seções
> pendentes. Execute `pnpm validate` e atualize o handoff.
