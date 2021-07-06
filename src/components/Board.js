import '../styles/Board.css'
import { Square } from './Square'
import { BlackKing } from './pieces/BlackKing'


export const Board = ({
                        pos
                      }) => {

  const boardDimensions = {
    width: 8,
    height: 8
  }
  let board = []
  for (let i = 0; i < boardDimensions.height; i++) {
    for (let j = 0; j < boardDimensions.width; j++) {
      const number = j + i + 2
      {
        number % 2 === 0 ? board.push(<Square {...{
            id: 'black-tile',
            piece: BlackKing.src
          }} />) :
          board.push(<Square {...{
            id: 'white-tile'
          }}/>)
      }
    }
  }
  return <div id={'chessboard'}>{board}</div>
}

