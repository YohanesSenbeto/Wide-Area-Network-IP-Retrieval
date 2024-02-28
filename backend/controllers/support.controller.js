// Backend server code (e.g., server.js)
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const tls = require('tls');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to handle form submissions
function support(req, res) {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    // Create a transporter with your SMTP settings
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sarasenbeto@gmail.com',
            pass: 'Gold@14777'
        },
        tls: {
            rejectUnauthorized: false // Ignore SSL certificate errors
        }
    });

    // Email message options
    let mailOptions = {
        from: `${email}`,
        to: 'sarasenbeto@gmail.com',
        subject: 'New Message from Contact Form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
}

module.exports = { support };
