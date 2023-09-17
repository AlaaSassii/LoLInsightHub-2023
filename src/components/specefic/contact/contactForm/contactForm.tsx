import { useRef } from 'react'
import './contactForm.scss';

const ContactForm = () => {
    const inputNameRef = useRef<HTMLInputElement | null>(null);
    const inputEmailRef = useRef<HTMLInputElement | null>(null);
    const inputSubjetRef = useRef<HTMLInputElement | null>(null);
    const inputMessageRef = useRef<HTMLTextAreaElement | null>(null);
    return (
        <div className='contact__form'>
            <div className="user_data">
                <input type="text" placeholder='name' ref={inputNameRef} />
                <input type="email" placeholder='email' ref={inputEmailRef} />
            </div>
            <input type="text" placeholder='subject' ref={inputSubjetRef} />
            <textarea placeholder='message' ref={inputMessageRef} rows={10}></textarea>
        </div>
    )
}

export default ContactForm