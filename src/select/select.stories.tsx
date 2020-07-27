import React, {useState} from 'react';
import {Select} from './select';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Select stories',
    component: Select,
};


export const BaseExampleWithValue = () =>{
    const [value,setValue]= useState('2');
    return <>
        <Select value={value} items={[
            {value: '1', title: 'Chita'},
            {value: '2', title: 'SPB'},
            {value: '3', title: 'Krasnodar'}]}
                onChange={setValue}/>

    </>;}
export const BaseExampleWithoutValue = () =>{
const [value,setValue]= useState(null);
    return <>
        <Select

            value={value}
            items={[
            {value: '1', title: 'Chita'},
            {value: '2', title: 'SPB'},
            {value: '3', title: 'Krasnodar'}]}
                onChange={setValue}/>

    </>;}