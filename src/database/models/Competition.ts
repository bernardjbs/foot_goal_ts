import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table, HasMany } from '@sequelize/core/decorators-legacy';
import FootMatch from './FootMatch.js';
import { NonAttribute } from 'sequelize';

@Table({
  underscored: true,
  tableName: 'competitions'
})
class Competition extends Model<InferAttributes<Competition>, InferCreationAttributes<Competition>> {
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

  @HasMany(() => FootMatch, /* foreign key */ 'competitionId')
  declare footMatches?: NonAttribute<FootMatch[]>;
}

export default Competition;
