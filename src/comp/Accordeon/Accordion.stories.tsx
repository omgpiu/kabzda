import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';
import {Accordeon} from './Accordeon';



export default {
    title: 'Accordeon stories',
    component: Accordeon,
};

const callback = action('on or off clicked')

export const AccordeonCollapsed = () => <Accordeon titleValue={'Mama'} collapsed={false} onChange={callback}/>;
export const AccordeonNotCollapsed = () => <Accordeon  titleValue={'Mama'} collapsed={true} onChange={callback}/>;

export const AccordeonChanging = ()=> {

    const [value, setValue] = useState<boolean>(true);
    return <Accordeon titleValue={'Papa'} onChange={()=>{setValue(!value)}} collapsed={value}/>

}

