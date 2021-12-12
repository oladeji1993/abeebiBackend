const { verify } = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) =>{
        let token = req.get("Authorization");

        if(token){
            console.log(token)
            token = token.slice(7);
            verify(token, process.env.SECRET, (err, decoded)=>{
                if(err){
                    res.json({
                        success: 0,
                        status:401,
                        message: "Invalid token"
                    })
                }else{
                    next();
                }
            })
        }else{
            res.json({
                success: 0,
                message: "Access denied, unauthorized user"
            })
        }
    } 
}