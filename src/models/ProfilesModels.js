import { Sequelize, DataTypes } from 'sequelize';

const Profiles = Sequelize.define('profiles', {
    profile_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'profiles'
})

export default Profiles