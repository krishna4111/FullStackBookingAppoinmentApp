const Sequelize=require('sequelize');

const sequelize=require('../util/database');


//in the below code we are going to create a table in the schema, the
//.define() function is helps us to do this the first argument is table name
const user=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    phone:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    }
})

module.exports=user;