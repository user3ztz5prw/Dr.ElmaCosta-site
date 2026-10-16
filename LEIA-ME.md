# Site da Dra. Elma Costa

Site estático em HTML, CSS e JavaScript, com identidade visual verde-sálvia e bege.

## Arquivos
- `index.html`: conteúdo do site.
- `styles.css`: visual e adaptação para celular/computador.
- `script.js`: menu, formulário e integração com WhatsApp.

## Antes de publicar: configurar o WhatsApp
1. Abra `script.js` em um editor de texto.
2. Na primeira linha de configuração, procure:
   `const WHATSAPP_NUMBER = "55DDNUMEROAQUI";`
3. Substitua o texto dentro das aspas pelo número da Dra. Elma com código do Brasil e DDD, somente números.
   Exemplo fictício: `const WHATSAPP_NUMBER = "5511999999999";`
4. Salve o arquivo. Não publique o número em outros lugares se não quiser deixá-lo exposto no código do site.

## Publicar gratuitamente no GitHub Pages
1. Entre em https://github.com/ e faça login.
2. Crie um repositório novo, por exemplo `site-dra-elma-costa`.
3. Escolha `Public` e crie o repositório.
4. Dentro do repositório, use `Add file` → `Upload files`.
5. Envie `index.html`, `styles.css` e `script.js` (pode enviar também este README).
   Importante: os três arquivos do site devem ficar na raiz do repositório, não dentro de outra pasta.
6. Clique em `Commit changes`.
7. Abra `Settings` → `Pages`.
8. Em `Build and deployment`, selecione `Deploy from a branch`.
9. Em `Branch`, escolha `main` e `/ (root)`, depois clique em `Save`.
10. Aguarde alguns minutos e atualize a página de `Settings → Pages`. O GitHub mostrará o endereço publicado, geralmente no formato `https://SEU-USUARIO.github.io/site-dra-elma-costa/`.

## Personalizar antes de publicar
- Atualize a apresentação profissional e inclua apenas formação e experiência verdadeiras.
- Confirme o texto, o escopo e as condições da mentoria, preço e formas de pagamento.
- Ajuste a lista de horários no formulário para refletir a disponibilidade real.
- Este formulário apenas abre uma mensagem no WhatsApp. Ele NÃO verifica uma agenda real nem bloqueia automaticamente horários já ocupados. Confirme cada horário antes de considerar uma consulta reservada.
- O site não processa pagamentos e não salva formulários em um banco de dados.
- Evite publicar dados pessoais de pacientes. Se adicionar ferramentas de agendamento ou analytics, revise privacidade e conformidade com a LGPD.
- A imagem visual principal é feita com CSS; o Google Fonts requer conexão à internet. O site continua funcional sem a fonte externa.
