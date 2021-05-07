import React, {FocusEventHandler, MouseEventHandler, useState} from 'react'
import s from './Select.module.css'

type ItemsType = {
    id: string
    title: string
    value: any

}

export type SelectPropsType = {
    items: ItemsType[]
    value: any
    onChange: (value: any) => void
}
export type VisibilityType = 'visible' | 'hidden'
export const Select: React.FC<SelectPropsType> = (props) => {
    const [visibility, setVisibility] = useState<VisibilityType>('hidden')
    const optionItems = props.items.map(i => {
        function selectItem() {
            props.onChange(i.title)
            setVisibility('hidden')
        }
        const outOptions = () => {

            setVisibility('hidden')
        }

        return <li key={i.id} className={s.optionElement} onClick={selectItem}>{i.title}</li>
    })
    const openOptions = () => {

        visibility === 'hidden'
            ? setVisibility('visible')
            : setVisibility('hidden')
    }


    return (
        <div className={s.selectContainer}>
            <h3 onClick={openOptions}>{props.value} ^</h3>
            <div className={s.options} style={{visibility: visibility}}>
                {optionItems}
            </div>
        </div>)
}
