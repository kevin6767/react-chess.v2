import '../styles/Sqaure.css'

export const Square = ({
  id,
  piece,
                       }) => {
  return <div style={{
    width: '100px',
    height: '100px',
    verticalAlign: 'center',
    paddingTop: '25px'
  }}
  id={id}>
    <div id={'pieceScale'}>
    {piece && piece}
    </div>
  </div>
}