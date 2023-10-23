import PageContainer from '../../components/common/pageContainer'
import GameInfoCard from '../../components/specefic/GameInfoCard'
import { gamesCars } from '../../consts/gamesCard'
import '../../sass/games.scss'
const Games = () => {
    return (
        <PageContainer>
            <div className='games__cards'>
                {
                    gamesCars.map(card => <GameInfoCard
                        desciption={card.description}
                        image={card.image}
                        link={card.link}
                        title={card.title}
                    />)
                }
            </div>
        </PageContainer>
    )
}

export default Games