import React, {ChangeEvent, useRef, useState} from 'react';


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
    };
    return <><input ref={inputRef}/>
        <button onClick={save}>Save
        </button>
        - actual value : {value}   </>;

};
export const TrackValueOfUncontrolledInput = () => {
// берем значения из инпута и передаем в стейт
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    };

    return <><input value={value} onChange={onChange

    }/> - {value}   </>;

};


export const ControlledInput = () => {

    const [parentValue, setparentValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setparentValue(event.currentTarget.value);
    };
    return <input value={parentValue} onChange={onChange}/>;


};
export const ControlledCheckBox = () => {

    const [parentValue, setparentValue] = useState(true);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setparentValue(event.currentTarget.checked);
    };
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>;


};


export const ControlledSelect = () => {
    const [parentValue, setparentValue] = useState<string|undefined>(undefined);
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setparentValue(event.currentTarget.value);
    };


    return <select value={parentValue} onChange={onChange}>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Kiev</option>


    </select>

};


export const ControlledInputValue = () => <input value={'Controlled input'}/>;

