const router = require('express').Router();
const control = require('./controllers');

router.get('/upload', control.getUploads)
router.post('/upload', control.postUpload)
router.delete('/login/:id', control.deletePassword)

router.get('/login', control.getPassword)
router.post('/login', control.postPassword)
router.delete('/login/:id', control.deletePassword)

module.exports = router;