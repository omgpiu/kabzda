import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';
import {Accordeon} from './Accordeon';


export default {
    title: 'Accordeon stories',
    component: Accordeon,
};

const callback = action('accordion mode change even fired');
const onClickCallback = action('item clicked');

export const AccordeonCollapsed = () => <Accordeon titleValue={'Accordeon'} collapsed={false} onChange={callback}
                                                   items={[]} onClick={onClickCallback}/>;
export const AccordeonNotCollapsed = () => <Accordeon titleValue={'Accordeon'}
                                                      collapsed={false}
                                                      onChange={callback}
                                                      items={[
                                                          {
                                                              title: 'Dima', value: 1
                                                          },
                                                          {title: 'Valera', value: 2},
                                                          {title: 'Artem', value: 3}]}
                                                      onClick={onClickCallback}


/>;

export const AccordeonChanging = () => {

    const [value, setValue] = useState<boolean>(true);
    return <Accordeon titleValue={'Accordeon'} onChange={() => {
        setValue(!value);
    }} collapsed={value} items={[
        {
            title: 'Dima', value: 1
        },
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}]}
                      onClick={onClickCallback}/>;

};

