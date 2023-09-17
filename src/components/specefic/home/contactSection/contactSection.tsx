import { useNavigate } from 'react-router-dom'
import { links } from '../../../../enums/links'
import Champions from '../../../../assets/images/transparentChampions/group_champions.webp'
import { BsArrowRight } from 'react-icons/bs';

const ContactSection = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(links.CONTACT)
    }
    return (
        <section className="contact__section__home">
            <div className="info">
                <h1>Contact Us</h1>
                <p>Have something to say? We're all ears! Click the button below to reach out,</p>
                <p>We promise our response time is faster than a Hecarim gank!</p>
                <button onClick={handleClick}> click here <BsArrowRight /></button>
            </div>
            <img src={Champions} alt="" />

        </section>
    )
}

export default ContactSection