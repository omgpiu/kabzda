import React, {useState} from 'react';


function RatingUncontroled() {

    let [value, setSelected] = useState(0);


    return (
        <div>
            <Star selected={value > 0} setSelected={() => {
                setSelected(1)
            }}/>
            <Star selected={value > 1} setSelected={() => {
                setSelected(2)
            }}/>
            <Star selected={value > 2} setSelected={() => {
                setSelected(3)
            }}/>
            <Star selected={value > 3} setSelected={() => {
                setSelected(4)
            }}/>
            <Star selected={value > 4} setSelected={() => {
                setSelected(5)
            }}/>
        </div>
    )
};


type StarsProps = {
    selected: boolean
    setSelected: () => void
}


function Star(props: StarsProps) {

    return <span onClick={() => {
        props.setSelected()

    }}>{props.selected ? <b> star </b> : ' star'}</span>
}


export default RatingUncontroled;