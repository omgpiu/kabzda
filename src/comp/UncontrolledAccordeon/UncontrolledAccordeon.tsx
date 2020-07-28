import React, {useReducer} from 'react';
import Uncontrolledaccordeonbody from './Uncontrolledaccordeonbody';
import UncontrolledAccordeonTittle from './UncontrolledaccordeonTitle';
import st from './UncontrolledAccordeon.module.css';
import {reducer, TOGGLE_CONSTANT} from './UncontrolledAccordeonReducer';

type AccordeonTypes = {
    titleValue: string

}





export function UncontrolledAccordeon(props: AccordeonTypes) {


    // let [collapsed,setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false});
    const onClickdispatch = () => {
        dispatch({type: TOGGLE_CONSTANT});
    };

    return (
        <div className={st.wrapper}>

            <UncontrolledAccordeonTittle title={props.titleValue} onClick={onClickdispatch}/>
            {!state.collapsed && <Uncontrolledaccordeonbody/>}
        </div>
    );


}

