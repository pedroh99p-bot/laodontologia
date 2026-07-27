# LA Odontologia

Fundação técnica e editorial da futura landing page da LA Odontologia, no
Recreio dos Bandeirantes. A interface final ainda não é reproduzida: o projeto
organiza referências, copy com status de publicação, design system, SEO,
analytics, Cloudinary, acessibilidade, performance e componentes mínimos
compiláveis.

## Requisitos

- Node.js 24 LTS (`.nvmrc`: 24.18.0; Vercel: 24.x)
- pnpm 11+

Astro 7 exige Node.js 22.12 ou superior e versões pares. Node 24 foi escolhido
por ser LTS e estar disponível na Vercel.

## Uso

```bash
pnpm install
pnpm dev
pnpm validate
```

Scripts:

- `pnpm dev`: servidor local.
- `pnpm build`: geração estática em `dist/`.
- `pnpm preview`: preview do build.
- `pnpm check`: diagnóstico Astro/TypeScript.
- `pnpm format`: formata arquivos.
- `pnpm format:check`: confere formatação.
- `pnpm validate`: formatação + check + build.

## Dependências

- `astro`: framework SSG e compilação de componentes.
- `@astrojs/sitemap`: sitemap; só é ativado com `PUBLIC_SITE_URL`.
- `@astrojs/check`: diagnóstico de Astro e TypeScript.
- `typescript`: contratos e modo strict.
- `prettier` + `prettier-plugin-astro`: formatação consistente.

Não há React, Tailwind, biblioteca de UI, animação ou analytics externo.

## Variáveis

Copie `.env.example` para `.env` somente quando houver valores reais. Todas as
variáveis com prefixo `PUBLIC_` são públicas. Tokens/segredos futuros não podem
usar esse prefixo nem entrar no repositório.

Sem `PUBLIC_SITE_URL`, o build continua funcional, mas não gera canonical nem
sitemap. Nenhuma URL é inventada.

## Estrutura

```text
docs/                  decisões, contratos, análise e handoff
docs/references/       screenshots e peças de marca recebidos
public/                assets públicos aprovados (ainda vazio)
src/components/        layout, UI e shells de seções
src/config/            dados centrais, navegação, mídia e analytics
src/content/           copy/status da home e coleções clínicas protegidas
src/layouts/           metadados, skip link e estilos globais
src/lib/               SEO, schema, analytics, WhatsApp e Cloudinary
src/pages/             home, privacidade, obrigado e robots
src/styles/            tokens e CSS global
tests/                 estratégia de testes futuros
```

## Continuidade

Leia primeiro `AGENTS.md` e `docs/HANDOFF.md`. Pendências de negócio estão em
`docs/11-OPEN-QUESTIONS.md`; a copy estrutural está em
`docs/15-COPY-DECK.md`. Não use os screenshots como fonte factual.
