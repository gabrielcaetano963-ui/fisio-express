# Contexto do Fisio Express

## Objetivo

Transformar o aplicativo existente em uma ferramenta profissional em português: encontrar exercícios, criar exercícios próprios e gerar orientações individualizadas em PDF. Preservar a identidade em azul-escuro e verde e o fluxo biblioteca → personalização → PDF.

A última decisão do proprietário é usar **somente português**. Não investir em versões em inglês ou espanhol sem nova solicitação.

## Conteúdo e fontes

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
- `preview/vite.config.ts`: distribuição estática com caminhos relativos e imagens públicas.

## Publicação e continuidade

Repositório: https://github.com/suportesaudeacimadetudo-del/always-one-page

A versão publicada anteriormente está em `gh-pages`. Desenvolva em uma branch de trabalho e revise antes de atualizar a publicação. Não faça force push nem altere o histórico publicado: o projeto tem integração Lovable.

Para continuar em outro computador, abra/clone este repositório e forneça este documento ao assistente. Faça backup dos exercícios no aplicativo antes de trocar de aparelho. O histórico desta conversa permanece separado do repositório.
