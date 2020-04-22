import React from 'react'
import  './styles.css'
const Card=({width,height,solved,disabled,flipped,type,id,selected, cardClicked})=>{

    
return(
    <div  className={(selected.includes(id)||solved.includes(id))? 'container flipped':'container'} style={{width,height}} 
    onClick={()=>cardClicked(id)}
    
   >
      

       <div className="backend-side">
           &nbsp;
       </div>

       <div className="front-side">
           <p>{type}</p>
       </div>
    </div>
)
}
export default Card