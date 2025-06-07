import styles from './app.module.css';

import { WORDS, Challenge } from './utils/words';

import { Button } from './components/Button';
import { Header } from './components/Header/index';
import { Input } from './components/Input';
import { Letter } from './components/Letter';
import { LettersUsed,LettersUsedProps } from './components/LettersUsed';
import { Tip } from './components/Tip';
import { useEffect, useState } from 'react';


const ATTEMP_LIMIT =10
function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState("")

  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  const [shake, setShake] = useState(false)
  

  function handleRestartGame() {
   const isConfirmed = window.confirm("Você tem certeza que deseja reiniciar?")

   if(isConfirmed){
    startGame()
   }
  }
  function handleConfirm() {
    if (!challenge) {
      return
    }
    if (!letter.trim()) {
      return alert('Digite uma letra')
    }
    const value = letter.toUpperCase()
    const exists =lettersUsed.find((letter) => letter.value?.toUpperCase() === value)
    if (exists) {
      setLetter("")
      return alert('Letra já utilizada')
    }
    const hits = challenge.word.toUpperCase().split('').filter((char) => char === value).length
    const correct = hits > 0
    const currentScore = score + hits 
    setLettersUsed((prevState)=>[...prevState,{value: letter, correct}])
    setScore(currentScore)
    setLetter('')
    if(!correct){
      setShake(true)
      setTimeout(() => {
        setShake(false)
      }
      , 300)
    }
    
}
  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const rabdomWord = WORDS[index]
    setChallenge(rabdomWord)

    setScore(0)
    setLetter("")
    setLettersUsed([])
  }
  function endGame(message:string){
    alert(message)
    startGame()
  }
  useEffect(() => {
    startGame()
  }, [])
  useEffect(()=>{
    if(!challenge){
      return
    }
    setTimeout(()=>{
      if(score === challenge.word.length){
        return endGame("Parabéns, você descobriu a palavra!")
      }
      else if(lettersUsed.length === ATTEMP_LIMIT){
        return endGame("Que pena, você usou todas as tentativas")
      }
    },200)
  },[score,lettersUsed.length])
  if (!challenge) {
    return 
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={lettersUsed.length} 
        
        max={ATTEMP_LIMIT}  onRestart={handleRestartGame}/>
        <Tip tip={challenge.tip} />
        <div className={`${styles.word} ${shake && styles.shake}`}>
          {
            challenge.word.split('').map((letter,index) => {
              const letterUsed = lettersUsed.find((used) => used.value?.toUpperCase() === letter.toUpperCase())
              
                return(
                  <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? 'correct' : 'default'} />
                )
              
              return(
              <Letter key={index} value="" />
            )})
          }
          
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} value={letter} placeholder='?' onChange={(e)=> setLetter(e.target.value)} />
          <Button text="Confirmar" onClick={handleConfirm} />
        </div>
        <LettersUsed data={lettersUsed}/>
      </main>
    </div>
       )
}

export default App
