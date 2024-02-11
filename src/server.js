import express from "express";
import cors from "cors";
import db from './config/sql.js';

const app = express();
const port = process.env.PORT || 5200;

app.use(cors());

//connection to the db
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(-1); 
  });

//routes & middleware
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server Running on Port: http://localhost:${port}`);
});
