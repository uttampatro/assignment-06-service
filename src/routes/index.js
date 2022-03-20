const express = require('express');
const {
    addingStudent,
    getAllStudent,
    updatingStudent,
    deletingStudent,
} = require('../controllers/students');
const { loginUser, registerUser } = require('../controllers/users');

const router = express.Router();

// Auth
router.post('/register', registerUser);
router.post('/login', loginUser);

//student
router.post('/addStudent', addingStudent);
router.get('/fetchAllStudent', getAllStudent);
router.put('/updateStudent/:id', updatingStudent);
router.delete('/deleteStudent/:id', deletingStudent);

module.exports = router;
