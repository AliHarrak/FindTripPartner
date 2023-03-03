const express = require('express');
const postImageController = require('../controllers/postImage.controller');
const imageUploader = require('../helpers/postImage_upload');


const router = express.Router();


router.post('/uploadImage', imageUploader.upload.single('image'), postImageController.upload);


module.exports = router;