# MF Design e Modelagem 3D

Site institucional desenvolvido com Next.js e pronto para publicação na
Vercel.

## Desenvolvimento local

Requer Node.js 22 ou mais recente.

```bash
npm ci
npm run dev
```

No Windows PowerShell, caso a política de execução bloqueie `npm.ps1`, use o
Prompt de Comando (`cmd`) para executar os comandos acima. Como alternativa,
permaneça no PowerShell e use `npm.cmd ci` e `npm.cmd run dev`.

Para validar a versão de produção:

```bash
npm run lint
npm run build
```

## Publicação na Vercel

Importe o repositório na Vercel. O framework Next.js e os comandos de build
são detectados automaticamente, portanto não é necessário preencher
configurações adicionais.
