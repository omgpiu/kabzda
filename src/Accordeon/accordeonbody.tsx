import React from 'react';
import {AccordeonBodyType} from './Accordeon';


function AccordeonBody(props: AccordeonBodyType) {
    return (
        <ul>
            {props.items.map((i,index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    );

}


export default AccordeonBody;