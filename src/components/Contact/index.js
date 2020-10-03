import React, { useState } from 'react'

export default function ContactForm() {
    // Hook to manage form data
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const { name, email, message } = formState

    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formState)
    }

    console.log(formState)
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        defaultValue={name}
                        onChange={handleChange}
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        defaultValue={email}
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        defaultValue={message}
                        rows="5"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
