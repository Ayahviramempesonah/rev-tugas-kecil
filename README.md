This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## TREE PROJECT

```

.
├── auth.ts
├── GEMINI.md
├── middleware.ts
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── prisma
│   ├── migrations
│   │   ├── 20250725192307_init
│   │   │   └── migration.sql
│   │   ├── 20250727045132_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   │   ├── actions.ts
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...nextauth]
│   │   │           └── route.ts
│   │   ├── components
│   │   │   ├── AuthProvider.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── sign-in.tsx
│   │   │   └── sign-out.tsx
│   │   ├── dashboard
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── lib
│   │   │   ├── prisma.ts
│   │   │   ├── seed.js
│   │   │   └── zod.ts
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── register
│   │       └── page.tsx
│   └── generated
│       └── prisma
│           ├── client.d.ts
│           ├── client.js
│           ├── default.d.ts
│           ├── default.js
│           ├── edge.d.ts
│           ├── edge.js
│           ├── index-browser.js
│           ├── index.d.ts
│           ├── index.js
│           ├── libquery_engine-debian-openssl-1.1.x.so.node
│           ├── package.json
│           ├── runtime
│           │   ├── edge-esm.js
│           │   ├── edge.js
│           │   ├── index-browser.d.ts
│           │   ├── index-browser.js
│           │   ├── library.d.ts
│           │   ├── library.js
│           │   ├── react-native.js
│           │   ├── wasm-compiler-edge.js
│           │   └── wasm-engine-edge.js
│           ├── schema.prisma
│           ├── wasm.d.ts
│           └── wasm.js
└── tsconfig.json
```

# poject ini akan dilakukan dokumentasi untuk pengembangan project selanjutnya

- karna dikejar deadline saya tidak sempat untuk membuat fitur add commentar, karna banyak error, untuk implementasinya ,meskipun bisa dikerjakan tapi waktu sangat mepet, saya mohon maaf , tapi 2 fitur crud terpenuhi

- untuk reviewer jika test CRUD terkadang tidak bisa langsung success karna database jika tidak sedang digunakan akan dalam keadaan tertidur setelah mendeteksi adanya permintaan baru dia akan tertiger dan bangun untuk menjalankan fungsi kembali
