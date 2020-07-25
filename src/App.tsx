import React, {useState} from 'react';
import Rating, {RatingValueType} from './comp/Accordeon/Rating/Rating';
import RatingUncontroled from './comp/Accordeon/Rating/RatingUncotroled';
import {OnOff} from './comp/onOFF/onOff';
import {Accordeon} from './comp/Accordeon/Accordeon';


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [valueOn,setVelueOn] = useState<boolean>(false)

    return (
        <div>

            <OnOff on={valueOn} onChange={()=>{setVelueOn(!valueOn)}}/>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <RatingUncontroled/>
            {/*<UncontrolledAccordeon titleValue={"Users"}/>*/}
            {/*<UncontrolledAccordeon titleValue={"Menu"}/>*/}
            {/*<PageTitle title={'Hello mazafuker'}/>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Accordeon titleValue={'Users'} collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<Accordeon titleValue={"Menu"} collapsed={false}/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>


        </div>
    );
};

// type PageTitleProps = {
//     title: string
// }
//
// function PageTitle(props: PageTitleProps) {
//     return (
//         <div><h1>{props.title}</h1></div>
//     )
//
// }

export default App;
