const express = require('express');
const router = express.Router();

const fileUpload = require("express-fileupload");
const uuid = require("uuid");
router.use(fileUpload());

const fs = require("fs");


const adminLogic = require('../business-logic/admin-logic');

const sendError = require("../helpers/send-error");


router.post('/add-product', async (request, response) => {
    const item = request.body;
    try {
        // if (!request.files) {
        //     response.status(400).send("No File Sent!");
        //     return;
        // }
        
        const imageFile = request.files.image;
        
        console.log(imageFile)
        console.log(request.files)

    const extension = image.name.substr(image.name.lastIndexOf("."));

    const fileName = uuid() + extension;


    // image.mv("./uploads/products" + fileName);
    image.mv('../uploads/images' + fileName);
    
    item.imageUrl = randomName + extension;


    response.send("Done.");

        
        throw "test";
        const products = await adminLogic.addProduct(item);
        response.json(products);
    } catch (error) {
        sendError(response, error);
    }
});


// router.post('/add-product', async (request, response) => {
//     try {
//         // if (!request.files) {
//         //     throw "add an image to proceed"
//         // }
//         // const file = request.files.image;
//         // const randomName = uuid.v4();
//         // const extension = file.name.substr(file.name.lastIndexOf('.'));
//         // file.mv('./uploads/products/' + randomName + extension);
//         const product = request.body;
//         // product.imageUrl = randomName + extension;
//         const addedProduct = await adminLogic.insertProduct(product);
//         response.json(addedProduct);
//     } catch (error) {
//         sendError(response, error);
//     }
// });



module.exports = router;