# Contexto do Fisio Express

## Repositório principal

O projeto agora é mantido em https://github.com/gabrielcaetano963-ui/fisio-express, sob controle da conta gabrielcaetano963-ui. A branch main incorpora a biblioteca atualizada, os planos e a explicação em três passos. Use este repositório como destino das próximas alterações.

Aplicativo em produção: https://fisio-express.pages.dev/

Atualizado em 19/10/2026, após a versão de código `3e1e22d`. A publicação atual usa Cloudflare Pages, projeto `fisio-express`. RawGitHack e suas branches são históricos e não são mais o destino de anúncios nem a hospedagem principal.

A conexão GitHub do Codex deve estar autenticada como Gabriel para gravar alterações nesta conta. A cópia do repositório não muda automaticamente a conta do conector.

## Objetivo

Transformar o aplicativo existente em uma ferramenta profissional em português: encontrar exercícios, criar exercícios próprios e gerar orientações individualizadas em PDF. Preservar a identidade em azul-escuro e verde e o fluxo biblioteca → personalização → PDF.

A última decisão do proprietário é usar **somente português**. Não investir em versões em inglês ou espanhol sem nova solicitação.

## Planos definidos

Plus mensal: R$ 19,90. Plus anual: R$ 147, cobrados por 12 meses. Economia anual: R$ 91,80 (38,4%) em relação a 12 mensalidades. Valores e links ficam centralizados em `src/data/plans.ts`.

A interface apresenta o Plano Free e uma janela com os planos. O proprietário pediu o endereço `https://go.centerpag.com/PPU38CQH3TQ` nos dois planos; ambos estão cadastrados em `src/data/plans.ts`. Na conferência de 19/10/2026, o checkout mostrou um guia em espanhol por US$ 5,00, sem escolha visível de período. `checkoutVerified` permanece `false` e os botões pagos ficam indisponíveis até corrigir e verificar produto, moeda e períodos. O link antigo de US$ 9 do material em PDF também não serve como checkout destes planos.

Login, banco na nuvem, confirmação de pagamento e liberação automática ainda não foram implementados. IndexedDB é armazenamento local. Não marcar um visitante como assinante a partir de parâmetros da URL ou de um sinalizador local. A limitação do PDF gratuito à primeira página e uma segunda página de oferta foi discutida, mas ainda não foi aplicada: o fluxo de PDF existente permanece disponível enquanto a contratação está em preparação.

## Apresentação da biblioteca gratuita

A interface abre em Cervical e mostra apenas regiões do corpo, sem filtro Todos, contagens de catálogo, contagens nas regiões ou numeração nos cards. Cada região apresenta seus três primeiros exercícios como prévia fixa; a busca pesquisa essa prévia, sem liberar outros registros. No final da lista, uma chamada Assinar plano Plus abre a janela dos planos. O catálogo fonte completo é preservado e os exercícios próprios permanecem disponíveis na sua área.

Essa prévia é uma limitação de apresentação no aplicativo estático. Não é controle de autorização: o código e os dados completos continuam públicos. A proteção real do conteúdo e a liberação para assinantes dependem de login, backend e validação de pagamento. Não tratar o indicador Plano Free como autenticação. Os checkouts continuam pendentes de correção/verificação.

## Como funciona na tela inicial

Antes da prévia da ficha, a interface apresenta três passos: Encontre o exercício, Monte sua ficha e Baixe o PDF. Os cartões aparecem lado a lado no computador e empilhados no celular, com textos curtos e ícones. A prévia ilustrada aparece em seguida, também no celular, com a chamada Veja como sua ficha vai ficar. O fluxo de seleção, personalização e geração do PDF permanece o mesmo.

## Fonte do catálogo

`src/data/library.json` é a fonte única da biblioteca publicada. Contém os 100 exercícios trabalhados anteriormente neste projeto, adaptados para português, com instruções, equipamentos e orientações adicionais. Os identificadores `library-001` a `library-100` correspondem às ilustrações `public/exercises/001.jpg` a `100.jpg`.

As imagens são as ilustrações produzidas no projeto, comprimidas para 640 × 640 pixels. Não substituir uma imagem por uma pose genérica: a ficha deve usar a imagem do exercício selecionado. A correspondência editorial foi preservada; isso não constitui uma revisão clínica independente.

Os materiais anteriores estavam em `outputs/100-exercicios-ilustrados-ingles.pdf`, `outputs/100-exercicios-ilustrados-espanhol.pdf`, `work/exercises.tsv` e `outputs/100-imagens-exercicios/` no computador de origem. Não é necessário ter esses arquivos para executar este repositório: os textos e imagens usados pelo aplicativo estão versionados aqui.

Não acrescentar dosagens automáticas, promessas de resultado, qualificações pessoais ou endossos institucionais sem evidências. Os campos de prescrição começam vazios.

## Dados e limites atuais

- Biblioteca padrão: JSON estático versionado.
- Meus exercícios: IndexedDB `fisio-express`, object store `custom-exercises`, versão 1.
- Backup: JSON com `format: fisio-express-exercises`, `version: 1`, lista `exercises`. Inclui imagens incorporadas.
- Importação valida todos os registros antes de gravar; IDs existentes são preservados, sem sobrescrita. Para substituir uma versão editada em outro aparelho, exclua a versão antiga após fazer backup e importe novamente.
- Fotos: JPEG, PNG ou WebP de até 5 MB; redução local até 768 pixels, JPEG com qualidade 80%.
- Imagens recebidas por backup: apenas data URLs de imagem raster; sem SVG ou URLs externas.
- Identificação e ficha atual: memória da sessão, sem persistência ou envio a servidor.
- Sem conta, cobrança, autenticação, sincronização em nuvem ou IA remota. Busca é textual; não anunciar inteligência clínica automatizada.
- GitHub guarda o projeto, não o estado dos navegadores. Backup permite transportar exercícios; sincronização automática exige trabalho adicional com contas e banco de dados.

## Mapa técnico

- `src/routes/index.tsx`: interface e fluxo da ficha.
- `src/data/exercises.ts`: tipos, categorias e busca.
- `src/data/library.json`: 100 registros em português.
- `src/components/custom-exercise-dialog.tsx`: formulário acessível de cadastro e edição.
- `src/lib/custom-exercises.ts`: validação, importação, IndexedDB e preparação da imagem.
- `src/lib/exercise-pdf.ts`: PDF local com imagens reais e paginação sem truncar instruções.
- `preview/vite.config.ts`: distribuição estática com base `/`, adequada à raiz do domínio, e imagens públicas.
- `public/meta-pixel.js`: Pixel da Meta e preferências de medição.
- `public/privacidade.html`, `public/sobre.html`: páginas de privacidade e informações do projeto.

## Estado visual e Pixel

FAQ em português após a biblioteca; degradê azul e verde na abertura, no bloco Plus e no FAQ. Preservar os três passos, os cards e o fluxo atual.

Meta Pixel `940829541718246`, evento `PageView`. Por solicitação expressa do proprietário, carrega automaticamente na abertura, sem aviso ou janela automática. Preferências aparecem somente pelo botão no rodapé; uma recusa já salva no navegador é respeitada. Eventos automáticos e correspondência por formulário estão desativados na integração. Não adicionar nomes de pacientes, prescrições ou exercícios a parâmetros de eventos. O carregamento do SDK/configuração foi confirmado; recebimento no Gerenciador de Eventos da Meta não foi verificado independentemente.

## Resultados da auditoria funcional e de marketing

Verificado no site em 19/10/2026: busca por região e sem acentos, seleção de três exercícios de Ombro, remoção/reordenação, personalização, geração e download de um PDF real de três páginas A4; biblioteca mobile sem overflow em 390 px. Cinco testes de catálogo/backup passaram.

A busca respeita a região ativa; não troca para Ombro apenas porque a palavra foi digitada. Trocar de região limpa a pesquisa. A pré-visualização PDF embutida ficou vazia no navegador da auditoria; o arquivo baixado foi validado e renderizado corretamente. Envio concluído pelo WhatsApp não foi comprovado: há compartilhamento nativo/fallback implementado, mas depende de navegador, seleção de destinatário e eventual anexo manual.

Não existe comprovação documentada de revisão clínica por profissional habilitado. Não inventar autor, credenciais, instituição, eficácia clínica ou economia de tempo medida. A promessa observável é montar orientações ilustradas e baixar um PDF, não prescrever tratamento automaticamente. As funcionalidades de PDF e exercícios próprios já estão disponíveis no Free; não apresentar a assinatura Plus como operacional.

## Publicação e continuidade

Repositório: https://github.com/gabrielcaetano963-ui/fisio-express

A fonte atual está na `main`. As branches `fisio-express-pt` e `gh-pages` preservam distribuições antigas; não usá-las como fonte da produção. A hospedagem atual é Cloudflare Pages em https://fisio-express.pages.dev/, com upload direto no projeto `fisio-express` da conta Cloudflare do proprietário. Não há integração automática GitHub → Cloudflare configurada: um commit no GitHub não atualiza sozinho o site. Desenvolva em uma branch de trabalho e revise antes de atualizar a publicação. Não faça force push nem altere o histórico publicado: o projeto de origem possui integração Lovable. Conectar esta cópia à plataforma exige configuração própria.

Build estático: `bun run build:preview`, saída `dist-preview`. Para publicar, envie o conteúdo completo dessa pasta (ou ZIP com index.html na raiz) como implantação de produção no mesmo projeto Cloudflare Pages. Isso preserva o endereço principal. Não substituir pelo build TanStack/Nitro nem criar outro projeto a cada edição. Acesso à Cloudflare deve ocorrer com a conta do proprietário; não guardar tokens no código ou em prompts.

## Preparar um ambiente de desenvolvimento na nuvem

Leia `AGENTS.md` e este documento antes de trabalhar. Use somente o repositório `gabrielcaetano963-ui/fisio-express`. A conta antiga `suportesaudeacimadetudo-del` não é o destino autorizado para alterações. Uma conexão antiga não muda automaticamente para a conta Gabriel.

O projeto usa Node.js moderno e Bun 1.3.1, com `bun.lock`. Instalação: `bun install --frozen-lockfile`. Verificações: `bun run typecheck`, `bun run check:library` e `bun run build:preview`. Caso os atalhos de execução não resolvam no ambiente, os equivalentes já usados são `node node_modules/typescript/bin/tsc --noEmit`, `node --experimental-strip-types --test tests/library.test.ts` e `node node_modules/vite/bin/vite.js build --config preview/vite.config.ts`. A geração estática não requer chave de API, banco de dados ou segredos.

O objetivo é continuar pelo Chrome, usando um ambiente de nuvem que clone o GitHub e execute os comandos remotamente. Isso é diferente de depender deste computador ligado. A conversa existente chamada “Fisio Express — continuidade na nuvem” tem histórico antigo e precisa receber este estado atualizado antes de aplicar alterações. O chat local original não é transferido integralmente por um resumo; anexos antigos e dados IndexedDB também não são sincronizados por isso.

Para continuar em outro computador, abra/clone este repositório e forneça este documento ao assistente. Faça backup dos exercícios no aplicativo antes de trocar de aparelho. O histórico desta conversa permanece separado do repositório.
