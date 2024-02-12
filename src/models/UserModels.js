import { DataTypes } from 'sequelize';
import db from '../config/sql.js';
import Profiles from './ProfilesModels.js';

const User = db.define('users', {
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  profile_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    references: {
      model: Profiles,
      key: 'profile_id'
    }
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'users'
});

export default User;