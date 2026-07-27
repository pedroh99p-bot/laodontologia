# Design system inicial

Última atualização: 2026-07-26

## Princípios

1. Clareza e contraste antes de efeito.
2. Sofisticação por tipografia, proporção e espaço, não por excesso de sombra.
3. Imagens reais tratadas como conteúdo e com dimensões reservadas.
4. Mobile-first a partir de 390 px.
5. Movimento funcional, progressivo e removível.

## Origem dos valores

As cores principais e a linguagem de raios generosos foram fornecidas pelo
briefing e reforçadas pelas referências. Escalas de tipografia, espaço,
container, sombra e movimento são aproximações técnicas iniciais, escolhidas
para limitar valores arbitrários. Devem ser refinadas na fase visual.

## Cores

| Token                 | Valor     | Papel                        |
| --------------------- | --------- | ---------------------------- |
| `--color-ivory`       | `#F7F2EC` | fundo principal              |
| `--color-warm-white`  | `#FCFAF7` | superfícies                  |
| `--color-copper`      | `#A8542F` | ação e destaque              |
| `--color-copper-dark` | `#8E3F22` | hover/contraste              |
| `--color-graphite`    | `#242321` | texto principal/fundo escuro |
| `--color-muted-text`  | `#67615C` | texto secundário             |
| `--color-warm-border` | `#DED3C8` | bordas                       |
| `--color-sage`        | `#A7B1A4` | decoração                    |

Texto normal usa grafite sobre marfim/warm-white. Texto branco só deve ser usado
em cobre escuro/grafite quando passar WCAG AA. Não usar `--color-copper` para
texto pequeno sobre marfim sem verificar contraste.

## Tipografia

### Display

Requisitos futuros: serifada editorial, curvas elegantes, acentos completos em
pt-BR, numerais legíveis e itálico real. Pesos necessários: 400 e, somente se
aprovado, itálico 400.

Fallback inicial:

```css
ui-serif, Georgia, Cambria, "Times New Roman", serif
```

### Texto e interface

Requisitos futuros: sans-serif com boa altura-x, diferenciação clara entre
caracteres e excelente leitura em 16 px. Pesos necessários: 400, 500 e 600.

Fallback inicial:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
sans-serif
```

### Estratégia futura

- Limite: duas famílias.
- Limite preliminar: até quatro arquivos WOFF2.
- Subset latino com acentos pt-BR.
- `font-display: swap`.
- Preload apenas do arquivo realmente necessário no primeiro viewport.
- Não baixar fonte comercial sem licença.

## Escalas

Os tokens estão implementados em `src/styles/tokens.css`.

- Tipos fluidos: cinco degraus de corpo/UI e quatro degraus de título, com
  `clamp()`.
- Espaço: oito degraus reutilizáveis; seções usam um token fluido.
- Container: máximo editorial de 1180 px e gutter fluido.
- Grid conceitual: 4 colunas mobile, 8 tablet, 12 desktop.
- Raios: pequeno, médio, grande e cápsula.
- Sombras: uma de superfície e uma de elevação.
- Z-index: base, header, overlay e modal.
- Breakpoints conceituais: 30 rem, 48 rem e 75 rem. O CSS deve quebrar quando o
  conteúdo pedir, não por aparelho específico.

## Componentes

### Navbar cápsula

Superfície warm-white, borda discreta, raio cápsula, sombra leve. No mobile,
marca, CTA curto e controle de menu. Menu deve funcionar sem JavaScript ou ter
enhancement com foco e Escape.

### Botões

- Alvo mínimo: 44 × 44 CSS px.
- Primário cobre escuro com texto branco.
- Secundário transparente com borda.
- Estados visíveis de hover, focus, active e disabled.
- Rótulo deve descrever ação: “Falar pelo WhatsApp”, não “Clique aqui”.

### Painéis e cards

Usar card apenas para itens repetidos ou agrupamentos reais. Evitar card dentro
de card. Raio grande em áreas editoriais; borda fina; sombra apenas quando
necessária para sobreposição.

### Rollers

Elemento decorativo de capítulo com palavra vertical e linha. Sempre
`aria-hidden`, nunca única forma de identificar a seção e ocultável em telas
estreitas/reduced motion.

## Imagem

- Definir `width`/`height` ou `aspect-ratio`.
- Hero com crop separado desktop/mobile.
- Abaixo da dobra: lazy loading.
- Preferir AVIF/WebP; manter JPEG quando fotografia exigir compatibilidade.
- Usar `picture`/`Image` do Astro quando os assets finais existirem.
- Ponto focal e alt devem vir do contrato de mídia.

## Movimento

- Durações: rápida (120 ms), padrão (220 ms) e lenta (360 ms).
- Animar `transform` e `opacity`.
- Nenhum conteúdo depende de animação para aparecer.
- Com `prefers-reduced-motion: reduce`, duração próxima de zero, rolagem
  automática desativada e carrossel sem autoplay.
