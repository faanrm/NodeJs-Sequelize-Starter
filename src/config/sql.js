import Sequelize from 'sequelize';


if (
  !process.env.DB_NAME ||
  !process.env.DB_USERNAME ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_HOST ||
  !process.env.DB_PORT
) {
  console.log('Please set MySQL ENV variables');
  process.exit(-1);
}

const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
