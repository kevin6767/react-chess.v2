import { ReactComponent as BKing } from '../../assets/pieces/Chess_kdt45.svg'
import { ReactComponent as BQueen } from '../../assets/pieces/Chess_qdt45.svg'
import { ReactComponent as BKnight} from '../../assets/pieces/Chess_ndt45.svg'
import { ReactComponent as BBishop } from '../../assets/pieces/Chess_bdt45.svg'
import { ReactComponent as BRook } from '../../assets/pieces/Chess_rdt45.svg'
import { ReactComponent as BPawn} from '../../assets/pieces/Chess_pdt45.svg'
import { ReactComponent as WKing } from '../../assets/pieces/Chess_klt45.svg'
import { ReactComponent as WQueen } from '../../assets/pieces/Chess_qlt45.svg'
import { ReactComponent as WKnight} from '../../assets/pieces/Chess_nlt45.svg'
import { ReactComponent as WBishop } from '../../assets/pieces/Chess_blt45.svg'
import { ReactComponent as WRook } from '../../assets/pieces/Chess_rlt45.svg'
import { ReactComponent as WPawn} from '../../assets/pieces/Chess_plt45.svg'

export const Pieces = [
  {
      name: 'Black King',
      src: <BKing />,
      fenString: 'k'
  },
  {
    name: 'BlackQueen',
      src: <BQueen />,
      fenString: 'q'

  },
  {
   name: 'BlackKnight',
      src: <BKnight />,
      fenString: 'n'

  },
  {
    name: 'BlackBishop',
      src: <BBishop />,
      fenString: 'b'

  },
  {
      src: <BRook />,
      fenString: 'r',
      name: 'Black Rook'
  },
  {
    name: 'BlackPawn',
      src: <BPawn />,
      fenString: 'p'

  },
  {
    name: 'White King',
    src: <WKing />,
    fenString: 'K'
  },
  {
    name: 'White Queen',
    src: <WQueen />,
    fenString: 'Q'

  },
  {
    name: 'White Knight',
    src: <WKnight />,
    fenString: 'N'

  },
  {
    name: 'White Bishop',
    src: <WBishop />,
    fenString: 'B'

  },
  {
    src: <WRook />,
    fenString: 'R',
    name: 'White Rook'
  },
  {
    name: 'White Pawn',
    src: <WPawn />,
    fenString: 'P'

  },
]