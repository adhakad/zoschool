'use strict';
const express = require('express');
const router = express.Router();
const {GetAllStudentAdmitCardByClass,ChangeStatus,GetSingleStudentAdmitCard,GetSingleStudentAdmitCardById} = require('../controllers/admit-card');

router.get('/class/:id',GetAllStudentAdmitCardByClass);
router.get('/student/:id',GetSingleStudentAdmitCardById);
router.post('/',GetSingleStudentAdmitCard);
router.put('/status/:id',ChangeStatus);

module.exports = router;