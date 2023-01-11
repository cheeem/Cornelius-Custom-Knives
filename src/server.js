//define libraries
const express = require('express');
const cors = require('cors');

//define app
const app = express();

//define port
const port = '23.152.224.23';

//set cors origin
app.use(cors({
    origin: 'ui.shedskins.com',
}));

//set app to listen to port
app.listen(port);

