import React from 'react'
import PageContainer from '../../components/common/pageContainer'
import GuessImageGame from '../../components/specefic/GuessImageGame/GuessImageGame'
import GuessItemName from '../../components/specefic/GuessItemName/GuessItemName'
import { items } from '../../consts/items'

const GuessItem = () => {
    return (
        <PageContainer>
            <GuessItemName
                items={items.map(i => i.name)}
                itemsId={items.map(i => i.key)}
            />
        </PageContainer>
    )
}

export default GuessItem