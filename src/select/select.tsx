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
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    };
    useEffect(() => {
        sethoveredElementValue(props.value);
    }, [props.value]);


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }


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