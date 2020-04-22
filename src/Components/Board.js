import React, { useEffect, useState } from 'react'
import Card from './Card'
import {shuffleCards} from '../HelperFunctions/shuffleCards'
const Board=()=>{
    const [cards,setCards]=useState([])
    const[flipped,setFlipped]=useState(false)
    const [selected,setSelected]=useState([])
    const [solved,setSolved]=useState([])
   
    

    const cardClicked=(id)=>{
       // alert('test')
       // setFlipped(true)
        setSelected([...selected,id])
        console.log(selected)
       
            if(selected.length===1)
            {
               let isMatched=matchingCards(selected[0],id);
               if(isMatched)
               {

                setTimeout(() => {
                    if(solved.length+2==cards.length)
                    {
                        alert('Congratulations You Win!!')
                    }
                }, 500);
               
                   setSolved([...solved,selected[0],id])
                 
               }
            

               setTimeout(() => {
                setSelected([])
              
               }, 500);
           
            }

       
       
    }

    const matchingCards=(id1,id2)=>{
        const card1=cards.find(card=>card.id==id1)
        const card2=cards.find(card=>card.id===id2) 
        
        if(card1.type==card2.type) return true
        return false

    }

    useEffect(()=>{
         
         
          setCards(shuffleCards())

    },[])



return(
    <div className="main"> 

    
    <div className="board">

        {
   cards.map(item=> <Card 
    width={100}
    height={100}
    flipped={flipped} 
    selected={selected}
    disabled={false} 
    solved={solved}
    id={item.id}
    type={item.type}
    cardClicked={cardClicked}
    

    />)
        }
      
      
    </div>
    </div>
)
}
export default Board