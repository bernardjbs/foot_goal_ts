import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

interface MatchAttributes {
  id?: number;
  match_id: string;
  competition_id: number;
  round: number;
  match_starts_at: Date;
  home_team: string;
  away_team: string;
  updatedAt?: Date;
  createdAt?: Date;
}

class Match extends Model<MatchAttributes> implements MatchAttributes {
  id!: number;
  match_id!: string;
  competition_id!: number;
  round!: number;
  match_starts_at!: Date;
  home_team!: string;
  away_team!: string;

  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

Match.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER
    },
    match_id: {
      allowNull: false,
      type: DataTypes.STRING
    },
    competition_id: {
      allowNull: false,
      type: DataTypes.NUMBER
    },
    round: {
      allowNull: false,
      type: DataTypes.NUMBER
    },
    match_starts_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    home_team: {
      allowNull: false,
      type: DataTypes.STRING
    },
    away_team: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    sequelize: connection,
    modelName: 'Match'
  }
);

export default Match;
