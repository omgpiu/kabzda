import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';
import {Accordeon} from './Accordeon';



export default {
    title: 'Accordeon stories',
    component: Accordeon,
};

const callback = action('accordion mode change even fired')

export const AccordeonCollapsed = () => <Accordeon titleValue={'Accordeon'} collapsed={false} onChange={callback}/>;
export const AccordeonNotCollapsed = () => <Accordeon  titleValue={'Accordeon'} collapsed={true} onChange={callback}/>;

export const AccordeonChanging = ()=> {

    const [value, setValue] = useState<boolean>(true);
    return <Accordeon titleValue={'Accordeon'} onChange={()=>{setValue(!value)}} collapsed={value}/>

}

