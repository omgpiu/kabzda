import React, {useState} from 'react';
import Rating, {RatingValueType} from "./comp/Accordeon/Rating/Rating";
import RatingUncontroled from "./comp/Accordeon/Rating/RatingUncotroled";

function App() {

     let [ratingValue,setRatingValue] = useState<RatingValueType>(1)






    return (
        <div>

            {/*<OnOff/>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <RatingUncontroled/>
            {/*<UncontrolledAccordeon titleValue={"Users"}/>*/}
            {/*<UncontrolledAccordeon titleValue={"Menu"}/>*/}
            {/*<PageTitle title={'Hello mazafuker'}/>*/}
            {/*<Accordeon titleValue={"Users"} collapsed={false}/>*/}
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
