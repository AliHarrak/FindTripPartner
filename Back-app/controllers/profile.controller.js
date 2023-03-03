const models = require('../models');


function create(req,res) {
    const profile={
        id:req.body.id,
        userId:req.body.userId,
        description:req.body.description,
        image:req.body.image,
        tel:req.body.tel,
        pays:req.body.pays,
        ville:req.body.ville,
        age:req.body.age,
    }
    models.Profile.create(profile).then(result => {
        res.status(201).json({
            message: "profile well created",
            post: result
        });
 }).catch(error =>{
     res.status(500).json({
         message: "something wrong",
         error: error
     });
 });
}



function update(req,res){
    const id = req.params.id;
    const updatedProfile = {
        description:req.body.description,
        image:req.body.image,
        tel:req.body.tel,
        pays:req.body.pays,
        ville:req.body.ville,
        age:req.body.age,
        }
    models.Profile.update(updatedProfile, {where : {id:id}}).then(result => {
        res.status(201).json({
            message : "Profile updated!!!",
            profile : updatedProfile
        });
    }).catch(error => {
        res.status(500).json({
            message : "something wrong!!!",
            error : error
        });
    });
}

module.exports = {
   create:create,
   getProfile:getProfile,
   update:update,
}
