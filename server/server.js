const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmail = require('./utils/sendEmail')

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.post('/api/sendemail', async (req, res) => {
    // const { emailFrom } = dotenv.process.env;


    try {
        const send_to = process.env.EMAIL_USER;
        const sent_from = process.env.EMAIL_USER;
        const subject = "Yo";
        const message = `
            <h3>Hello Zino</h3>
            <p>Thanks for the Tutorials</p>
            <p>Regards...</p>
        `

        await sendEmail(subject, message, send_to, sent_from)
        res.status(200).json({ success: true, message: 'Email Sent' })
    } catch (error) {
        res.status(500).json(error.message)
    }
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
    console.log(dotenv)
})