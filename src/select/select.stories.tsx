import React from 'react';
import {Select} from './select';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Select stories',
    component: Select,
};


export const BaseExampleWithValue = () =>
    <>
        <Select value={'2'} items={[
            {value: '1', title: 'Chita'},
            {value: '2', title: 'SPB'},
            {value: '3', title: 'Krasnodar'}]}
                onChange={action('value')}/>

    </>;
export const BaseExampleWithoutValue = () =>
    <>
        <Select  items={[
            {value: '1', title: 'Chita'},
            {value: '2', title: 'SPB'},
            {value: '3', title: 'Krasnodar'}]}
                onChange={action('value')}/>

    </>;