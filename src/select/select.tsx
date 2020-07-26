import st from './select.module.css';
import React from 'react';

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
    const selectedItem = props.items.find(i => i.value === props.value);
    return (
        <>
            <select>
                <option value="2">Mos</option>
                <option value="4">Min</option>
                <option value="5">Cha</option>


            </select>
            <div className={st.select + ' ' + st.active}>
                <h3>{selectedItem && selectedItem.title}</h3>

                <div className={st.items}>
                    {props.items.map(i => (<div key={i.value}>--{i.title}--</div>))}
                </div>

            </div>
        </>
    );

}