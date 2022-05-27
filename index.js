const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res, next)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;