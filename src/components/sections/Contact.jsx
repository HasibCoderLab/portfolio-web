import React, { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Send, MessageSquare } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.value]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefaul()

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'please fill in all fields' })
            return
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setStatus({ type: 'error', message: 'Please enter a valid email' });
        return;
    }

    setStatus({ type: 'success', message: 'Message sent successfully!' });
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus({ type: '', message: '' }), 5000);




    return (
        <div>Contact</div>
    )
}

export default Contact