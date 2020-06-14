import React, {useState} from 'react';


type propsType = {
    // on: boolean

}


function OnOff(props: any) {
    let [on, setOn] = useState(false) ;



    
    
    const onStyle = {
        width: "30px",
        height: "40",
        border: "1px solid black",
        display: "inline-block",
        margin: "10px",
        padding: "5px",
        backgroundColor: on ? 'green' : 'white'

    };
    const offStyle = {
        width: "30px",
        height: "40",
        border: "1px solid black",
        display: "inline-block",
        margin: "10px",
        padding: "5px",
        backgroundColor: on ? 'white' : 'red'

    };
    const indicatorStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '20px',
        border: '1px solid black',
        display: "inline-block",
        margin: "10px",
        backgroundColor: on ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={()=> {setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=> {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>


        </div>


    )

}


export default OnOff;