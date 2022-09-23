import React from 'react';



export default function Die(props){
    return(
<div className='die' onClick={props.hold} style={{backgroundColor: props.isHeld ? "#59E391" : "rgb(246, 243, 243)"}}>
{props.value}
</div>
    )
}