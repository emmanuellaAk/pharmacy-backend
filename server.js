const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();
const admin_routes = require("./src/routes/admin_routes");

const db = require("./src/models");

const port = process.env.PORT;



const app = express();
app.use(bodyParser.json());

app.use('/api/admin', admin_routes); 

db.sequelize.sync().then(() => {
    console.log('Database synchronized');
}).catch(err => {
    console.error('Error synchronizing database:', err);
});
app.listen(port, () => {
    console.log(`Server has been started on localhost:${port}`);
});