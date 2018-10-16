module.exports={
    create:(req,res,next)=>{
        const {username,password,profilePic}=req.body;
        const db = req.app.get('db');
//Need to check DB for user pw combo. if not existing then register new user else login user.
        db.select_user(username,password).then(result=>{
            
            if(result.length<1){
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
    },
    read:(req,res,next)=>{
        const db = req.app.get('db');
        db.get_posts().then(result=>{
            res.status(200).send(result)
        })
    },
    post:(req,res,next)=>{
        const db = req.app.get('db');
        const {search, user_id} =req.body
        if(search && user_id){
            db.title_user_match(search,user_id).then(result=>{
                res.status(200).send(result)
            })
        } else if(search && !user_id){
            db.title_match(search).then(result=>{
                res.status(200).send(result)
            })
        } else if(!search && user_id){
            db.user_not_match(user_id).then(result=>{
                res.status(200).send(result)
            })

        } else {
            db.get_posts().then(result=>{
                res.status(200).send(result)
            })
        }
        // db.get_posts().then(result=>{
        //     res.status(200).send(result)
        // })
    }
}