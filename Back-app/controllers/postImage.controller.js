function upload(req,res){
    if(req.file.filename){
        res.status(201).json({
            message: "Image uploaded",
            url: req.file.filename,
        });
    }else{
        res.status(500).json({
            message: "error in upload image",
        });        
    }
}

module.exports = {
    upload:upload
}