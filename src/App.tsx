import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from "./components/Rating/Rating";
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledRating, ValueType} from './components/UncontrolledRaiting/UncontrolledRaiting';
import {Select} from "./components/Select/Select";
import {DimychSelect} from "./components/DimychSelect/DimychSelect";

export function App() {
    console.log('App rendering')

    // const [ratingValue, setRatingValue] = useState<ValueType>(0)
    // const [onOff, setOnOff] = useState<boolean>(true)
    // const [collapsed, setCollapsed] = useState<boolean>(false)
    // const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [valueSelect, setValueSelect] = useState<any>('none')
    const [valueDimSelect, setValueDimSelect] = useState<string>('1')


    return (
        <div style={{paddingLeft: '50px', whiteSpace: 'pre'}}>
            {/*    Accordion<Accordion titleValue={'users'} collapsed={collapsed}*/}
            {/*                        onChange={() => setCollapsed(!collapsed)}*/}
            {/*                        items={[{title: 'Valera', value: 3},*/}
            {/*                            {title: 'Olga', value: 5},*/}
            {/*                            {title: 'Serik', value: 7},*/}
            {/*                            {title: 'Gleb', value: 9}]}*/}
            {/*                        onClick={(value) => {*/}
            {/*                            console.log(`users value = ${value}`)*/}
            {/*                        }}*/}
            {/*/>*/}
                UncontrolledAccordion<UncontrolledAccordion titleValue={'Menu'}/>
            {/*    UncontrolledRating<UncontrolledRating onChange={() => console.log('uncontrolled Rating want to change')}/>*/}
            {/*    Rating<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*    UncontrolledOnOff<UncontrolledOnOff onChange={(switchOn) => setSwitchOn(switchOn)}/>*/}
            {/*    {`${switchOn.toString()} \n`}*/}
            {/*    OnOff<OnOff onOff={onOff} onChange={setOnOff}/>*/}

            Select{`\n\n`}

            <Select items={[{id: '1', title: 'Valera', value: 3},
                {id: '2', title: 'Olga', value: 5},
                {id: '3', title: 'Serik', value: 7},
                {id: '4', title: 'Gleb', value: 9}]} value={valueSelect} onChange={setValueSelect}
            />

            {`\n\nDimych Select\n\n`}

            <DimychSelect items={
                [
                {title: 'Minsk', value: '1'},
                {title: 'Dnepr', value: '2'},
                {title: 'Kyiv', value: '3'}
                ]} value={valueDimSelect} onChange={setValueDimSelect}
            />

        </div>)
}



