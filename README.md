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
#command for create tree structure project #and ignore node_modules and prisma folder
tree -I "node_modules|prisma"
```

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
│   │   ├── catatan
│   │   │   └── page.tsx
│   │   ├── components
│   │   │   ├── AuthProvider.tsx
│   │   │   ├── camera-capture.tsx
│   │   │   ├── CatatanItem.tsx
│   │   │   ├── commentItem.tsx
│   │   │   ├── CommentSection.tsx
│   │   │   ├── CreateStoryForm.tsx
│   │   │   ├── image-upload.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── sign-in.tsx
│   │   │   ├── sign-out.tsx
│   │   │   └── StoryCard.tsx
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
│   │   ├── page.jsx
│   │   ├── register
│   │   │   └── page.tsx
│   │   └── story
│   │       └── [storyId]
│   │           └── page.tsx
│   └── generated
└── tsconfig.json
```

- this project created for submission jabar digital academy
- you can upload file blob create story then save to vercel blob and save other form data to neon database serverless
- commnet post other user click image you can redirect to storyId using dynamic route and add comment anything
- happy enjoy.
