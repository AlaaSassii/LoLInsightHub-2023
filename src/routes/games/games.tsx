import GuessItemName from '../../components/specefic/GuessItemName/GuessItemName'
import { items } from '../../consts/items'
const Games = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <GuessItemName itemsId={items.map(v => v.key)} items={items.map(v => v.name)} />
        </>
    )
}

export default Games