import React from 'react';


type  AccordeonTitleType = {
    title : string

}

function AccordeonTittle(props: AccordeonTitleType) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>


    )

}


export default AccordeonTittle;