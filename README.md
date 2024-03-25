# Foot Goal TS

### Fresh Migration
```
$ node index.js --migrate:fresh
```

### Fresh Migration & Seed
```
$ node index.js --migrate:fresh --seed
```

## Seed Only
```
$ node index.js --seed
```

## Connect Session Sequelize
Import the correct Sequelize version in ```node_modules/connect-session-sequelize/index.d.ts```: 
```js
import { Sequelize, SyncOptions } from '@sequelize/core';
```