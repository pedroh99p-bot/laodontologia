# Handoff — LA Odontologia

Última atualização: **2026-07-27**

## Fase atual

**Fase 02B — primeira implementação visual mobile-first concluída em Preview.**

A home está publicada com os blocos que têm copy, NAP e mídia aprovados. As
seções clínicas sem dados suficientes continuam preparadas no código, mas
desabilitadas e ausentes do HTML. Este não é um deploy de produção.

## Seções renderizadas

- Navbar responsiva com navegação para conteúdo existente.
- Hero com fotografia Cloudinary confirmada, copy aprovada e CTA de WhatsApp.
- Faixa de confiança com localização, profissionais/CROs e canal de contato.
- Necessidades em estado parcial, apenas com heading, texto e CTA confirmados.
- Profissionais com os retratos confirmados de Dr. Lucas Ferreira e Dra. Amanda
  Perestelo, nomes e CROs.
- Localização com endereço, telefone, WhatsApp e Instagram; sem mapa ou rota
  inventada.
- CTA final e rodapé completo.

## Seções preparadas, mas desabilitadas

`resultados`, `tratamentos`, `processo`, `clinica`, `diferenciais`,
`depoimentos` e `perguntas` permanecem com status `pending` e não são
renderizadas. O registro central está em `src/config/home-sections.ts`; a
regra é `enabled = status !== "pending"`.

## Arquivos técnicos principais

- `src/pages/index.astro`: composição da home e seleção de seções ativas.
- `src/components/sections/HeroSection.astro`: hero responsivo 4:5.
- `src/components/sections/ProfessionalsSection.astro`: cards de profissionais.
- `src/config/media.ts`: contrato de mídia confirmada e pendente.
- `src/lib/cloudinary.ts`: transformações `f_auto`/`q_auto` e crops.
- `src/scripts/site.ts`: tracking de CTAs, visualização de profissionais e
  aprimoramento mínimo do menu nativo.
- `src/styles/tokens.css` e `src/styles/global.css`: tokens e linguagem visual.

## Direção visual implementada

O layout usa o sistema editorial já documentado: base graphite/ivory, cobre como
acento, tipografia de fallback licenciável, grandes áreas de respiro, painel de
copy sobreposto ao hero, faixa escura de prova, bloco de localização em cobre e
rollers laterais apenas em telas amplas (a partir de 88rem). Ícones são SVG
inline, sem dependência externa. A marca segue tipográfica provisória até a
entrega do logo SVG aprovado.

## Mídia e performance

- Hero: `picture` com AVIF/WebP, `srcset` Cloudinary em 480/640/768/960 px,
  `width`/`height` explícitos, `loading="eager"` e `fetchpriority="high"`.
- Retratos: AVIF/WebP em 360/520/720 px, dimensões explícitas e
  `loading="lazy"`.
- Transformações preservam public ID, versão e ponto focal (`c_fill,g_auto`).
- Não há vídeo, iframe, biblioteca de ícones ou script externo no caminho
  crítico.
- Requisições representativas transformadas ficaram abaixo do orçamento:
  hero mobile 19.987 bytes, hero desktop 53.682 bytes, Lucas 14.021 bytes e
  Amanda 36.776 bytes.

## QA executado

Matriz visual e de interação executada no Browser local em:
`320`, `360`, `390`, `430`, `1024`, `1280`, `1365`, `1440` e `1920` px.

- Nenhum overflow horizontal.
- Hero e CTA visíveis nas larguras móveis.
- Targets interativos visíveis com pelo menos 44 px.
- Imagens sem erro e console sem erros/avisos da aplicação.
- Menu `<details>` testado com abertura, links e `Escape`.
- Âncora `#profissionais` testada.
- Seções pendentes ausentes do snapshot/DOM.
- Contraste calculado para os pares principais, todos acima de WCAG AA.

Validação automatizada final:

```text
pnpm format:check
pnpm check
pnpm build
pnpm validate
```

## Preview Vercel

- URL: https://laodontologia-qply6crb1-pedroh99p-5348s-projects.vercel.app
- Deployment: `dpl_J977yy6JUpqQAaCpwfbAftaJARG7`
- Estado: `READY`, preview público.

O primeiro teste mobile anônimo recebeu a autenticação padrão da Vercel em vez
da landing. A proteção SSO foi removida deste projeto público e o mesmo Preview
foi retestado anonimamente em 390 × 844: status 200, hero carregado, sem
overflow e sem erros de console. Nenhuma versão foi promovida para produção.

## Pendências críticas

- domínio e URL canônica de produção;
- logo SVG e fontes aprovadas;
- tratamentos, especialidades, bios, processo e diferenciais;
- fotos reais de estrutura e acesso;
- rota oficial/Place ID;
- formulário, política aprovada e endpoint;
- consentimento e IDs de analytics;
- casos e depoimentos autorizados.

Lista completa: `docs/11-OPEN-QUESTIONS.md`.

## Próximos passos

1. Resolver as perguntas críticas com a clínica.
2. Receber logo SVG, fontes e mídia estrutural.
3. Auditar copy parcial e liberar seções pendentes somente com evidência.
4. Confirmar domínio, Place ID, formulário, consentimento e mensuração.
5. Repetir QA visual, acessível e de performance com dados finais.
6. Fazer aprovação clínica/marca e só então avaliar deploy de produção.
