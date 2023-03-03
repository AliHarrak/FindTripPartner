const models = require('../models');
const { Op } = require("sequelize");


function create(req,res){
    const traget={
        profileName:req.body.profileName,
        profileImage:req.body.profileImage,
        villeDep:req.body.villeDep,
        villeArr:req.body.villeArr,
        dateDep:req.body.dateDep,
        dateArr:req.body.dateArr,
        nbrPers:req.body.nbrPers,
        sexe:req.body.sexe,
        age:req.body.age,
        type:req.body.type,
        idProfile:req.body.idProfile
    }
    models.Traget.create(traget).then(result => {
           res.status(201).json({
               message: "traget well created",
               post: result
           });
    }).catch(error =>{
        res.status(500).json({
            message: "something wrong",
            error: error
        });
    });
}

function getOne(req,res){
    const id = req.params.id;

    models.Traget.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Traget not found!"
            });
        }
    }).catch(error =>{
        res.status(500).json({
            message: "something wrong"
        });
    });
}

function fetchAll(req,res){
    const idProfile = req.params.idProfile;
    models.Traget.findAll({where : {idProfile:idProfile}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function fetchAllBySexe(req,res){
    const sexe = req.params.sexe;
    models.Traget.findAll({where : {sexe:sexe}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function fetchAllByAge(req,res){
    const min = req.params.min;
    const max = req.params.max;
    models.Traget.findAll({where : {age: {[Op.between] : [min,max]}}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function fetchAllByDate(req,res){
    const dateDep = req.params.dateDep;
    const dateArr = req.params.dateArr;
    models.Traget.findAll({where : {dateDep:dateDep,dateArr:dateArr}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function fetchByDateSexe(req,res){
    const sexe = req.params.sexe;
    const dateDep = req.params.dateDep;
    const dateArr = req.params.dateArr;
    models.Traget.findAll({where : {dateDep:dateDep,dateArr:dateArr,sexe:sexe}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function fetchAllByAgeSexe(req,res){
    const min = req.params.min;
    const max = req.params.max;
    const sexe = req.params.sexe;
    models.Traget.findAll({where : {age: {[Op.between] : [min,max]},sexe:sexe}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function fetchAllByAgeDate(req,res){
    const min = req.params.min;
    const max = req.params.max;
    const dateDep = req.params.dateDep;
    const dateArr = req.params.dateArr;
    models.Traget.findAll({where : {age: {[Op.between] : [min,max]},dateDep:dateDep,dateArr:dateArr}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}

function fetchAllByAgeDatesexe(req,res){
    const min = req.params.min;
    const max = req.params.max;
    const dateDep = req.params.dateDep;
    const dateArr = req.params.dateArr;
    const sexe = req.params.sexe;
    models.Traget.findAll({where : {age: {[Op.between] : [min,max]},dateDep:dateDep,dateArr:dateArr,sexe:sexe}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}
function deleteTrajet(req,res){
    const id = req.params.id;
    const idProfile = req.params.idProfile

    models.Traget.destroy({where : {id:id, idProfile:idProfile}}).then(result => {
        res.status(200).json({
            message: "trajet deleted successfully"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}



module.exports = {
    create:create,
    getOne:getOne,
    fetchAll:fetchAll,
    fetchAllBySexe:fetchAllBySexe,
    fetchAllByAge:fetchAllByAge,
    fetchAllByDate:fetchAllByDate,
    fetchAllByDateSexe:fetchByDateSexe,
    fetchAllByAgeSexe:fetchAllByAgeSexe,
    fetchAllByAgeDate:fetchAllByAgeDate,
    fetchAllByAgeDatesexe:fetchAllByAgeDatesexe,
    deleteTrajet:deleteTrajet,
}