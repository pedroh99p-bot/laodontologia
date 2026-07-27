# Orçamento de performance

Última atualização: 2026-07-26

Metas técnicas, não promessas absolutas. Devem ser medidas em ambiente de
produção, dispositivo/rede comparáveis e com dados de campo quando disponíveis.

## Web Vitals

- LCP ≤ 2,5 s
- INP ≤ 200 ms
- CLS ≤ 0,1

## Orçamento preliminar

| Recurso                                     |       Meta comprimida/transferida |
| ------------------------------------------- | --------------------------------: |
| JavaScript inicial próprio                  |                           ≤ 20 KB |
| CSS inicial total                           |                           ≤ 35 KB |
| imagem do hero                              | ≤ 220 KB mobile; ≤ 350 KB desktop |
| total inicial da rota principal             |                          ≤ 900 KB |
| scripts de terceiros antes de consentimento |                              0 KB |
| scripts de terceiros após consentimento     |       ≤ 120 KB, sujeito a revisão |

## Regras

- SSG e HTML funcional antes de JavaScript.
- Zero iframe de mapa no caminho crítico.
- Zero vídeo no carregamento inicial.
- Hero com dimensões e crop conhecidos.
- Imagens abaixo da dobra com lazy loading.
- Usar `picture` ou `Image` do Astro com `srcset`.
- Máximo de duas famílias e quatro arquivos WOFF2.
- Nenhuma dependência pesada sem justificativa registrada.
- Animações com `transform`/`opacity`.
- `prefers-reduced-motion` respeitado.
- Reservar espaço para ícones, fotos e comparadores.
- Carrossel sem autoplay por padrão.

## Estratégia de mídia

- Hero: AVIF/WebP, tamanhos 480/768/1280/1600 conforme crop real; `fetchpriority`
  alto apenas para a variante efetivamente usada.
- Retratos/cards: lazy loading abaixo da dobra.
- Casos clínicos: responsivos, protegidos por consentimento e sem pré-carregar o
  carrossel inteiro.
- Mapa: link/preview estático validado; iframe somente por ação do usuário ou
  abaixo da dobra, após decisão de privacidade.

## Medição futura

1. Build de produção e servidor local.
2. Lighthouse em 390 × 844 e desktop, cache frio.
3. Chrome Performance para long tasks/CLS.
4. Verificação de tamanhos do `dist/`.
5. Após produção: Search Console e CrUX/RUM, se aprovados.

Registrar baseline e regressões no handoff; uma execução Lighthouse isolada não
representa usuários reais.
