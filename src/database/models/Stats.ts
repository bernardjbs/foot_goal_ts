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
    tableName: 'stats'
  })
  class Stats extends Model<InferAttributes<Stats>, InferCreationAttributes<Stats>> {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<number>;
  
    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare matchId: number;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare statsFor: string; // home or away
  
    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare score: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare xg: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare possession: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare shots: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare shotsOnTarget: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare shotsOffTarget: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare saves: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare corners: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare offsides: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare throwIns: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare freeKicks: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare tackles: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare fouls: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare yellowCards: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare redCards: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare passes: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare attacks: number | null;

    @Attribute(DataTypes.INTEGER)
    @NotNull
    declare dangerousAttacks: number | null;
  }
  
  export default Stats;
