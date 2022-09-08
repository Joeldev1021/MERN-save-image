const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/user.controllers');
const verifyAuth = require('../middleware/verifyAuth');

router.get('/all', UserController.findAll);
router.get('/profile', verifyAuth, UserController.findProfile);
router.get('/email/:email', UserController.findByEmail);
router.get('/:id', UserController.findById); /// problem not match
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

module.exports = router;
