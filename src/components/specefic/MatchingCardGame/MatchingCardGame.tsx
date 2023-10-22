import { useState } from 'react'
type TCell = {
    row: number,
    col: number
}
import './MatchingCardGame.scss'
const MatchingCardGame = () => {
    const [grid, setGrid] = useState(
        [
            [1, 2, 3, 1],
            [2, 6, 5, 3],
            [4, 5, 6, 4]
        ]
    )
    const [revealedGrid, setRevealedGrid] = useState(new Array(3).fill("").map(() => new Array(4).fill(false)));
    const [prevClicked, setPrevClicked] = useState<TCell | undefined>();

    const handleCardClicked = (rowIndex: number, colIndex: number) => {
        const clickedNumber = grid[rowIndex][colIndex]
        const newRevealedGrid = [...revealedGrid];
        newRevealedGrid[rowIndex][colIndex] = true;
        setRevealedGrid(newRevealedGrid)
        if (prevClicked) {
            const previousClickChampion = grid[prevClicked.row][prevClicked.col]
            if (previousClickChampion !== clickedNumber) {
                setTimeout(() => {
                    newRevealedGrid[rowIndex][colIndex] = false;
                    newRevealedGrid[prevClicked.row][prevClicked.col] = false
                    setRevealedGrid(newRevealedGrid)
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
    return (
        <div className='matching__card__game'>
            <div className="grid">
                {
                    grid.map((row, rowIndex) => (
                        <div className='grid__row' key={rowIndex}>
                            {
                                row.map((number, colIndex) => <div onClick={() => handleCardClicked(rowIndex, colIndex)} className='champion__card' key={`${rowIndex}-${colIndex}`}>
                                    {revealedGrid[rowIndex][colIndex] ? number : " "}
                                </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MatchingCardGame