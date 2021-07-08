import { evaluator } from './evaluator'
export const startPos = 'r1b1k1nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1'
export const startPosArr = [...startPos]

export const FenStringEvaluation = ({
  board,
  setBoard,
  newFen,
  setNewFen
                                    }) => {

  const correctFen = () => {
    console.log(newFen.split(''))
    let newFenString = newFen.split('').map(part => {
        if (+part >= 1 && +part <= 8) return "1".repeat(+part);
        return part;
      }).join('')
    setNewFen(newFenString)
    figureOutPos()
  }

  const figureOutPos = () => {
    let boardVisualizer = [...newFen]
    setBoard(
      boardVisualizer.map((pos, index) => {
        let x = index % 7
        let y = Math.floor(index / 7)
        const black = (x + y) % 2 === 1
        return evaluator(pos, black, index)
      })
    )
  }
  return correctFen()
}