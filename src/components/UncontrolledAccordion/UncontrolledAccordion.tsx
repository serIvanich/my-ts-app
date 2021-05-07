import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export type UncontrolledAccordionPropsType = {
    titleValue: string
    textSize?: number

}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Accordion rendering')

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const containerstyle = {
        padding: '10px',
    }

    return (
        <div style={containerstyle}>
            <AccordionTitle title={props.titleValue} textSize={props.textSize}
                            onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
    textSize?: number
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')

    return <span style={{fontSize: props.textSize ? props.textSize : '30px'}}
                 onClick={() => props.onClick()}>{props.title}</span>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
