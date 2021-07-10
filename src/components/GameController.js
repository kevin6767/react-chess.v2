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

  const handleHover = (piece, x, y, index) => {
    setHovering(true)
    calculateMovement(piece, x, y, index)
  }

  const handleHoverExit = (ev) => {
    setHovering(false)

  }
  const calculateMovement = (piece, x , y, index) => {
    console.log(piece)
  }


  function init() {
    let newFenString = newFen.split('').map(part => {
      if (+part >= 1 && +part <= 8) return "1".repeat(+part);
      return part;
    }).join('')
    setNewFen(newFenString)
    let boardVisualizer = newFen.split('/')
    createBoard(boardVisualizer)
  }

  const createBoard = (boardVisualizer) => {
    let boardCreate = boardVisualizer.map((row, index) => {
      return [...row].map((col, index) => {
        return convertPiece(col, index)
      })
    })
    setBoard(
      boardCreate
    )
  }

  const convertPiece = (pos, index ) => {
    let foundPiece = Pieces.find(targetPiece => targetPiece.fenString === pos)

    return foundPiece ? foundPiece : '1'
  }


  useEffect(() => {
    init()
  }, [newFen])
  return board &&  <Board {...{
    board,
    setBoard,
    newFen,
    setNewFen,
    init,
    handleHover,
    handleHoverExit,
    covered
  }}/>
}