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
    let dontMutate = [...board]
    setHovering(true)
    calculateMovement(piece, x, y, index, dontMutate)
  }

  const handleHoverExit = (ev) => {
    setHovering(false)

  }
  const calculateMovement = (piece, x , y, index, dontMutate) => {
    // board is a global array, holding all position -
    // board = [[0, 0], [1, 0]]
    // Current Location of the piece I want to move
    // x is row
    // y is col
    // how to get every piece between the currentLocation and wantedLocation
    let currentLocation = [x, y]
    let wantedLocation = [7, 7]

  }

  const why = (findFunc) => setCovered(findFunc)



  function init() {
    let newFenString = newFen.split('').map(part => {
      if (+part >= 1 && +part <= 8) return "1".repeat(+part);
      return part;
    }).join('')
    let boardVisualizer = newFenString.split('/')
    setNewFen(newFenString)
    createBoard(boardVisualizer)
  }

  const createBoard = (boardVisualizer) => {
    let boardCreate = boardVisualizer.map((row, i) => {
      return [...row].map((col, j) => {
        return convertPiece(col ,j, i)
      })
    })
    setBoard(
      boardCreate
    )
  }

  const convertPiece = (pos, i, j ) => {
    let x = (i % 8) + 1
    let y = Math.floor(j % 8) + 1
    let black = (i + j) % 2 === 0
    return <Square {...{
      id: black ? 'black-tile' : 'white-tile',
      piece: evaluator(pos),
      x,
      y,
      handleHover,
      handleHoverExit,
      covered,
    }}/>
  }



  useEffect(() => {
    console.log('firing')
    init()
  }, [])


  return board &&  <Board {...{
    board,
    setBoard,
    newFen,
    setNewFen,
    init,
    handleHover,
    handleHoverExit,
  }}/>
}