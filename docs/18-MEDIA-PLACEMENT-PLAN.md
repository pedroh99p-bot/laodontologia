# Plano de posicionamento de mídia

Última atualização: 2026-07-26

O inventário executável está em `src/config/media.ts`. As URLs confirmadas
foram baixadas, abertas e inspecionadas em 2026-07-26.

## Ativos confirmados

| Chave de origem     | Chave interna    | Seção         |   Dimensões | Posicionamento                         | Crop mobile                  | Crop desktop                       | Alt                                                          | Status     |
| ------------------- | ---------------- | ------------- | ----------: | -------------------------------------- | ---------------------------- | ---------------------------------- | ------------------------------------------------------------ | ---------- |
| `hero_image`        | `heroImage`      | Hero          | 1122 × 1402 | mídia principal ao lado/abaixo da copy | 4:5, preservar rostos e mãos | 3:4 ou 4:5, sem simular horizontal | Dra. Amanda Perestelo e Dr. Lucas Ferreira na LA Odontologia | confirmado |
| `specialist_amanda` | `amandaPortrait` | Profissionais | 1122 × 1402 | card da Dra. Amanda                    | 4:5, rosto centralizado      | 4:5, preservar jaleco              | Dra. Amanda Perestelo na LA Odontologia                      | confirmado |
| `specialist_lucas`  | `lucasPortrait`  | Profissionais | 1122 × 1402 | card do Dr. Lucas                      | 4:5, rosto centralizado      | 4:5, preservar jaleco              | Dr. Lucas Ferreira na LA Odontologia                         | confirmado |
| `og_image`          | `openGraph`      | Metadados     |  1731 × 909 | `og:image` e `twitter:image`           | sem crop                     | sem crop                           | LA Odontologia — cuidado para o seu sorriso no Recreio       | confirmado |
| `favicon`           | `favicon`        | Metadados     | 1080 × 1080 | favicon global                         | sem crop                     | sem crop                           | vazio                                                        | confirmado |

## Decisão responsiva do hero

Existe uma fotografia vertical confirmada, não duas fotografias distintas. O
mesmo ativo será usado em mobile e desktop com `object-position` e contêineres
adequados. Isso evita inventar um enquadramento horizontal e mantém o rosto dos
dois profissionais visível.

## Placeholders formais

| Chave interna          | Finalidade                        | Prioridade | Proporção      | Crop mobile | Crop desktop | Alt planejado                                                     | Seção                              | Status   |
| ---------------------- | --------------------------------- | ---------- | -------------- | ----------- | ------------ | ----------------------------------------------------------------- | ---------------------------------- | -------- |
| `logoPrimary`          | marca principal                   | crítica    | vetorial livre | sem crop    | sem crop     | LA Odontologia                                                    | Navbar/Rodapé                      | pendente |
| `logoHorizontal`       | marca em área estreita            | crítica    | vetorial livre | sem crop    | sem crop     | LA Odontologia                                                    | Navbar                             | pendente |
| `logoSeal`             | selo auxiliar                     | baixa      | 1:1            | sem crop    | sem crop     | Símbolo da LA Odontologia                                         | Rodapé                             | pendente |
| `clinicReception`      | apresentar recepção real          | normal     | 3:2            | 4:3         | 3:2          | Recepção da LA Odontologia no Recreio dos Bandeirantes            | Clínica                            | pendente |
| `clinicOperatory`      | apresentar consultório real       | normal     | 3:2            | 4:3         | 3:2          | Consultório da LA Odontologia no Recreio dos Bandeirantes         | Clínica                            | pendente |
| `clinicDetail`         | detalhe editorial do espaço       | baixa      | 1:1 ou 4:5     | 4:5         | 1:1          | Detalhe do ambiente da LA Odontologia                             | Clínica                            | pendente |
| `buildingExterior`     | reconhecer acesso ao prédio       | baixa      | 3:2            | 4:3         | 3:2          | Entrada do A4 Offices na Avenida das Américas                     | Localização                        | pendente |
| `locationMapPreview`   | prévia validada da localização    | baixa      | 16:9           | 4:3         | 16:9         | Mapa da localização da LA Odontologia no Recreio dos Bandeirantes | Localização                        | pendente |
| `treatmentImages`      | ilustrar tratamentos confirmados  | baixa      | 4:3            | 4:3         | 4:3          | definir por tratamento                                            | Tratamentos                        | pendente |
| `beforeAfterCases`     | documentar casos autorizados      | baixa      | 1:1 por quadro | 1:1         | 1:1          | definir por caso e contexto                                       | Resultados                         | pendente |
| `testimonialPortraits` | identificar relato autorizado     | baixa      | 1:1            | 1:1         | 1:1          | definir por pessoa e consentimento                                | Depoimentos                        | pendente |
| `decorativeIcons`      | apoio visual sem significado novo | baixa      | 1:1            | sem crop    | sem crop     | vazio                                                             | Necessidades/Processo/Diferenciais | pendente |

## URLs e public IDs confirmados

| Chave            | Public ID                                       | URL                                                                                                                |
| ---------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `heroImage`      | `6c22b136-4a2b-4e28-8bd5-7ed754a63323_iks3bs`   | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785115593/6c22b136-4a2b-4e28-8bd5-7ed754a63323_iks3bs.webp`   |
| `favicon`        | `ffca3eb5-c4b7-4a2e-bb59-0b349896f079_1_bdjkoj` | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785115671/ffca3eb5-c4b7-4a2e-bb59-0b349896f079_1_bdjkoj.webp` |
| `amandaPortrait` | `b833386f-08c9-4a15-b79e-b2a846f44be3_j0e5tb`   | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785115593/b833386f-08c9-4a15-b79e-b2a846f44be3_j0e5tb.webp`   |
| `lucasPortrait`  | `35a9f889-ee5f-48a3-b4bf-e8cae288d48d_aucy77`   | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785115593/35a9f889-ee5f-48a3-b4bf-e8cae288d48d_aucy77.webp`   |
| `openGraph`      | `0d0393a3-4412-4165-a8db-ca816793cc60_tp3eca`   | `https://res.cloudinary.com/dhbrxzt5a/image/upload/v1785115592/0d0393a3-4412-4165-a8db-ca816793cc60_tp3eca.webp`   |

## Regras de implementação

- Hero e favicon são críticos e não usam lazy loading.
- Retratos entram abaixo da dobra e usam lazy loading.
- Mídia pendente não recebe URL provisória, mock ou banco de imagens.
- Resultados exigem consentimento e validação clínica antes de upload.
- Não aplicar retoque que altere anatomia, cor dentária ou interpretação
  clínica.
- Transformações Cloudinary devem preservar o public ID e os pontos focais
  definidos no contrato tipado.
