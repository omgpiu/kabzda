import React from 'react';
import AccordeonBody from './accordeonbody';
import AccordeonTittle from './accordeonTitle';

type ItemsType = {
    title:string
    value: any
}

type AccordeonTypes = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemsType[]
    onClick: (value:any)=> void
}

export type AccordeonBodyType ={
    items:ItemsType[]
    onClick: (value:any)=> void
}

export function Accordeon(props: AccordeonTypes) {
    return (<div>
            <AccordeonTittle title={props.titleValue}
                             onChange={props.onChange}

            />
            {!props.collapsed && <AccordeonBody items={props.items} onClick={props.onClick}/>}
        </div>
    );


}


