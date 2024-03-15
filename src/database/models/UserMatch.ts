import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table } from '@sequelize/core/decorators-legacy';

@Table({
  underscored: true,
  tableName: 'user_matches'
})
class UserMatch extends Model<InferAttributes<UserMatch>, InferCreationAttributes<UserMatch>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare match_id: number;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare user_id: number;
}

export default UserMatch;