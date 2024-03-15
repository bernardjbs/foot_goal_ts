# Foot Goal TS

# Sequelize

A different `tsconfig.json` in `database` folder for sequelize is configured because of CommonJS and ESM
conflicts.

## Generate Model with Migration
- Make sure to generate the migration according to the model relationships. For example a user has many tasks. The User needs to migrate before Task. 

```
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string

$ npx sequelize-cli model:generate --name Todos --attributes title:string,isDone:boolean
```

## DB create and migrate

```
npm run db:create
npm run db:migrate
```

After migration, convert migration and model files to TS

## Undo migration command

```
npx sequelize db:migrate:undo
```

## Resources

- [Sequelize CLI & Typescript](https://dev.to/maliksamad/sequelize-cli-typescript-4ff0)
- [Sequelize CLI & Typescript - Example](https://github.com/MichalZalecki/sequelize-with-typescript-example)

https://www.youtube.com/watch?v=MEl2R7mEAP8