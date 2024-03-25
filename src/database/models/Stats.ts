import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core';
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

  @Attribute(DataTypes.STRING)
  @NotNull
  declare matchId: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare statsFor: string; // home or away

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare score: number | null;

  @Attribute(DataTypes.FLOAT)
  declare xg: number | null;

  @Attribute(DataTypes.INTEGER)
  declare possession: number | null;

  @Attribute(DataTypes.INTEGER)
  declare shots: number | null;

  @Attribute(DataTypes.INTEGER)
  declare shotsOnTarget: number | null;

  @Attribute(DataTypes.INTEGER)
  declare shotsOffTarget: number | null;

  @Attribute(DataTypes.INTEGER)
  declare saves: number | null;

  @Attribute(DataTypes.INTEGER)
  declare corners: number | null;

  @Attribute(DataTypes.INTEGER)
  declare offsides: number | null;

  @Attribute(DataTypes.INTEGER)
  declare throwIns: number | null;

  @Attribute(DataTypes.INTEGER)
  declare freeKicks: number | null;

  @Attribute(DataTypes.INTEGER)
  declare tackles: number | null;

  @Attribute(DataTypes.INTEGER)
  declare fouls: number | null;

  @Attribute(DataTypes.INTEGER)
  declare yellowCards: number | null;

  @Attribute(DataTypes.INTEGER)
  declare redCards: number | null;

  @Attribute(DataTypes.INTEGER)
  declare passes: number | null;

  @Attribute(DataTypes.INTEGER)
  declare passesComplete: number | null;

  @Attribute(DataTypes.INTEGER)
  declare attacks: number | null;

  @Attribute(DataTypes.INTEGER)
  declare dangerousAttacks: number | null;

  @Attribute(DataTypes.INTEGER)
  declare clearance: number | null;

  @Attribute(DataTypes.INTEGER)
  declare crossesComplete: number | null;

  @Attribute(DataTypes.INTEGER)
  declare interceptions: number | null;
}

export default Stats;
