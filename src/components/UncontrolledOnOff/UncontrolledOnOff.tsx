import React, {useState} from "react";

export type UnOnOffPropsType = {
    defaultValue?: boolean
    onChange: (switchOn: boolean) => void
}
export const UncontrolledOnOff: React.FC<UnOnOffPropsType> = (props) => {
  const [onOff, setOnOff] = useState<boolean>(props.defaultValue ? props.defaultValue : false)

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
        props.onChange(true)
    }
    const takeOff = () => {
        setOnOff(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={takeOn}>ON</div>
        <div style={offStyle} onClick={takeOff}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
}