const express = require('express');
const path = require('path');
// const exphbs = require('express-handlebars');
const { engine } = require("express-handlebars");
const logger = require ('./middleware/logger');
const members = require('./Members')

const { title } = require('process');




const app = express();

// handlebars middleware
app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
// Homepage Route
app.get('/', (req, res)=> res.render('index',{
    title:"Member App" ,
    members     
}));
// init middleware
// app.use(logger);
// Body Parser Middleware
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/', (req, res) => res.render('index',{
    title:"Member App" ,
    // members     
}));



// app.get('/',(req,res) => {
//     // res.send("hello world!");
//     res.sendFile(path.join(__dirname, 'public','index.html'));
// });
// OR
/** Set static Folder */
app.use(express.static(path.join(__dirname, 'public')));
// members API Routes
app.use('/api/members', require('./routes/api/members'));
const PORT = process.env.PORT || 5006;
app.listen(PORT, () => console.log (`Server is running on ${PORT}`));