import User from '../models/User.js'
import {body, validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const jwtSecret = "mynameissomethingelse"


export const addUser = async(req,res) => {
    [
        body('email','Invalid email').isEmail(),
        body('password','Invalid password').isLength({min : 5})
    ]


    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const salt = await bcrypt.genSalt(10)
    const secPassword = await bcrypt.hash(req.body.password,salt)
 
    try {
        await User.create({

            email : req.body.email,
            password : secPassword
            
            
        })

        res.json({success : true});

    } catch (error) {
        console.log(error);
        res.json({success : false});
    }
}


export const getUser = async(req,res) => {
   [
        body('email','Invalid email').isEmail(),
        body('password','Invalid password').isLength({min : 5})
    ]


    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    

    try {
        let email = req.body.email;
        let userData =  await User.findOne({email})

       if(!userData){
        return res.status(400).json(({errors : "Try login with correct credentials"}));
       }

       const passCompare = await bcrypt.compare(req.body.password , userData.password)

       if(!passCompare){
        return res.status(400).json(({errors : "Try login with correct credentials"}));
       }

       const data = {
            user : {
                id : userData.id
            }
       }

       const authToken = jwt.sign(data,jwtSecret);

       return res.json({success : true , authToken});

        

    } catch (error) {
        console.log(error);
        res.json({success : false});
    }
} 