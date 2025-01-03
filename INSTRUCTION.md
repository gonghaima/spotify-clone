# Frontend

## Install vite

npm create vite@latest .

## Install Tailwind

npm install -D tailwindcss postcss autoprefixer
<br/>
npx tailwindcss init -p
<br/>

[Doc](https://tailwindcss.com/docs/guides/vite)

## Setup Shadcn

- Add Tailwind and its configuration
- Edit tsconfig.json file
- Edit tsconfig.app.json file
- Update vite.config.ts
- Run the CLI
```shell
npx shadcn@latest init
```
### Test Shadcn Install
npx shadcn@latest add button
<br/>


<br/>

[Doc](https://ui.shadcn.com/docs/installation/vite)

## Setup Clerk Auth

- Install @clerk/clerk-react
```npm install @clerk/clerk-react```
- Set your environment variables
```VITE_CLERK_PUBLISHABLE_KEY=...```
- Import the Clerk Publishable Key
- Add ClerkProvider to your app
-

[Doc](https://dashboard.clerk.com/apps/app_2pg2Cpsn8h6Ihj0gcenvujcGxh6/instances/ins_2pg2CrENDJlhFlRqEGYK0vGfpaG)

# Backend

## init
npm init -y

## add dependencies
npm i express mongoose dotenv cloudinary cors @clerk/express socket.io

## add shadcn card
npx shadcn@latest add card