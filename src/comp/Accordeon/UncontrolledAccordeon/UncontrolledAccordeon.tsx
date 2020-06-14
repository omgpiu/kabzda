import React, {useState} from 'react';
import Uncontrolledaccordeonbody from "./Uncontrolledaccordeonbody";
import UncontrolledAccordeonTittle from "./UncontrolledaccordeonTitle";
import st from './UncontrolledAccordeon.module.css'

type AccordeonTypes = {
    titleValue: string

}


function UncontrolledAccordeon(props: AccordeonTypes) {


    let [collapsed,setCollapsed] = useState(false)



    return (
        <div  className={st.wrapper} >

            <UncontrolledAccordeonTittle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>
            {!collapsed  && <Uncontrolledaccordeonbody/>}
        </div>
    )


}

export default UncontrolledAccordeon;
