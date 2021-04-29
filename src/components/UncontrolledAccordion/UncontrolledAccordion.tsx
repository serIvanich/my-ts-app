import React, {useState} from "react";

export type UncontroledAccordionPropsType = {
    titleValue: string
    textSize?: number
    
}

export function UncontroledAccordion(props: UncontroledAccordionPropsType) {
    console.log('Accordion rendering')

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const containerstyle = {
        padding: '10px',
    }
    
    return (
        <div style={containerstyle}>
            <AccordionTitle title={props.titleValue} textSize={props.textSize}
                            onClick={() => setCollapsed(!collapsed)} />
            
            {collapsed && <AccordionBody/>}
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
    
    return <span style={{fontSize: props.textSize? props.textSize : '30px'}} onClick={() => props.onClick()}>{props.title}</span>
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
