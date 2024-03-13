import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from '@sequelize/core';

import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table } from '@sequelize/core/decorators-legacy';

@Table({ schema: 'foot_goal_testing' })
class UserCore extends Model<InferAttributes<UserCore>, InferCreationAttributes<UserCore>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare firstName: string;

  @Attribute(DataTypes.STRING)
  declare lastName: string | null;
}

export default UserCore;
