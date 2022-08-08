# Redis UI
The first open-source project to create an awesome and accessible UI for Redis as a native desktop application. 🚀✨🦄


## How to run locally

First of all you should clone this repo and install all dependencies:
`yarn` or `npm i` or  `pnpm i`

After that you can initialize the Redis through docker-compose.
`docker-compose up --build -d`

Run the seed script to populate the Redis with some keys and values:
`yarn redis:seed` or `npm run redis:seed` or `pnpm redis:seed`

After that you can finnaly run the project and see the things working!!
`yarn dev` or `npm run dev` or `pnpm i`


> If you want to build, just you can try one of these commands (according your package manager).
> `yarn build` or `npm run build` or `pnpm build`
