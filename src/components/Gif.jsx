/* eslint-disable react/prop-types */
const Gif = ({src}) => {
  return (
    <div className='gif-div'>
      <img className='gif' src={src} alt="some gif" />
    </div>
  )
}

export default Gif