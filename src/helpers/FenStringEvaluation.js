import { evaluator } from './evaluator'

export const startPos = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
export const startPosArr = [...startPos]

export const FenStringEvaluation = ({
                                      board,
                                      setBoard,
  newFen,
  setNewFen,
                                    }) => {


  // const figureOutPos = () => {
  //   let boardVisualizer = newFen.split('/').join('')
  //   let newBoardVisualizer = [...boardVisualizer]
  //   setBoard(
  //     newBoardVisualizer.map((pos, index) => {
  //       let x = (index % 8) + 1
  //       let y = Math.floor(index / 8) + 1
  //       let position = [x , y]
  //       const black = (x + y) % 2 === 1
  //       return evaluator(pos, black, index, position, board)
  //     })
  //   )
  // }
}