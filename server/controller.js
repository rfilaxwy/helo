module.exports={
    create:(req,res,next)=>{
        const {username,password,profilePic}=req.body;
        const db = req.app.get('db');
//Need to check DB for user pw combo. if not existing then register new user else login user.
        db.select_user(username,password).then(result=>{
            if(!result.data){
                db.register_new(username,password,profilePic).then(result=>{
                    db.select_user(username,password).then(result=>{
                       res.status(200).send(result) 
                    })
                })
            } else {
                db.select_user(username,password).then(result=>{
                    res.status(200).send(result)
                })
            }
        })
    }
}