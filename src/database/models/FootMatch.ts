import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table } from '@sequelize/core/decorators-legacy';

@Table({
  underscored: true,
  tableName: 'matches'
})
class FootMatch extends Model<InferAttributes<FootMatch>, InferCreationAttributes<FootMatch>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare matchId: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare competitionId: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare round: number;

  @Attribute(DataTypes.DATE)
  @NotNull
  declare matchStartsAt: Date;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare homeTeam: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare awayTeam: string;
}

export default FootMatch;
