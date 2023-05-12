//importing express and using express(app)
const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());
app.use(express.json());


//importing sequelize path
const sequelize=require('./util/database');


//bodyparser helps us to get the request parameters from the frontend.
//the below line imports the bodyparser to our application.
const bodyparser=require('body-parser');
//the below line injects the bodyparser to our application.
app.use(bodyparser.urlencoded({extended:false}));


//our app.js shoud connect to the router so import the routers
const adminRouter=require('./routes/admin');

app.use(adminRouter);


//the below method only helps us to create a table in db
sequelize.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
});


