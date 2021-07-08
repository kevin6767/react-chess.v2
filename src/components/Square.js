import '../styles/Sqaure.css'

export const Square = ({
  id,
  piece,
                       }) => {
  return <div style={{
    width: '75px',
    height: '75px',
  }}
  id={id}>
    {piece && <div id={'pieceScale'} style={{
      paddingTop: '15px'
    }}>
      {piece}
    </div>}
  </div>
}