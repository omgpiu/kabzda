import React from 'react';
import AccordeonBody from "./accordeonbody";
import AccordeonTittle from "./accordeonTitle";

type AccordeonTypes = {
    titleValue: string
    collapsed?: boolean
}

function Accordeon(props: AccordeonTypes) {
    return (<div>
            <AccordeonTittle title={props.titleValue}/>
            {!props.collapsed&& <AccordeonBody/>}
        </div>
    )


}

export default Accordeon;
