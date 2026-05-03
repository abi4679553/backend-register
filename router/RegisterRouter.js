const Register = require('../models/register');
const express = require('express');
const router = express.Router();

// Route to handle registration
// REST API endpoint to receive registration data /register
router.post('/register', async (req, res) => {
    try {
        const { name, email, contact, city, course, dob, message } = req.body
        console.log(name, email, contact, city, course, dob, message)
        if (!name || !email || !contact || !city || !course || !dob || !message) {
            return res.json({ success: false, message: 'Please fill all the fields' });
        }
        // Check if the email already exists in the database
        const existingUser = await Register.findOne({ email })

        console.log("existingUser", existingUser)
        if (existingUser) {
            return res.json({ success: false, message: 'Email already exists' });
        }

        const newRegister = new Register({
            name, email, contact, city, course, dob, message
        })

        const saveRegister = await newRegister.save()

        if (!saveRegister) {
            return res.json({ success: false, message: 'Failed to register' });
        }
        return res.json({ success: true, message: 'Registration successful' });
    } catch (err) {
        console.error(err);
        return res.json({ success: false, message: 'Server error' });
    }
})


router.get('/fetch-register', async (req, res) => {
    try {
        const registerData = await Register.find({})
        if (registerData.length === 0) {
            return res.json({ sucess: false, meassage: "no data found" })
        }
        const totalCount = registerData.length
        return res.json({ sucess: true, meassage: "data true", data: registerData, totalCount })
    }
    catch (err) {
        console.error(err);
        return res.json({ success: false, message: 'Server error' });
    }
})


router.get('/fetch-register/:id', async (req, res) => {
    try {
        const { id } = req.params 
        const registerData = await Register.findOne({ email : id })
        if (!registerData) {
            return res.json({ sucess: false, meassage: "no data found" })
        }
        return res.json({ sucess: true, meassage: "data true", data: registerData})
    }
    catch (err) {
        console.error(err);
        return res.json({ success: false, message: 'Server error' });
    }
})












module.exports = router;



