import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from '@sequelize/core';
import bcrypt from 'bcrypt';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table, BeforeCreate } from '@sequelize/core/decorators-legacy';

@Table({
  underscored: true,
  tableName: 'users'
})
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare firstName: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare lastName: string | null;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare username: string | null;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password: string | null;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare mobilePhone: string | null;

  //TODO: BeforeCreate: Check if hashing when saved
  @BeforeCreate() 
  static async hashPassword(instance: User) {
    if (instance.changed('password') && instance.password !== null) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(instance.password, saltRounds);
      instance.password = hashedPassword;
    }
  }
}

export default User;
