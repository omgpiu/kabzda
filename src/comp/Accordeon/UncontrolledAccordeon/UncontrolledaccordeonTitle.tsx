import React from 'react';


type  AccordeonTitleType = {
    title : string
    onClick: ()=> void

}

function UncontrolledAccordeonTittle(props: AccordeonTitleType) {
    return (
        <div>
            <h1 onClick={()=>{props.onClick()}}>{props.title}</h1>
        </div>


    )

}


export default UncontrolledAccordeonTittle;