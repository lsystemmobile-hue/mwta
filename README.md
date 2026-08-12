# MWTA Segurança

Site institucional da MWTA, desenvolvido com Next.js e pronto para publicação
na Vercel.

## Desenvolvimento

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

## Validação de produção

```bash
npm test
npm run lint
```

## Publicação na Vercel

Importe este repositório na Vercel com estas opções:

- Framework Preset: `Next.js`
- Root Directory: `./`
- Build Command: padrão (`npm run build`)
- Output Directory: padrão do Next.js (não preencher)

O arquivo `vercel.json` também fixa a detecção do framework como Next.js. Cada
push no branch `main` poderá gerar uma nova publicação de produção.
