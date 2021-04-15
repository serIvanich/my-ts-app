import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from "./components/Rating/Rating";
import {UncontroledAccordion} from './components/UncontroledAccordion/UncontroledAccordion';
import {UncontroledOnOff} from './components/UncontroledOnOff/UncontroledOnOff';
import {UncontroledRating, ValueType} from './components/UncontroledRaiting/UncontroledRaiting';

export function App() {
    console.log('App rendering')

    const [raitingValue, setRaitingValue] = useState<ValueType>(0)
    const [onOff, setOnOff] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div style={{paddingLeft: '50px', whiteSpace: 'pre'}}>
            Accordion<Accordion titleValue={'MENU'} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
            UncontroledAccordion<UncontroledAccordion titleValue={'Menu'}/>
            UncontroledRating<UncontroledRating/>
            Rating<Rating value={raitingValue} onClick={setRaitingValue}/>
            UncontroledOnOff<UncontroledOnOff onChange={(switchOn) => setSwitchOn(switchOn)}/>
            {`${switchOn.toString()} \n`}
            OnOff<OnOff onOff={onOff} onChange={setOnOff}/>

        </div>)
}



