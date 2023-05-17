import React from "react";
import CardItem from "./CardItem";

const CardList = ({cardInfo}) => {

const elements = cardInfo.map(item => {
    return(
        <CardItem title={item.title} text={item.text} image={item.image}/>
    )
})

    return(
        <ul>
            {elements}
        </ul>
    )
}

export default CardList;