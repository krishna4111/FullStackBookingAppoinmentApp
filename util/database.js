const Sequelize=require('sequelize');

//before this you have to create a schema/db in the mysql workbench itself
const sequelize=new Sequelize('node-complete','root','root',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;