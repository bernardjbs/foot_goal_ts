import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      match_id: {
          allowNull: false, 
          type: DataTypes.STRING,
      }, 
      competition_id: {
          allowNull: false, 
          type: DataTypes.INTEGER,
      }, 
      round: {
          allowNull: false,
          type: DataTypes.INTEGER,
      }, 
      match_starts_at: {
          allowNull: false, 
          type: DataTypes.DATE,
      }, 
      home_team: {
          allowNull: false, 
          type: DataTypes.STRING,
      }, 
      away_team: {
          allowNull: false, 
          type: DataTypes.STRING,
      }, 
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface:QueryInterface, Sequelize:any) {
    await queryInterface.dropTable('Matches');
  }
};