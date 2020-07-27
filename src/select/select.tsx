import st from './select.module.css';
import React, {KeyboardEvent, useEffect, useState} from 'react';

type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]


}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false);
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value);

    const toggleItems = () => setActive(!active);
    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredElement = props.items.find(i => i.value === hoveredElementValue);
    useEffect(() => {
        sethoveredElementValue(props.value);
    }, [props.value]);


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
            }
            if (props.items[i + 1].value) {
                props.onChange(props.items[i + 1].value);
                break;
            }
        }
    };


    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    };
    return (
        <>

            <div className={st.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={st.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {

                    active &&
                    <div className={st.items}>
                        {props.items.map(i => (<div onMouseEnter={() => {
                            sethoveredElementValue(i.value);
                        }}
                                                    className={st.item + ' ' + (hoveredElement === i ? st.selected : '')}
                                                    key={i.value}
                                                    onClick={() => onItemClick(i.value)}>
                            --{i.title}--
                        </div>))}
                    </div>
                }
            </div>
        </>
    );

}