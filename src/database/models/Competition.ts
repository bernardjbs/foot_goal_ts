import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional
  } from '@sequelize/core';
  import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table } from '@sequelize/core/decorators-legacy';
  
  @Table({
    underscored: true,
    tableName: 'competitions'
  })
  class Comnpetition extends Model<InferAttributes<Comnpetition>, InferCreationAttributes<Comnpetition>> {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<number>;
  
    @Attribute(DataTypes.STRING)
    @NotNull
    declare country: string;
  
    @Attribute(DataTypes.STRING)
    @NotNull
    declare name: string;
  }
  
  export default Comnpetition;
