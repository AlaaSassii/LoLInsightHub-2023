import PageContainer from '../../components/common/pageContainer'
import GuessItemName from '../../components/specefic/GuessItemName/GuessItemName'
import MatchingCardGame from '../../components/specefic/MatchingCardGame/MatchingCardGame'
import { items } from '../../consts/items'
const Games = () => {
    return (
        <PageContainer>
            <MatchingCardGame />
        </PageContainer>
    )
}

export default Games