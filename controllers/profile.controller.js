async function getProfile(req,res,next){
    try {
        res.status(200).json({
            statusCode:res.statusCode,
            data:{
                data:req.user,
                message:"profile got successfully"
            }
        })
    } catch (error) {
        next (error)
    }
}
module.exports={
    getProfile
}