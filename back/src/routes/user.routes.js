const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/user.controllers');
const veryToken = require('../middleware/verifyToken');

router.get('/', UserController.findAll);
router.get('/:id', UserController.findById);
router.get('/profile', veryToken, UserController.findProfile);
router.get('/email/:email', UserController.findByEmail);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

module.exports = router;
