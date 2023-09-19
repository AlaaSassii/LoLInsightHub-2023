import { useParams } from "react-router-dom"
import Container from "../../common/container"

const SingleChampionData = () => {
    const { id } = useParams()
    return (
        <Container>{id}</Container>
    )
}

export default SingleChampionData