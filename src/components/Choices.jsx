/* eslint-disable react/prop-types */
const Choices = ({ handleYes, handleNo, yesIndex, noIndex }) => {
  if (yesIndex === 2 || noIndex === 2) {
    return;
  }
  return (
    <div className='btn-div'>
      <button onClick={handleYes} type="button" className='btn yes'>Yes</button>
      <button onClick={handleNo} type="button" className='btn no'>No</button>
    </div>
  )
}

export default Choices