import PageContainer from '../../components/common/pageContainer'
import GuessImageGame from '../../components/specefic/GuessImageGame/GuessImageGame'
import { championsNames } from '../../consts/championsNames'

const GuessChampion = () => {
    return (
        <PageContainer>
            <GuessImageGame championsNames={championsNames} />
        </PageContainer>
    )
}

export default GuessChampion