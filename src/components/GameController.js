import { Board } from './Board'
import { FenStringEvaluation, startPos } from '../helpers/FenStringEvaluation'
import { useEffect, useState } from 'react'


export const GameController = () => {
  const [board, setBoard] = useState([])
  const [newFen, setNewFen] = useState([...startPos])
  useEffect(() => {
  FenStringEvaluation({board, setBoard, newFen, setNewFen})
  }, [])
  return <Board {...{
    board,
  }}/>
}