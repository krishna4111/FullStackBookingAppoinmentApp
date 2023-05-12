const Users=require('../models/booking');

const path=require('path');
//importing the path file here if your code search for the
//file with(.html / .css / .js) it gives that path

exports.adduser=(req,res,next)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;

   const data= Users.create({
        name:name,
        phone:phone,
        email:email
    })
   
    .then(result=>{
        console.log('created');
        //redirect here after the work has been done
        res.status(201).json({ newUserDetail: result })
        //res.sendFile(path.join(__dirname ,'../', 'views','booking.html'));
    })
    .catch(err=>console.log(err));
}

exports.postAddUser=(req,res,next)=>{
    //before this line you have to exports the path (line no 3);
    res.sendFile(path.join(__dirname ,'../', 'views','booking.html'));
}

exports.showAllUsers=(req,res,next)=>{
    Users.findAll()
    .then(users=>{
        res.status(200).json({ allUsers: users });
       // res.sendFile(path.join(__dirname ,'../', 'views','booking.html'));
    })
    .catch(err=>console.log(err));
}

exports.deleteUser=(req,res,next)=>{
    const userId=req.params.id;
    Users.findByPk(userId)
    .then(product=>{
        return product.destroy();
    })
    .then(result=>{
        //res.sendFile(path.join(__dirname ,'../', 'views','booking.html'));
        res.sendStatus(200);
    })
    .catch(err=>{
        console.log(err);
    })
}