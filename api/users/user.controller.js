const { create, getRole, getUserByEmail } = require('./user.service');

const { genSaltSync, hashSync, compareSync  } =  require("bcrypt");
const { sign } = require("jsonwebtoken")
const pool = require('../../config/database');

module.exports = {
    createUser: (req, res) =>{
        const body = req.body;
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        create(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    error: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                message: "Registration successful",
                data: results
            })
        })

    },
    
    getRole : (req, res) =>{
        getRole((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                // success: 1,
                data: results
            });
        })
    },

    login: (req, res) =>{
        const body = req.body;
        getUserByEmail(body.email, (err, results) =>{
            if(err){
                console.log(err)
            }
            if(!results){
                return res.json(
                    {
                        success: 0,
                        message: "invalid email or password"
                    }
                )
            }
            const result = compareSync(body.password, results.password);
            if(result){
                results.password = undefined;
                const role_id = results.role_id;
                const jsontoken = sign({ result: results}, process.env.SECRET,
                {
                    expiresIn: "1h"
                });
                return res.json({ 
                    success: 1,
                    role:role_id,
                    status: 200,
                    message: "login successful",
                    token: jsontoken,
                    data: results
                })
            }else{
                return res.json({ 
                    success: 0,
                    message: "incorrect email or password",
                })
            }
        });
    }
}