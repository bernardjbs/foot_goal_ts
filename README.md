# Foot Goal TS

# Sequelize 
## Generate Model with Migration
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