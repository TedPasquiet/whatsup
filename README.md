This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Etape pas à pas pour construction

# whatsup

Site de reservation d''évènement stack MERN / TypeScript, TailWind, Stripe

1. npm create-next-app@latest
   Installation TypeScript
   Tailwind CSS
   App Router

Refus de ESLint et src/ directory et customisation import alias

2. npm shadcn-ui@latest init
   Choisir style
   Utilisation de variable CSS pour couleur
   => Ensuite se rendre sur shad et choisir composant
   => Liste composants présent

   - npx shadcn-ui@latest add sheet
   - npx shadcn-ui@latest add separator


3. npm install uploadthing @uploadthing/react

Extension VS utile:
-> Tailwind CSS IntelliSense
-> Inline Fold

4. npm install @clerk/nextjs
   Nécéssité de créer un compte et personnaliser l'appli sur clerck

5. npm install mongoose mongodb   