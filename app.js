'use strict';
import express  from 'express';
//import session from 'express-session'
import db from './utils/db';
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send("bienvenu sur jelastic, tout a bien fonctionné");
})
db.on('connected', () => {
    app.listen(port, () => { console.log(`app listen on port ${port}`); });
  });