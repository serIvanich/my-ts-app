import React, {useState} from "react";
import {UncontroledAccordion} from "../UncontroledAccordion/UncontroledAccordion";
import {Rating} from "../Rating/Rating";
import { UncontroledRating } from "../UncontroledRaiting/UncontroledRaiting";

type OnOffPropsType = {
    onOff: boolean
    setOnOff: (onOff: boolean) => void
}
export const OnOff: React.FC<OnOffPropsType> = ({onOff, setOnOff}) => {

    const onStyle = {
        display: 'inline-block',
        width: '40px',
        height: '25px',
        marginLeft: '5px',
        paddingLeft: '5px',
        border: '1px solid black',
        backgroundColor: onOff ? 'green' : 'white',

    }
    const offStyle = {
        display: 'inline-block',
        width: '40px',
        height: '25px',
        marginLeft: '5px',
        paddingLeft: '5px',
        border: '1px solid black',
        backgroundColor: onOff ? 'white' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        marginLeft: '5px',
        border: '1px solid black',
        borderRadius: '7px',
        backgroundColor: onOff ? 'green' : 'red',

    }

    const takeOn = () => {
        setOnOff(true)
    }
    const takeOff = () => {
        setOnOff(false)
    }

    return <div>
        <div style={onStyle} onClick={takeOn}>ON</div>
        <div style={offStyle} onClick={takeOff}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
}