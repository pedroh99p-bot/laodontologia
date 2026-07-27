# Contrato de assets para Cloudinary

Última atualização: 2026-07-26

O contrato tipado está em `src/config/media.ts`. Ativos confirmados carregam
URL, `publicId`, dimensões, alt e data de inspeção; placeholders formais usam
`status: "pending"` e `asset: null`.

## Convenções

- Chaves internas estáveis em `camelCase`.
- `sourceKey` preserva a chave recebida no briefing.
- URL e `publicId` só entram depois de responderem com sucesso e passarem por
  inspeção visual.
- Alt descreve conteúdo e contexto, sem começar com “imagem de”.
- Crop mobile e desktop são registrados por slot.
- Transformações não podem distorcer anatomia, resultados ou identidade.
- Consentimento é obrigatório antes de upload e publicação de casos clínicos ou
  pacientes identificáveis.

## Inventário confirmado

| Chave interna    | Chave recebida      | Public ID                                       |   Dimensões | Formato | Seção         | Prioridade | Lazy | Status     |
| ---------------- | ------------------- | ----------------------------------------------- | ----------: | ------- | ------------- | ---------- | ---- | ---------- |
| `heroImage`      | `hero_image`        | `6c22b136-4a2b-4e28-8bd5-7ed754a63323_iks3bs`   | 1122 × 1402 | WebP    | Hero          | crítica    | não  | confirmado |
| `favicon`        | `favicon`           | `ffca3eb5-c4b7-4a2e-bb59-0b349896f079_1_bdjkoj` | 1080 × 1080 | WebP    | metadados     | crítica    | não  | confirmado |
| `amandaPortrait` | `specialist_amanda` | `b833386f-08c9-4a15-b79e-b2a846f44be3_j0e5tb`   | 1122 × 1402 | WebP    | Profissionais | normal     | sim  | confirmado |
| `lucasPortrait`  | `specialist_lucas`  | `35a9f889-ee5f-48a3-b4bf-e8cae288d48d_aucy77`   | 1122 × 1402 | WebP    | Profissionais | normal     | sim  | confirmado |
| `openGraph`      | `og_image`          | `0d0393a3-4412-4165-a8db-ca816793cc60_tp3eca`   |  1731 × 909 | WebP    | metadados     | alta       | não  | confirmado |

As URLs completas e os textos alternativos ficam em `src/config/media.ts` e
`docs/18-MEDIA-PLACEMENT-PLAN.md`.

## Placeholders formais

| Chave                  | Finalidade               | Proporção      | Crop desktop            | Crop mobile         | Alt planejado                                                     | Prioridade | Lazy | Formato   | Seção             | Status   |
| ---------------------- | ------------------------ | -------------- | ----------------------- | ------------------- | ----------------------------------------------------------------- | ---------- | ---- | --------- | ----------------- | -------- |
| `logoPrimary`          | assinatura principal     | vetorial/livre | sem crop                | sem crop            | LA Odontologia                                                    | crítica    | não  | SVG       | Navbar/Rodapé     | pendente |
| `logoHorizontal`       | assinatura horizontal    | vetorial/livre | sem crop                | sem crop            | LA Odontologia                                                    | crítica    | não  | SVG       | Navbar            | pendente |
| `logoSeal`             | selo/monograma           | 1:1            | sem crop                | sem crop            | Símbolo da LA Odontologia                                         | baixa      | sim  | SVG       | Rodapé            | pendente |
| `clinicReception`      | recepção real            | 3:2            | ambiente amplo          | 4:3                 | Recepção da LA Odontologia no Recreio dos Bandeirantes            | normal     | sim  | AVIF/WebP | Clínica           | pendente |
| `clinicOperatory`      | consultório real         | 3:2            | ambiente amplo          | 4:3                 | Consultório da LA Odontologia no Recreio dos Bandeirantes         | normal     | sim  | AVIF/WebP | Clínica           | pendente |
| `clinicDetail`         | detalhe editorial        | 1:1 ou 4:5     | 1:1                     | 4:5                 | Detalhe do ambiente da LA Odontologia                             | baixa      | sim  | AVIF/WebP | Clínica           | pendente |
| `buildingExterior`     | reconhecimento do prédio | 3:2            | fachada/entrada         | 4:3                 | Entrada do A4 Offices na Avenida das Américas                     | baixa      | sim  | AVIF/WebP | Localização       | pendente |
| `locationMapPreview`   | prévia de mapa validado  | 16:9           | contexto do bairro      | 4:3                 | Mapa da localização da LA Odontologia no Recreio dos Bandeirantes | baixa      | sim  | AVIF/WebP | Localização       | pendente |
| `treatmentImages`      | cards confirmados        | 4:3            | consistente entre cards | 4:3                 | definir por tratamento                                            | baixa      | sim  | AVIF/WebP | Tratamentos       | pendente |
| `beforeAfterCases`     | casos autorizados        | 1:1 por quadro | mesmo enquadramento     | mesmo enquadramento | definir por caso                                                  | baixa      | sim  | AVIF/WebP | Resultados        | pendente |
| `testimonialPortraits` | relatos autorizados      | 1:1            | rosto centralizado      | rosto centralizado  | definir por pessoa                                                | baixa      | sim  | AVIF/WebP | Depoimentos       | pendente |
| `decorativeIcons`      | apoio ornamental         | 1:1            | sem crop                | sem crop            | vazio                                                             | baixa      | sim  | SVG       | seções editoriais | pendente |

## Transformações sugeridas

- `f_auto,q_auto` apenas depois de validar a qualidade final.
- Larguras responsivas predefinidas; não aceitar transformação arbitrária pelo
  usuário.
- `c_fill` somente nos crops registrados em contrato.
- Hero e retratos precisam de ponto focal que preserve os rostos.
- Não aplicar beauty retouch, alteração de cor dentária ou transformação que
  mude a leitura clínica.

## Dados ainda necessários por ativo

Mesmo para os cinco arquivos confirmados tecnicamente, o registro de produção
deve manter titular dos direitos, autorização aplicável e data de aprovação
editorial. Novas mídias também exigem chave, URL/public ID, dimensões originais,
formato, alt, crop e seção.
