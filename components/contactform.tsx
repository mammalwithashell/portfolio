function ContactForm() {
    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault()


    }

    return (
        <form onSubmit={submitForm} className="space-y-10">
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" autoComplete="email" required />
            </div>
            <div className="flex flex-col">
                <label htmlFor="subject">Submit</label>
                <select name="subject" id="subject">
                    <option value="training" label="Training"></option>
                    <option value="webdev" label="Web Dev"></option>
                    <option value="hello" label="Saying Hi"></option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default ContactForm