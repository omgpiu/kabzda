import React from 'react';


type  AccordeonTitleType = {
    title : string
    onChange: () => void

}

function AccordeonTittle(props: AccordeonTitleType) {
    return (
        <div>
            <h1 onClick={props.onChange}>{props.title}</h1>
        </div>


    )

}


export default AccordeonTittle;