import React, {useState} from "react";

type UncontroledAccordionPropsType = {
    titleValue: string
    
}

export function UncontroledAccordion(props: UncontroledAccordionPropsType) {
    console.log('Accordion rendering')

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const containerstyle = {
        padding: '10px',
    }
    
    return (
        <div style={containerstyle}>
            <AccordionTitle title={props.titleValue}
                            onClick={() => setCollapsed(!collapsed)} />
            
            {collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
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
