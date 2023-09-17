import { FormEvent, useRef } from 'react'
import './contactForm.scss';

const ContactForm = () => {
    const inputNameRef = useRef<HTMLInputElement | null>(null);
    const inputEmailRef = useRef<HTMLInputElement | null>(null);
    const inputSubjetRef = useRef<HTMLInputElement | null>(null);
    const inputMessageRef = useRef<HTMLTextAreaElement | null>(null);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = inputNameRef.current?.value;
        const email = inputEmailRef.current?.value;
        const subject = inputSubjetRef.current?.value;
        const message = inputMessageRef.current?.value;
        if (!name || !email || !subject || !message) {
            alert('Please fill all the fields');
            return;
        }
        // send the data to the server
        alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    }
    return (
        <form className='contact__form' onSubmit={handleSubmit}>
            <div className="user_data">
                <input type="text" placeholder='name' ref={inputNameRef} />
                <input type="email" placeholder='email' ref={inputEmailRef} />
            </div>
            <input type="text" placeholder='subject' ref={inputSubjetRef} />
            <textarea placeholder='message' ref={inputMessageRef} rows={10}></textarea>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ContactForm