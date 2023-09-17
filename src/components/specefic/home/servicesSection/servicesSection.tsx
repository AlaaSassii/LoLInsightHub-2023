import Card from './card';
import { cards } from '../../../../helpers/home/cardsSettings'
import './servicesSection.scss';

const ServicesSection = () => {
    return (
        <section className='services__section__home'>
            <h1>Our Services</h1>
            <div className='cards__services__home'>
                {
                    cards.map((card, index) => <Card
                        image={card.image}
                        text={card.text}
                        navigateLink={card.navigateLink}
                        title={card.title}
                        key={`card__services__home__${index}`} />)
                }
            </div>
        </section>
    )
}

export default ServicesSection