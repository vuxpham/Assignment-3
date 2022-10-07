const express = require('express');
const path = require('path');

const usersRoutes = require('./routes/users');
const mainRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.use(usersRoutes);

app.listen(3000);