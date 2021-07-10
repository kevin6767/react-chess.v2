import '../styles/Sqaure.css'
import { useState } from 'react'

export const Square = ({
                         id,
                         piece,
                         handleHover,
                         handleHoverExit,
                         covered,
                         hover,
  x,
  y,
  index,
                       }) => {
  return <div
    style={{
      width: '75px',
      height: '75px',
      borderStyle: covered.includes(piece) ? 'solid' : null,

    }}
    id={id}
  >
    {
      <div
      id={'pieceScale'}
      style={{
        paddingTop: '15px'
      }}
      onMouseEnter={ev => handleHover(piece, x, y, index)}
      onMouseLeave={ev => handleHoverExit(piece)}
      >
      {piece.src ? piece.src : ''}
    </div>}
  </div>
}