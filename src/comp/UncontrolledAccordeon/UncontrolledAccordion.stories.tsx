import React, {useState} from 'react';

import {action} from '@storybook/addon-actions';

import {UncontrolledAccordeon} from './UncontrolledAccordeon';



export default {
    title: 'UncontrolledAccordeon stories',
    component: UncontrolledAccordeon,
};

const callback = action('accordion mode change even fired')


export const AccordeonChanging = ()=> {

    return <UncontrolledAccordeon titleValue={'Accordeon'} />

}

