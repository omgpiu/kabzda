import React from 'react';
import AccordeonBody from './accordeonbody';
import AccordeonTittle from './accordeonTitle';

type AccordeonTypes = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordeon(props: AccordeonTypes) {
    return (<div>
            <AccordeonTittle title={props.titleValue}
                             onChange={props.onChange}

            />
            {!props.collapsed && <AccordeonBody/>}
        </div>
    );


}


