import React from 'react'

const person = (props) => {
    return(
<div>
    
    <p onClick={props.click}> My name is { props.name} and I m {props.age} years Old! </p>
    
    <p>{props.children}</p>
    </div>
        


    )




}
export default person;