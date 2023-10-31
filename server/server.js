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

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/dist')));

//     app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//     });
//   } 

app.post('/api/sendemail', async (req, res) => {
    try {
        const send_to = req.body.email;
        const sent_from = process.env.EMAIL_USER;
        const subject = req.body.subject;
        const message = req.body.message;

        await sendEmail(subject, message, send_to, sent_from)
        res.status(200).json({ success: true, message: 'Email Sent' })
    } catch (error) {
        res.status(500).json(error.message)
    }
})
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
    console.log(dotenv)
})