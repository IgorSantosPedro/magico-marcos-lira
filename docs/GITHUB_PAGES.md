# Publicação no GitHub Pages

Este projeto publica automaticamente a pasta `dist/` pelo GitHub Actions.

## 1. Ativar o GitHub Pages

1. Abra o repositório no GitHub.
2. Entre em **Settings > Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
4. Abra a aba **Actions** e acompanhe o fluxo **Publicar no GitHub Pages**.
5. Após a primeira execução, o endereço provisório será `https://igorsantospedro.github.io/magico-marcos/`.

## 2. Preparar o domínio personalizado

O projeto contém `docs/CNAME.example` com `magicomarcos.com`. Ele fica fora da pasta publicada para que o endereço provisório continue funcionando enquanto o domínio ainda não possui DNS. Antes de alterar o DNS, registre o domínio e, por segurança, verifique-o em **GitHub Settings > Pages > Add a domain**.

No painel DNS do provedor do domínio, crie estes registros para o domínio principal:

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `igorsantospedro.github.io` |

Não use registros DNS curinga (`*`). Remova registros A, AAAA, ALIAS, ANAME ou CNAME conflitantes no mesmo nome.

Depois de criar os registros DNS, copie `docs/CNAME.example` para `dist/CNAME`, envie a alteração para a branch `main` e, em **Settings > Pages > Custom domain**, informe `magicomarcos.com`. Salve e aguarde a validação. Alterações DNS podem levar até 24 horas para se propagar.

## 3. Ativar HTTPS

Quando o certificado estiver disponível em **Settings > Pages**, marque **Enforce HTTPS**. O GitHub redirecionará acessos HTTP para HTTPS.

## 4. Prévia personalizada em WhatsApp e redes sociais

O `index.html` contém metadados Open Graph e Twitter Card apontando inicialmente para:

- URL: `https://igorsantospedro.github.io/magico-marcos/`
- imagem: `https://igorsantospedro.github.io/magico-marcos/assets/social-preview-marcos.png`
- título: `Mágico Marcos Lira | Magia, circo e diversão para eventos`

Depois que `magicomarcos.com` estiver ativo, substitua o endereço provisório pelo domínio personalizado em `dist/index.html`, `dist/robots.txt` e `dist/sitemap.xml`.

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
