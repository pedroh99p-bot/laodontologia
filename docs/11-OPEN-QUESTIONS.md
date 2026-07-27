# Questões em aberto

Última atualização: 2026-07-27

Nenhum item abaixo deve ser inferido a partir dos screenshots.

## Prioridade alta — bloqueia publicação/conversão

1. Qual é o domínio oficial e a URL canônica de produção?
2. O WhatsApp informado recebe agendamentos? Qual mensagem inicial aprovada?
3. Quais tratamentos são efetivamente oferecidos?
4. Os profissionais possuem especialidades registradas? Quais e com qual fonte?
5. Quais biografias e credenciais podem ser publicadas?
6. Qual registro formal comprova autorização e direitos de uso dos cinco
   arquivos recebidos?
7. Existe processo formal para consentimento de pacientes/casos antes e depois?
8. Qual endpoint e quais campos serão usados no formulário?
9. Quem é o controlador e qual texto/política de privacidade foi aprovado?
10. Qual link oficial de rota/Place ID deve ser usado?

## Prioridade média — conteúdo e confiança

11. Qual é o horário de atendimento?
12. Qual é o fluxo real desde o primeiro contato?
13. Há acessibilidade física confirmada?
14. Há estacionamento? Se sim, em quais condições?
15. Há convênios? Não publicar até resposta formal.
16. Quais formas/condições de pagamento podem ser mencionadas?
17. Existem avaliações/depoimentos autorizados, com fonte?
18. Quais diferenciais possuem evidência objetiva?
19. Quais ambientes/equipamentos podem ser fotografados e descritos?
20. A frase “Estética • Saúde • Confiança” é assinatura oficial aprovada?

## Marca e mídia

21. Fornecer logo mestre em SVG e confirmar variantes aprovadas; o favicon
    recebido não substitui o vetor.
22. Definir fontes licenciadas/aprovadas e respectivos arquivos/pesos.
23. Confirmar se novos assets também usarão o cloud name `dhbrxzt5a`.
24. Aprovar os alts, crops e pontos focais documentados para hero e retratos.
25. Fornecer fotos reais de recepção, consultório, detalhes e acesso ao prédio,
    se essas seções forem aprovadas.

## Recebido nesta etapa

- Cloudinary com hero, favicon, retratos de Amanda e Lucas e Open Graph.
- Dimensões e conteúdo visual dos cinco arquivos verificados.
- Chaves, URLs e `public_id`s registrados em `src/config/media.ts`.

## Marketing e mensuração

26. IDs de GTM, GA4 e Google Ads e responsável pela configuração.
27. Consent mode/CMP e base legal aprovados.
28. Definição operacional de `generate_lead`.
29. Campanhas, intenções, palavras-chave e negativas.
30. Há landing pages de tratamento priorizadas e conteúdo clínico revisado?

## Estado após a Fase 02B

- O Preview visual público está disponível em
  `https://laodontologia-qply6crb1-pedroh99p-5348s-projects.vercel.app`.
- Não há deploy de produção nem domínio/canonical definidos.
- O logo usado na interface continua tipográfico e provisório; o SVG mestre
  ainda é necessário.
- O bloco de localização não publica mapa ou rota até que o Place ID/link
  oficial seja confirmado.
- A implementação de analytics nesta fase é somente um adaptador local que
  emite eventos tipados; IDs, consentimento e destinos de produção continuam
  pendentes.
