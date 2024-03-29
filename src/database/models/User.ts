import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core';
import bcrypt from 'bcrypt';
import {
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Table,
  BeforeCreate,
  DeletedAt,
  BeforeUpdate,
  Unique
} from '@sequelize/core/decorators-legacy';

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
  declare lastName: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  declare username: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare email: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare phone: string;

  // Soft delete
  @DeletedAt
  declare deletedAt: Date | null;

  // TODO: Association belongsToMany Competitions

  @BeforeCreate()
  static async beforeCreateHook(instance: User) {
    await User.hashPassword(instance);
  }
  

  @BeforeUpdate()
  static async beforeUpdateHook(instance: User) {
    await User.hashPassword(instance);
  }

  static async hashPassword(instance: User) {
    if (instance.changed('password') && instance.password !== null) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(instance.password, saltRounds);
      instance.password = hashedPassword;
      console.log(`instance password: ${instance.password}`)
    }
  }
  
}

export default User;
