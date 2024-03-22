import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table, BelongsToMany, HasMany, Unique } from '@sequelize/core/decorators-legacy';
import User from './User.js';
import Stats from './Stats.js';

@Table({
  underscored: true,
  tableName: 'matches'
})
class FootMatch extends Model<InferAttributes<FootMatch>, InferCreationAttributes<FootMatch>> {
  @Attribute(DataTypes.STRING)
  @PrimaryKey
  @Unique
  @NotNull
  declare matchId: string;

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

  @BelongsToMany(() => User, {
    through: 'UserMatch',
  })
  declare userMatch?: NonAttribute<User[]>;

  @HasMany(() => Stats, /* foreign key */ 'matchId')
  declare stats?: NonAttribute<Stats[]>;
}

export default FootMatch;
