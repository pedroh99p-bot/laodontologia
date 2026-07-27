# Compliance e segurança de conteúdo

Última atualização: 2026-07-26

Este documento é um guardrail editorial/técnico, não parecer jurídico. Regras
profissionais, LGPD, publicidade e textos clínicos devem ser validados pelos
responsáveis e, quando necessário, por assessoria competente antes da
publicação.

## Proibido sem validação

- Prometer resultado garantido.
- Usar superlativos não comprovados.
- Inventar especialidades, formação, tecnologia, estrutura ou experiência.
- Afirmar que aceita convênio, condição de pagamento ou estacionamento.
- Publicar antes/depois sem autorização adequada.
- Publicar nome, imagem ou depoimento de paciente sem consentimento.
- Usar caso gerado/simulado por IA como resultado real.
- Alterar/omitir CROs confirmados.
- Publicar conteúdo clínico ou promocional sem revisão dos responsáveis.
- Confundir copy conceitual com orientação médica individual.

## Antes/depois e pacientes

Para cada caso futuro, manter registro de:

- origem dos arquivos;
- autorização de uso e canais;
- consentimento informado;
- confirmação de que imagens pertencem ao mesmo caso;
- procedimento e contexto aprovados;
- edição/correção aplicada;
- prazo ou revogação do consentimento;
- alt e descrição que não exponham dado desnecessário.

Não incorporar metadados pessoais em arquivos públicos. Não armazenar
autorizações no repositório público.

## Profissionais

- Nome e CRO devem corresponder à fonte oficial fornecida.
- Especialidade só pode ser publicada após confirmação e validação do registro
  correspondente.
- Títulos acadêmicos, sociedades e certificações exigem fonte.
- A expressão “especialista” deve ficar bloqueada até essa validação.

## Privacidade e leads

- Coletar somente dados necessários.
- Definir controlador, finalidade, retenção, compartilhamento e canal de direitos
  antes de ativar formulário/analytics.
- Variáveis `PUBLIC_*` são públicas e não podem conter segredos.
- Tokens de backend, credenciais e chaves privadas futuras devem ser variáveis
  sem prefixo `PUBLIC_` e nunca entrar no repositório.
- Não enviar PII para analytics.

## Uso de IA

IA pode apoiar ideação e imagens explicitamente ilustrativas, mas não pode criar
prova clínica, depoimento ou credencial. Assets finais de marca, profissionais,
clínica e casos devem ter origem e direitos documentados.
