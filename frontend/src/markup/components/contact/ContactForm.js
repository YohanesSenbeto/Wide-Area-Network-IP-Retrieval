import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        attachment: null,
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Full Name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (formData.phone && !/^\d+$/.test(formData.phone)) {
            errors.phone = "Phone number is not valid";
        }
        if (!formData.message) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            console.log(formData);
            alert("Form submitted successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                attachment: null,
            });
        }
    };

    return (
        <div className="contact-form-container">
            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}

                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}

                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p>{errors.phone}</p>}

                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <p>{errors.message}</p>}

                <label htmlFor="attachment">Attach File:</label>
                <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleChange}
                />

                <div className="captcha">
                    {/* Insert reCAPTCHA widget here */}
                </div>

                <button type="submit">Submit</button>
            </form>
            {submitted && <p>Thank you for contacting us!</p>}
        </div>
    );
};

export default ContactForm;
