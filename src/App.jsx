/* eslint-disable react/prop-types */
import defaultGif from './assets/sad-eyes-puppy-eyes.gif'
import yesGif1 from './assets/erm-fingers.gif'
import yesGif2 from './assets/milk-and-mocha.gif'
import yesGif3 from './assets/peluk.gif'
import noGif1 from './assets/pleading-face.gif'
import noGif2 from './assets/heartbreak-heartbroken.gif'
import noGif3 from './assets/mochi-cute.gif'
import './styles.css'
import { useSound } from 'use-sound'
import { useEffect, useState } from 'react'
import happySfx from './assets/yay.mp3'
import sadSfx from './assets/aww-cute.mp3'
import Gif from './components/Gif'
import Phrases from './components/Phrases'
import Choices from './components/Choices'

// const Gif = ({src}) => {
//   return (
//     <div className='gif-div'>
//       <img className='gif' src={src} alt="some gif" />
//     </div>
//   )
// }

// const Phrases = ({phrase}) => {
//   return (
//     <p className='phrase' >{phrase}</p>
//   )
// }

// const Choices = ({ handleYes, handleNo, yesIndex, noIndex }) => {
//   if (yesIndex === 2 || noIndex === 2) {
//     return;
//   }
//   return (
//     <div className='btn-div'>
//       <button onClick={handleYes} type="button" className='btn yes'>Yes</button>
//       <button onClick={handleNo} type="button" className='btn no'>No</button>
//     </div>
//   )
// }

const yesGifs = [
  yesGif1,
  yesGif2,
  yesGif3
]

const noGifs = [
  noGif1,
  noGif2,
  noGif3
]

const yesPhrases = [
  'Be honest.',
  'Really? You\'re gonna be my Valentine?',
  'I love yoooouuuu!',
]

const noPhrases = [
  'It\'s a joke, right?',
  'Please give me a chance.',
  'Ouch, I guess another time.'
]

const App = () => {
  const [phrase, setPhrase] = useState('Will you be my Valentine?')
  const [yesIndex, setYesIndex] = useState(null)
  const [noIndex, setNoIndex] = useState(null)
  const [gif, setGif] = useState(defaultGif)
  const [playHappy] = useSound(happySfx)
  const [playSad] = useSound(sadSfx)

  useEffect(() => {
    if (yesIndex === 2) {
      playHappy()
    }
    if (noIndex === 2) {
      playSad()
    }
  },[yesIndex, noIndex, playHappy, playSad])

  const handleYes = () => {
    setYesIndex(prevIndex => {
      if (prevIndex === null) {
        setPhrase(yesPhrases[0])
        setGif(yesGifs[0])
        return 0
      }
      const nextIndex = Math.min(yesPhrases.length - 1, prevIndex + 1)
      setPhrase(yesPhrases[nextIndex])
      setGif(yesGifs[nextIndex])
      return nextIndex
    })
  }


  const handleNo = () => {
    setNoIndex(prevIndex => {
      if (prevIndex === null) {
        setPhrase(noPhrases[0])
        setGif(noGifs[0])
        return 0
      }
      const nextIndex = Math.min(noPhrases.length - 1, prevIndex + 1)
      setPhrase(noPhrases[nextIndex])
      setGif(noGifs[nextIndex])
      return nextIndex
    })
  }




  return (
    <div className='App'>
      <Phrases phrase={phrase} />
      <Gif src={gif} />
      <Choices handleNo={handleNo} handleYes={handleYes} yesIndex={yesIndex} noIndex={noIndex} />
    </div>
  )
}


export default App