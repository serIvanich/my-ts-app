import React from "react";

type OnOffPropsType = {
    onOff: boolean
    onChange: (onOff: boolean) => void
}
export const OnOff: React.FC<OnOffPropsType> = ({onOff, onChange}) => {

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

function onChangeOn() {
    onChange(true)
}
function onChangeOff() {
    onChange(false)
}

    return <div>
        <div style={onStyle} onClick={onChangeOn}>ON</div>
        <div style={offStyle} onClick={onChangeOff}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
}