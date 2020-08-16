import React, { useState } from 'react';
import  _ from 'lodash';
import CharacterCard from './CharacterCard' ;

var consoletoscreens ;
var activationconsole ;
const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 0,
        guess: '',
        completed: false
        }
       }
       

export default function WordCard(props){

    const[state, setState]  = useState(prepareStateFromWord(props.value)) 
    
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let completed = state.completed
        let guess = state.guess + c
        consoletoscreens = guess ;

        setState({...state, guess})
        
        if(guess.length == state.word.length){

        if(guess == state.word){
            console.log('yeah!')

        setState({...state, guess: '', completed: true})
        activationconsole = "ยินดีด้วย คุณทายใจเราได้ !!";
        }else
        {
        console.log('reset , Please Try Again Later')
        setState({...state, guess: '', attempt: state.attempt + 1})
        activationconsole = "น่าเสียดายนะ ไว้ครั้งหน้าลองใหม่ " ;

            }
    }
}
    
    
    return (
        <div>
           <div>
              { 
                 state.chars.map((c,i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                 )
              }
           </div>
           
           <div className="consoletoscreens">{consoletoscreens}  </div>
           <div className="activationbody"> คุณได้ทายใจเราไปแล้ว = {state.attempt} ครั้ง</div>
           <div className = "body"> {activationconsole} </div>
           </div>
        )
     }

