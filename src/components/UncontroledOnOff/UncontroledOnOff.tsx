import React, {useState} from "react";

type OnOffPropsType = {
    onChange: (switchOn: boolean) => void
}
export const UncontroledOnOff: React.FC<OnOffPropsType> = ({onChange}) => {
  const [onOff, setOnOff] = useState<boolean>(false)

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
        onChange(true)
    }
    const takeOff = () => {
        setOnOff(false)
        onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={takeOn}>ON</div>
        <div style={offStyle} onClick={takeOff}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>
}