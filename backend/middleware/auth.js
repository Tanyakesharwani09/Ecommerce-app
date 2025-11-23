// we will authenticate user whenever user will add the product in the cart  and update the cart data and user will place the order
import jwt from 'jsonwebtoken'

const authUser = async(req,res,next)=>{

    const {token} = req.headers;

    if(!token){
        return res.json({success:false, message:'Not Authorized login again'})
    }

    try{
        const token_decode = jwt.verify(token , process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()
    }
    
    catch(error){
        console.log(error)
        res.json({success:false, message: error.message})

    }
}
export default authUser