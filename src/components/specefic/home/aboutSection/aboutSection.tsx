import './aboutSection.scss';
import { logoName } from '../../../../assets/logo/logoName';
import luxImage from '../../../../assets/images/transparentChampions/lux.png';
const AboutSection = () => {
    return (
        <section className='aboutus__section__home'>
            <img src={luxImage} alt="" />
            <div className="aboutus__section__text">
                <div className='big__text'>About Us</div>
                <p>Welcome to the zaniest corner of the League of Legends universe – {logoName}! We're the bunch of gamers who couldn't resist turning our obsession with League into something more productive (or so we tell ourselves).</p>
                <p>At {logoName}, we're serious about the game but allergic to taking ourselves too seriously. We're the nerds who analyze every match, argue about the meta, and can't resist a good Baron pit dance-off. Our mission? To bring a grin to your face as we dive deep into the world of League of Legends.</p>
                <p>We're like the Bard of League websites, weaving stats, guides, and a touch of humor into every pixel of this site. Sure, our jokes might be cornier than a cornfield in Demacia, but at least they won't leave you tilted!</p>
                <p>So, join our quest to uncover the secrets of the Rift and have a laugh or two along the way. {logoName}: where we chase LP and chuckles in equal measure!"</p>
            </div>
        </section>
    )
}

export default AboutSection