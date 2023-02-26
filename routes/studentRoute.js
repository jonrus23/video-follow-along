const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController.js');

router.route('/')
    .get(studentController.getData)
    .post(studentController.postData);


router.route('/:id')
    .get(studentController.getDataById)
    .post(studentController.postData)
    .put(studentController.putData)
    .delete(studentController.deleteData);
    

module.exports = router;