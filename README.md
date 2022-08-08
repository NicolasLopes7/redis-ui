# ⚡ Redis UI
The first open-source project to create an awesome and accessible UI for Redis as a native desktop application. 🚀✨🦄


## 🚀 How to develop locally

### First steps
> **Warning**
> 
> Make it sure you have `docker`, `docker-compose` and a package manager - such as yarn, npm or pnpm - installed on your computer.

> **Note**
> 
> Hover the items of the list below to get more detailed description

- Clone this repo and install all dependencies:
```sh
> git clone https://github.com/NicolasLopes7/redis-ui/
> cd redis-ui
> # install the dependencies (yarn, npm i, pnpm i)
```
- Initialize the Redis through docker-compose.
```sh
> docker-compose up --build -d
```
- Run the seed script to populate Redis (Optional step):
```sh
> # run the script with you package manager
> pnpm redis:seed
```
- Run the project in DEV mode
```sh
> pnpm dev
```

> **Note**
> 
> If you want to build, just you can try one of these commands (according your package manager).
> `yarn build` or `npm run build` or `pnpm build`
