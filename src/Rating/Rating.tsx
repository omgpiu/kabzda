import React from 'react';
import  st from './rating.module.css'

export type RatingValueType =   0 | 1 | 2 | 3 | 4 | 5



type RatingProps = {
    value: RatingValueType
    onClick: (value: RatingValueType)=>void


}

function Rating(props: RatingProps) {

    return (
        <div className={st.wrapper}>
            <Star selected={props.value >0} onClick={props.onClick} value={1}/>
            <Star selected={props.value >1} onClick={props.onClick} value={2}/>
            <Star selected={props.value >2} onClick={props.onClick} value={3}/>
            <Star selected={props.value >3} onClick={props.onClick} value={4}/>
            <Star selected={props.value >4} onClick={props.onClick} value={5}/>


        </div>
    )

}

type StarsProps = {
    selected: boolean
    onClick: (value: RatingValueType)=>void
    value: RatingValueType
}



function Star(props: StarsProps) {
    return  <span onClick={()=>{props.onClick(props.value)}}> {props.selected ?  <b>  star  </b> : '  star'}</span>


}


export default Rating;