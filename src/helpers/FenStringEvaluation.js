import { evaluator } from './evaluator'

export const startPos = 'r1b1k1nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1'
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