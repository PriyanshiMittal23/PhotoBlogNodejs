const express =  require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed.js');
const pictureRoutes = require('./routes/pictureRoutes.js');
const showRoutes = require("./routes/showRoutes.js");

// seedDB();

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

//  connect returns a promise
mongoose.connect('mongodb://127.0.0.1:27017/aloo') // agr db h to connect kr dega nhi to db create kr dega
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log("connection error",err)});

app.use(pictureRoutes);
app.use(showRoutes);

let PORT = 8080;
app.listen(PORT, ()=>{
    console.log("Server Connected at port");
})