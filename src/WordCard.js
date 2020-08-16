import React, { useState } from 'react';
import  _ from 'lodash';
import CharacterCard from './CharacterCard' ;

var consoletoscreens ;
const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 0,
        guess: '',
        completed: true
        }
       }
       

export default function WordCard(props){

    const[state, setState]  = useState(prepareStateFromWord(props.value)) 
    
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        consoletoscreens = guess ;

        setState({...state, guess})
        
        if(guess.length == state.word.length){

        if(guess == state.word){
            console.log('yeah!')

        setState({...state, guess: '', completed: true})
        }else
        {
        console.log('reset , Please Try Again Later')
        setState({...state, guess: '', attempt: state.attempt + 1})

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
           
           <div className="body">{consoletoscreens}   </div>
           <div className="body"> คุณได้ทายใจเราไปแล้ว = {state.attempt} ครั้ง</div>
        </div>
        )
     }

