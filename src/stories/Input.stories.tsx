import React, {useRef, useState} from 'react';


export default {
    title: 'Input',
    // component: OnOff,
};

export const UncontrolledInput = () => <input/>;
export const GetValueofUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;

        setValue(el.value);
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>Save
        </button>
        - actual value : {value}   </>;

};


export const TrackValueOfUncontrolledInput = () => {
// берем значения из инпута и передаем в стейт
    const [value, setValue] = useState('');
    return <><input onChange={(event) => {
        const actualValue = event.currentTarget.value;

        setValue(actualValue);
    }

    }/> - {value}   </>;

};
export const ControlledInput = () => <input value={'Controlled input'}/>;

