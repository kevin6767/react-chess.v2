import '../styles/Board.css'
import { useEffect } from 'react'
import { Square } from './Square'
import { evaluator } from '../helpers/evaluator'


export const Board = ({
                        board = [],
                        handleHover,
                        handleHoverExit,
                        covered,
                        setBoard

                      }) => {

  return board && <div id={'chessboard'}>
    {board}
  </div>
}

