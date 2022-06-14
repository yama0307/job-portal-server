
const express = require('express');
const emailSender = require('../functionality/email.send');

const router = express.Router();

router.post('/verify', (req, res) => {
    console.log(req.body.email);
    emailSender(req.body.email, "111111");
    res.json({success: "success"});
})


module.exports = router;