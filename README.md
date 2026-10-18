# FisioExercícios

MVP de uma ferramenta para fisioterapeutas encontrarem exercícios, montarem orientações personalizadas e gerarem uma ficha profissional em PDF.

O fluxo principal é **buscar → selecionar → personalizar → gerar → compartilhar**. Os dados do profissional e do paciente permanecem apenas na sessão do navegador. A geração do PDF também acontece localmente.

## Desenvolvimento

O projeto usa React, TypeScript, TanStack Start, Vite e Tailwind CSS. O lockfile é do Bun; se o executável não estiver instalado, ele pode ser executado com `npx`:

```sh
npm_config_cache=/tmp/fisio-npm-cache npx --yes bun@1.3.1 install --frozen-lockfile
npm_config_cache=/tmp/fisio-npm-cache npx --yes bun@1.3.1 run dev --host 0.0.0.0
```

O servidor local usa a porta informada pelo Vite. Neste ambiente, ela é `8080`.

Validações disponíveis:

```sh
npm_config_cache=/tmp/fisio-npm-cache npx --yes bun@1.3.1 run build
npm_config_cache=/tmp/fisio-npm-cache npx --yes bun@1.3.1 run lint
```

O build já usa o preset Cloudflare configurado pelo projeto Lovable/TanStack.

## Conteúdo da demonstração

Os exercícios em [`src/data/exercises.ts`](src/data/exercises.ts) são exemplos identificados como demonstração e precisam de revisão clínica. Quando o PDF original estiver disponível, substitua os textos e ilustrações pelos conteúdos aprovados sem inventar prescrições ou contraindicações.

Cada exercício tem identificador, nome, região, categoria, objetivo, resumo, instruções, equipamento, observações, palavras-chave e uma referência visual. Essa estrutura pode ser trocada por uma API ou banco de dados sem alterar o fluxo da interface.

## PDF e WhatsApp

O PDF A4 é gerado pelo `jsPDF` no navegador. Em dispositivos compatíveis, o app usa a API nativa de compartilhamento para enviar o arquivo. Nos demais navegadores, baixa o PDF e abre o WhatsApp com uma mensagem pronta para que o usuário anexe o arquivo manualmente.
