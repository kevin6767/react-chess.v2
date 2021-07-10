import { Board } from './Board'
import { FenStringEvaluation, startPos } from '../helpers/FenStringEvaluation'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { evaluator } from '../helpers/evaluator'
import { Pieces } from './pieces/Pieces'
import { Square } from './Square'

export const GameController = () => {
  const [newFen, setNewFen] = useState(startPos)
  const [board, setBoard] = useState([])
  const history = useHistory()

  const [hovering, setHovering] = useState(false)
  const [covered, setCovered] = useState([])

  const handleHover = (piece) => {
    console.log(piece)
    setHovering(true)
    setCovered(board.filter(emptySqaures => emptySqaures.name === 'Blank Sqaure'
      && emptySqaures.position !== piece.position))
  }

  const handleHoverExit = (ev) => {
    setHovering(false)
    setCovered([])

  }


  function init() {
    let newFenString = newFen.split('').map(part => {
      if (+part >= 1 && +part <= 8) return "1".repeat(+part);
      return part;
    }).join('')
    setNewFen(newFenString)
    let boardVisualizer = newFen.split('/').join('')
    createBoard(boardVisualizer)
  }

  const createBoard = (boardVisualizer) => {
    let newBoardVisualizer = [...boardVisualizer]
    let boardCreated = newBoardVisualizer.map((pos, index) => {
      return convertPiece(pos, index)
    })
    setBoard(
      boardCreated
    )
  }

  const convertPiece = (pos, index ) => {
    let foundPiece = Pieces.find(targetPiece => targetPiece.fenString === pos)

    return foundPiece ? foundPiece : '1'
  }


  useEffect(() => {
    init()
  }, [newFen])

  return board.length >= '64' ? <Board {...{
    board,
    setBoard,
    newFen,
    setNewFen,
    init,
    handleHover,
    handleHoverExit,
    covered
  }}/> : null
}