
let cnt=-1;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const createCards=()=>["react","vue","redux","angular","Vanilla JS","Node JS"].reduce((init,val,index)=>{

    init.push({
        id:++cnt,
        type:val
    })


    init.push({
        id:++cnt,
        type:val
    })

    return init


},[])


 export function shuffleCards()
{
  let cards=createCards()
  let randomIndex=0;
  for(let i=0;i<cards.length;i++)
  {
    while(randomIndex==i)
    {
    randomIndex=getRandomInt(cards.length)
    }
    let tmp=cards[randomIndex]
    cards[randomIndex]=cards[i]
    cards[i]=tmp
       
  }
  return cards
}



