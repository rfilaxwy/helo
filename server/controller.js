module.exports={
    create:(req,res,next)=>{
        const {username,password}=req.body;
        const db = req.app.get('db');
        db.register_new(username,password).then(result=>{
            db.select_user(username,password).then(result=>{
                res.status(200).send(result[0].username)
            })
        })
    },
    read:(req,res,next)=>{
        const db = req.app.get('db');
        const {username,password} = req.body;
  
        db.select_user().then(result=>{
            //test if user exists in db.
            if(!result.users){
                res.status(200).send(`${username} and password do not match any results`);
            } else{res.status(200).send(result)}
        })
    }
}