import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, onChange}) => {
    console.log('AccordionTitle rendering')

    const onClickTitle = () => onChange()
    return <h3 onClick={onClickTitle}>{title}</h3>
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
