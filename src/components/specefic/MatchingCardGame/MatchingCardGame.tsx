import { useState } from 'react'
type TCell = {
    row: number,
    col: number
}
import './MatchingCardGame.scss'
import Container from '../../common/container'
const MatchingCardGame = () => {
    const [grid, setGrid] = useState(
        [
            ["Yasuo", "Ahri", "Jinx", "Yasuo"],
            ["Ahri", "Thresh", "Ashe", "Jinx"],
            ["Darius", "Ashe", "Thresh", "Darius"],
        ]
    )
    const [revealedGrid, setRevealedGrid] = useState(new Array(3).fill("").map(() => new Array(4).fill(false)));
    const [prevClicked, setPrevClicked] = useState<TCell | undefined>();

    const handleCardClicked = (rowIndex: number, colIndex: number) => {
        const clickedChampion = grid[rowIndex][colIndex]
        const newRevealedGrid = [...revealedGrid];
        newRevealedGrid[rowIndex][colIndex] = true;
        setRevealedGrid(newRevealedGrid)
        if (prevClicked) {
            const previousClickChampion = grid[prevClicked.row][prevClicked.col]
            if (previousClickChampion !== clickedChampion) {
                console.log({ previousClickChampion, clickedChampion, prevClicked })
                setTimeout(() => {
                    newRevealedGrid[rowIndex][colIndex] = false;
                    newRevealedGrid[prevClicked.row][prevClicked.col] = false
                    setRevealedGrid([...newRevealedGrid]);
                }, 1000)
            }
            setPrevClicked(undefined)
        } else {
            setPrevClicked({
                row: rowIndex,
                col: colIndex,
            })
        }
    }
    const playAgain = () => {

    }
    return (
        <div className='matching__card__game'>
            <Container>
                <div className="champions__cards">
                    {
                        grid.map((row, rowIndex) => (
                            <div className='grid__row' key={rowIndex}>
                                {
                                    row.map((champion, colIndex) => <div onClick={() => handleCardClicked(rowIndex, colIndex)} className='champion__card' key={`${rowIndex}-${colIndex}`}>
                                        {revealedGrid[rowIndex][colIndex] ? <img src={`https://opgg-static.akamaized.net/meta/images/lol/champion/${champion}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1697786050877`} alt="" /> : <img src='https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png' />}
                                    </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div >
    )
}

export default MatchingCardGame