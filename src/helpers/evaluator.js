import { Pieces } from '../components/pieces/Pieces'
import { Square } from '../components/Square'


export function evaluator(pos, black, index, position, board) {
  switch (pos) {
    case 'r': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'r')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'n': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'n')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'b': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'b')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'q': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'q')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'k': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'k')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'p': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'p')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'R': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'R')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'N': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'N')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'B': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'B')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'Q': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'Q')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'K': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'K')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case 'P': {
      let foundPiece = Pieces.find((pos) => pos.fenString === 'P')
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        piece: foundPiece.src,
        position,
        board
      }}/>
    }
    case '1': {
      return <Square {...{
        id: black ? 'black-tile' : 'white-tile',
        position,
        board
      }}/>
    }
    case '/': {
      return
    }
    default: {
      break
    }
  }
}

