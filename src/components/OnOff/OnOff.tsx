import React from "react";

export type OnOffPropsType = {
    /**
     * on or off button
     */
    onOff: boolean
    /**
     * change button value
     * @param onOff - is value of button
     */
    onChange: (onOff: boolean) => void
    color?: string
}
export const OnOff: React.FC<OnOffPropsType> = ({onOff, onChange, color}) => {

    const onStyle = {
        display: 'inline-block',
        width: '40px',
        height: '25px',
        marginLeft: '5px',
        paddingLeft: '5px',
        border: '1px solid black',
        backgroundColor: onOff ? 'green' : color? color: 'white',

    }
    const offStyle = {
        display: 'inline-block',
        width: '40px',
        height: '25px',
        marginLeft: '5px',
        paddingLeft: '5px',
        border: '1px solid black',
        backgroundColor: !onOff ? 'red': color? color: 'white',
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
        <div style={onStyle} onClick={() => onChange(true)}>ON</div>
        <div style={offStyle} onClick={() => onChange(false)}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
}