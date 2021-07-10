import '../styles/Board.css'
import { useEffect } from 'react'
import { Square } from './Square'


export const Board = ({
                        board = [],
                        handleHover,
                        handleHoverExit,
                        covered

                      }) => {
  return <div id={'chessboard'}>
    {board.map((slice, i) => {
      return slice.map((sqaure, j) => {
        let x = (i % 8) + 1
        let y = Math.floor(j % 8) + 1
        let black = (i + j) % 2 === 0
        return <Square {...{
          id: black ? 'black-tile' : 'white-tile',
          piece: sqaure,
          handleHover,
          handleHoverExit,
          covered,
          x,
          y
        }}/>
      })

    })}
  </div>
}

