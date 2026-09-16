# Publicação no GitHub Pages

Este projeto publica automaticamente a pasta `dist/` pelo GitHub Actions.

## 1. Ativar o GitHub Pages

1. Abra o repositório no GitHub.
2. Entre em **Settings > Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
4. Abra a aba **Actions** e acompanhe o fluxo **Publicar no GitHub Pages**.
5. Após a publicação, o site ficará disponível em `https://marcosliramagico.com.br/`.

## 2. Domínio personalizado

O domínio oficial é `marcosliramagico.com.br`. O arquivo `dist/CNAME` garante que o endereço continue associado ao projeto a cada nova publicação. O arquivo `docs/CNAME.example` mantém uma cópia de referência.

No painel DNS do provedor do domínio, crie estes registros para o domínio principal:

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `igorsantospedro.github.io` |

Não use registros DNS curinga (`*`). Remova registros A, AAAA, ALIAS, ANAME ou CNAME conflitantes no mesmo nome.

Em **Settings > Pages > Custom domain**, o valor deve ser `marcosliramagico.com.br`. Caso o DNS seja alterado no futuro, a propagação pode levar até 24 horas.

## 3. Ativar HTTPS

Quando o certificado estiver disponível em **Settings > Pages**, marque **Enforce HTTPS**. O GitHub redirecionará acessos HTTP para HTTPS.

## 4. Prévia personalizada em WhatsApp e redes sociais

O `index.html` contém metadados Open Graph e Twitter Card apontando para:

- URL: `https://marcosliramagico.com.br/`
- imagem: `https://marcosliramagico.com.br/assets/social-preview-marcos.png`
- título: `Mágico Marcos Lira | Magia, circo e diversão para eventos`

Aplicativos podem manter a prévia em cache. Depois da publicação, use o Sharing Debugger do Facebook para solicitar nova leitura e, no WhatsApp, teste enviando o link em uma conversa nova.

## 5. Atualizações futuras

1. Altere os arquivos necessários.
2. Revise o site localmente.
3. Envie as mudanças para a branch `main`.
4. Confirme a conclusão do fluxo na aba **Actions**.

Se o fluxo falhar, abra sua execução e consulte o primeiro passo marcado em vermelho. Verifique principalmente se o Pages está configurado para **GitHub Actions** e se as permissões de Actions estão habilitadas.

## Referências oficiais

- [Fluxos personalizados do GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Domínios personalizados no GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [HTTPS no GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
