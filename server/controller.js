module.exports={
    create:(req,res,next)=>{
        const {firstname,lastname,password,email}=req.body;
        const db = req.app.get('db');
        db.register_new(firstname,lastname,password,email).then(result=>{
            db.select_user(firstname,lastname,email).then(result=>{
                res.status(200).send(result[0].firstname,result[0].lastname,result[0].email)
            })
        })
    },
    read:(req,res,next)=>{
        const db = req.app.get('db');
        db.select_user().then(result=>{
            res.status(200).send(result)
        })
    }
}