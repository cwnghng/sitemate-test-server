# Notes

This repository serves as a boilerplate for my typescript server projects.

# Setting up a fresh project

## Dependencies

Run yarn init

```zsh
yarn init -y
```

Install the following base packages:

```zsh
yarn add express
yarn add -D typescript @types/express ts-node eslint prettier eslint-config-prettier eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Install the extras if needed:

```zsh
yarn add dotenv lodash cookie-parser cors winston
yarn add -D @types/lodash @types/cookie-parser @types/cors nodemon
```
