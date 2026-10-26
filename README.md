# 100+ Planilhas de Exercícios para Fisioterapia

Publicação: https://planilhas-fisio.pages.dev/

Esta branch mantém a página de planilhas de R$10 separada do aplicativo Fisio Express na main.

## Publicar
Atualizações nesta branch acionam .github/workflows/publish.yml. O destino é o projeto Cloudflare Pages existente planilhas-fisio. Não renomear esse projeto nem alterar o projeto fisio-express.

Falta configurar o segredo CLOUDFLARE_PLANILHAS_API_TOKEN nas configurações do GitHub Actions. A credencial deve possuir Account > Cloudflare Pages > Edit para a conta livrospdf. Nunca gravar seu valor em arquivos, commits ou mensagens.

## Conteúdo
- index.html: título, metadados e Meta Pixel 940829541718246 (PageView).
- assets/index-checkout-perfectpay.js: conteúdo e checkout https://go.perfectpay.com.br/PPU38CQHAKP.
- assets e imagens: arquivos estáticos da página.

Os arquivos são a distribuição estática recebida. Para mudanças pontuais, preserve o restante da distribuição. A página não é o aplicativo de prescrição do Fisio Express.
