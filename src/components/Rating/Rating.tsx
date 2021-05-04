import React from "react";
import {ValueType} from "../UncontrolledRaiting/UncontrolledRaiting";

export type RatingPropsType = {
    value: ValueType
    onClick: (value: ValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: ValueType) => void
    value: ValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    const onClickStar = () => {
        props.onClick(props.value)
    }
    return <span onClick={onClickStar}>
                {props.selected ? <b> star </b> : ' start '}
            </span>


}