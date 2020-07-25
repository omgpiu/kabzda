import React from 'react';


type propsType = {
    on: boolean
    onChange:(on:boolean)=>void

}


export  function OnOff(props: propsType) {
    console.log('on:'+props.on);



    
    
    const onStyle = {
        width: "30px",
        height: "40",
        border: "1px solid black",
        display: "inline-block",
        margin: "10px",
        padding: "5px",
        backgroundColor: props.on ? 'green' : 'white'

    };
    const offStyle = {
        width: "30px",
        height: "40",
        border: "1px solid black",
        display: "inline-block",
        margin: "10px",
        padding: "5px",
        backgroundColor: props.on ? 'white' : 'red'

    };
    const indicatorStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '20px',
        border: '1px solid black',
        display: "inline-block",
        margin: "10px",
        backgroundColor: props.on ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={()=> {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={()=> {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>


        </div>


    )

}


