const express = require('express');
const router = express.Router();

const gradeController = require('../controllers/gradeController.js');

router.get('/', gradeController.getData);
router.post('/', gradeController.postData);
router.put('/', gradeController.putData);
router.delete('/', gradeController.deleteData);
module.exports = router;