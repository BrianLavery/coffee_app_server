const express = require('express');
const customerRoutes = require('./routes/customerRoutes');

const app = express();

customerRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
