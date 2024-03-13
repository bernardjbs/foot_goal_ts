import { DataTypes } from '@sequelize/core';
import { Migration } from '@database/models/index.js';


export const up: Migration = async({ context: queryInterface }) => {
  await queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  })
}

export const down: Migration = async ({ context: queryInterface}) => { 
  await queryInterface.dropTable('users')
}
