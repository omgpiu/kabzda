import React, {useState} from 'react';
import Rating, {RatingValueType} from './Rating/Rating';
import RatingUncontroled from './Rating/RatingUncotroled';
import {OnOff} from './comp/onOFF/onOff';
import {Accordeon} from './Accordeon/Accordeon';


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn,setSwitchOn] = useState<boolean>(false)

    return (
        <div>

           hello


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
