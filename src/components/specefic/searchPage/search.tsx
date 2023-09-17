import './search.scss'
import { cards } from '../../../helpers/search'
import Card from './card'
const Search = () => {
    return (
        <div className='search'>
            <p>Welcome to our League of Legends hub! Here, you'll find two exciting cards that hold the key to your journey in the Rift.</p>
            <div className="cards">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Search