import React from 'react';
import Die from './components/die';
import './index.css';
import Confetti from "react-confetti"



function App() {
const [allDice, setAllDice] = React.useState(newDice())

const [won,setWon] = React.useState(false);

React.useEffect(()=>{

   const allHeld = allDice.every(die => die.isHeld)
   const firstValue = allDice[0].value
   const sameValue = allDice.every(die => die.value === firstValue)

  
   if(allHeld && sameValue){
    setWon(true)
    alert("you won")
   }





}, [allDice])


function newDice(){
  let array = [];
  
  for(let i = 0; i < 10; i++){
   array.push({value:Math.ceil(Math.random() * 6), isHeld:false , id:i})
  }
  return array
}




function holdDice(prop){

 setAllDice(old => old.map(die =>{
  return die.id === prop ? 
  {...die, isHeld: !die.isHeld} : 
  die
 }))
  
 
}
     

const randomDice =  allDice.map(die => <Die value={die.value} isHeld={die.isHeld} 
  key ={die.id} id={die.id} hold={()=> holdDice(die.id)}   />)

function handleClick(){

  setAllDice(old => old.map(dice =>{
    return dice.isHeld ? dice :{value:Math.ceil(Math.random() * 6), isHeld:false , id:Math.random()}
  } ))
}

function handleClickTwo(){
 
 
  setAllDice(newDice())
  setWon(false)
}


  return (
    <main>
      {won && <Confetti/>}
       <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='die-container'>
  {randomDice}
      </div>
     <button onClick={won ? handleClickTwo : handleClick} >{won ? "Play Again":"Roll"}</button>
    </main>
  );
}

export default App;
