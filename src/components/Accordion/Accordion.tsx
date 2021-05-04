import React from "react";
import { ValueType } from "../UncontrolledRaiting/UncontrolledRaiting";

type ItemsType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when accordion is opened(not collapsed)
     */
    items: ItemsType[]
    /**
     * Callback that is called when any item clicked
     * @param value - is value a clicked item
     */
    onClick: (value: any) => void
    /**
     * optional color on header text
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} color={props.color}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}
const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, onChange, color}) => {
    console.log('AccordionTitle rendering')

    // const onClickTitle = () => onChange()
    return <h3
        style={{color: color? color: 'black'}}
        onClick={() => onChange()}>{title}</h3>
}
type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')

    const itemsArray = props.items.map(
        (i, ind) => <li key={ind} onClick={() => props.onClick(i.value)}>{i.title}</li>)
    return (
        <div>
            <ul>
                {itemsArray}
            </ul>
        </div>
    )
}
