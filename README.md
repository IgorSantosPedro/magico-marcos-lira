# Mágico Marcos Lira

Site institucional one page do artista Marcos Lira, com apresentação do espetáculo, trajetória, depoimentos, galeria e canais de contato.

## Site

- Endereço planejado: [magicomarcos.com](https://magicomarcos.com/)
- Endereço provisório do GitHub Pages: `https://igorsantospedro.github.io/magico-marcos/`
- Vídeo: [Show de Mágica com Marcos Lira](https://youtube.com/shorts/bfRapzZV8uE)

## Estrutura

Os arquivos publicados ficam em `dist/`:

- `index.html`: conteúdo e metadados sociais;
- `styles.css`: identidade visual e responsividade;
- `script.js`: menu, animações e carrossel;
- `assets/`: imagens do site e da prévia de compartilhamento;
- `docs/CNAME.example`: valor do domínio personalizado, pronto para ativação quando o DNS estiver configurado.

## Desenvolvimento local

Não há etapa de compilação nem dependências. Sirva a pasta `dist/` com qualquer servidor HTTP estático. Exemplo:

```powershell
python -m http.server 8080 --directory dist
```

Depois, acesse `http://127.0.0.1:8080/`.

## Publicação

Todo envio para a branch `main` executa o fluxo `.github/workflows/deploy-pages.yml`, que publica automaticamente o conteúdo de `dist/` no GitHub Pages.

As instruções completas para ativação, domínio, DNS, HTTPS e validação estão em [docs/GITHUB_PAGES.md](docs/GITHUB_PAGES.md).

## Contato comercial

- WhatsApp: [(11) 95142-2530](https://wa.me/5511951422530)
- Instagram: [@marcoslira.art](https://www.instagram.com/marcoslira.art/)
- E-mail: [magicomarcoslira@gmail.com](mailto:magicomarcoslira@gmail.com)
