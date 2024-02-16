# Typescript setup in VSCode
source : https://www.youtube.com/watch?v=4zdBk6wisxc

## Initialize TS
```
$ npm init 
$ npm i -g typescript
$ tsc  --init --sourcemap --rootDir src --outDir dist
$ npm i --save-dev typescript
```
## Build task (Similar to tsc watch)
- VS Code command list ctrl+shift+p
- Type >Tasks: Configure Default Build Task
- Select tsc:watch - tsconfig.json
- .vscode/task.json will be created
- Open task.json
- Open command list again run Tasks: Run Build Task
- Terminal is opened to watch tsc