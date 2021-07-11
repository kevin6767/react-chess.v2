import { Pieces } from '../components/pieces/Pieces'
import { Square } from '../components/Square'
import { ReactComponent as BKing } from '../assets/pieces/Chess_kdt45.svg'
import { ReactComponent as BQueen } from '../assets/pieces/Chess_qdt45.svg'
import { ReactComponent as BKnight } from '../assets/pieces/Chess_ndt45.svg'
import { ReactComponent as BBishop } from '../assets/pieces/Chess_bdt45.svg'
import { ReactComponent as BRook } from '../assets/pieces/Chess_rdt45.svg'
import { ReactComponent as BPawn } from '../assets/pieces/Chess_pdt45.svg'
import { ReactComponent as WKing } from '../assets/pieces/Chess_klt45.svg'
import { ReactComponent as WQueen } from '../assets/pieces/Chess_qlt45.svg'
import { ReactComponent as WKnight } from '../assets/pieces/Chess_nlt45.svg'
import { ReactComponent as WBishop } from '../assets/pieces/Chess_blt45.svg'
import { ReactComponent as WRook } from '../assets/pieces/Chess_rlt45.svg'
import { ReactComponent as WPawn } from '../assets/pieces/Chess_plt45.svg'

export function evaluator(pos, black, index, position, board) {
  switch (pos) {
    case 'r': {
      return <BRook />
    }
    case 'n': {
      return <BKnight />
    }
    case 'b': {
      return <BBishop />
    }
    case 'q': {
      return <BQueen />
    }
    case 'k': {
      return <BKing />
    }
    case 'p': {
      return <BPawn />
    }
    case 'R': {
      return <WRook />
    }
    case 'N': {
      return <WKnight />
    }
    case 'B': {
      return <WBishop />
    }
    case 'Q': {
      return <WQueen />
    }
    case 'K': {
      return <WKing />
    }
    case 'P': {
      return <WPawn />
    }
    case '/': {
      return
    }
    default: {
      break
    }
  }
}

