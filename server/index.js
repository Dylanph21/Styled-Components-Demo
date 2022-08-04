const express = require('express');
const app = express();
app.use(express.json());


app.use(express.static('client/dist'))


const PORT = 3001;
app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);