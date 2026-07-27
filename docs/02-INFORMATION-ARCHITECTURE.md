# Arquitetura da informação

Última atualização: 2026-07-26

## Jornada principal

```text
Pesquisa/Google Ads
  → entendimento rápido de marca + local
  → confiança verificável
  → identificação da necessidade
  → equipe/processo/resultados autorizados
  → redução de objeções
  → WhatsApp, telefone, rota ou formulário
```

## Ordem proposta da landing page final

| Ordem | Seção                    | Função                                  | Referência visual            | Estado de conteúdo                    |
| ----: | ------------------------ | --------------------------------------- | ---------------------------- | ------------------------------------- |
|     1 | Navbar                   | navegação curta + CTA                   | hero, todos os mockups       | pronto; links limitados ao confirmado |
|     2 | Hero                     | explicar clínica, local e próximo passo | DT/MB-01                     | copy e fotografia confirmadas         |
|     3 | Faixa de confiança       | prova objetiva/verificável              | DT/MB-01 e 02                | pronto com local, nomes e CROs        |
|     4 | Necessidades do paciente | ajudar o usuário a se reconhecer        | DT/MB-02                     | parcial; cards clínicos pendentes     |
|     5 | Resultados               | casos autorizados e contexto            | DT/MB-03                     | bloqueado por conteúdo/consentimento  |
|     6 | Profissionais            | apresentar nomes, CROs e perfis         | DT/MB-04                     | parcial; fotos/nome/CRO confirmados   |
|     7 | Tratamentos              | ofertas clínicas confirmadas            | apenas DT/MB-02 como direção | lista pendente                        |
|     8 | Processo de atendimento  | reduzir incerteza                       | DT/MB-05                     | fluxo pendente                        |
|     9 | Estrutura da clínica     | mostrar ambiente real                   | fragmentos DT/MB-05          | fotos e fatos pendentes               |
|    10 | Diferenciais             | evidências reais, não slogans           | faixas de ícones             | conteúdo pendente                     |
|    11 | Depoimentos              | prova social autorizada                 | apenas artefato em MB-03     | bloqueado por fonte                   |
|    12 | Localização              | NAP, rota, telefone e WhatsApp          | DT/MB-06                     | pronto; rota/mapa ainda pendentes     |
|    13 | Perguntas frequentes     | resolver objeções reais                 | sem referência específica    | perguntas pendentes                   |
|    14 | CTA final                | reforçar próximo passo                  | fragmento MB-05              | copy pronta                           |
|    15 | Rodapé                   | NAP, CROs, Instagram e políticas        | sem referência específica    | copy e estrutura prontas              |

## Navegação inicial

Na fundação:

- Início
- Profissionais
- Localização
- Privacidade
- CTA: falar pelo WhatsApp

Na landing final, manter no máximo cinco links antes do CTA. Links para seções
sem conteúdo validado não devem ser publicados.

## Componentização

### Layout

- `BaseLayout`: metadados, skip link, landmarks e estilos globais.
- `Header`: marca textual provisória, navegação e CTA.
- `Footer`: NAP, profissionais e links legais, sempre a partir da configuração
  central.

### Seções

Cada seção possui um componente próprio. A implementação atual ainda usa shells;
o status editorial e a copy aprovada estão em `src/content/home.ts` e
`docs/15-COPY-DECK.md`:

- `HeroSection`
- `NeedsSection`
- `ResultsSection`
- `SpecialistsSection` (nome técnico legado; rótulo público “Profissionais”)
- `ProcessSection`
- `LocationSection`
- `FinalCTASection`

Componentes futuros só devem ser criados quando o conteúdo e a interação
justificarem: `TrustStrip`, `TreatmentsSection`, `ClinicSection`,
`DifferentialsSection`, `TestimonialsSection` e `FaqSection`.

### UI

- `Container`: largura e gutter.
- `SectionHeading`: eyebrow, título e descrição com hierarquia previsível.
- `Button` e `IconButton`: links/botões semânticos com alvo mínimo.
- `Roller`: decoração vertical fora da árvore de acessibilidade.

## Rotas desta fase

- `/`: prova de compilação e arquitetura.
- `/privacidade`: aviso mínimo, a ser revisado antes da coleta de leads.
- `/obrigado`: confirmação mínima e `noindex`.
- `/robots.txt`: regras sem depender de domínio inventado.

## Rotas futuras condicionais

Não criar conteúdo definitivo antes de confirmar oferta e intenção:

- `/dentista-recreio/`
- `/tratamentos/implante-dentario/`
- `/tratamentos/clareamento-dental/`
- `/tratamentos/estetica-do-sorriso/`
- `/tratamentos/reabilitacao-oral/`

Cada rota futura precisa de tratamento confirmado, revisão clínica, intenção de
busca distinta, canonical próprio e conversões rastreáveis.
