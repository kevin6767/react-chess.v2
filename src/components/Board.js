import '../styles/Board.css'
import { useEffect } from 'react'
import { Square } from './Square'


export const Board = ({
                        board = [],
                        handleHover,
                        handleHoverExit,
                        covered

                      }) => {
  return board.length >= '64' && <div id={'chessboard'}>
    {board.map((square, index) => {
      let x = (index % 8) + 1
      let y = Math.floor(index / 8) + 1
      let position = [x, y]
      let black = (x + y) % 2 === 1
      square.position = position
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: square,
        index,
        position,
        handleHover,
        handleHoverExit,
        covered
      }}/>
    })}
  </div>
}

