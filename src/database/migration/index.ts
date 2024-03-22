import sequelizeConnection from "@database/connection.js";

const migrate = async (migrate: string | boolean| null) => {
    if (migrate == 'fresh') {
        await sequelizeConnection.sync({ force: true });
        console.log('\n----- FRESH MIGRATION DONE -----\n');
    } else {
        await sequelizeConnection.sync();
        console.log('\n----- MIGRATION DONE -----\n');
    }
  };
  
export default migrate