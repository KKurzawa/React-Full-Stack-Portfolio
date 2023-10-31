import { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';
import axios from 'axios';

export default function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setSubject(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
        const data = { subject, email, message };

        axios.post('http://localhost:3001/api/sendemail', data);
        console.log(data);

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        alert(`Thank you for your email ${name}!`);

        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-center">
            <h2 className="page-header">Contact Me</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={subject}
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    placeholder="Subject"
                />
                <input
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    id='messageBody'
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    type="message"
                    placeholder="Message"
                />
                <button className="submit-button" type="submit">Send Email</button>
            </form>
            {
                errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )
            }
        </div >
    );
}



