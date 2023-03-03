const models = require("../models")

function save(req , res){
    const support = {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        content: req.body.content
    }

    models.Support.create(support).then(result => {
        res.status(201).json({
            message: "message send successfully",
            support: result
        });
 }).catch(error =>{
    res.status(500).json({
        message: "something wrong",
        error: error
    });
});

}

module.exports = {
    save:save
}