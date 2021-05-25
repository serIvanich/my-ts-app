import React, {KeyboardEvent, useEffect, useState} from 'react'
import s from './DimychSelect.module.css'

export type ItemsType = {

    title: string
    value: string

}

export type DimychSelectPropsType = {
    items: Array<ItemsType>
    value?: string
    onChange: (value: string) => void
}

export const DimychSelect: React.FC<DimychSelectPropsType> = (props) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const optionsItems = props.items.map((i, ind) => {
        function changeTitle() {
            props.onChange(i.value)
            setActive(!active)
        }

        function onMouseEnter() {

            setHoveredElementValue(i.value)
        }

        return <div className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                    key={ind}
                    onMouseEnter={onMouseEnter}
                    onClick={changeTitle}>{i.title}</div>
    })
    const toggleItems = () => {
        setActive(!active)
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {

                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(!active)
        }
    }

    return (
        <>
            {/*<div>*/}
            {/*    <select >*/}
            {/*        <option value="1">Minsk</option>*/}
            {/*        <option value="2">Dnepr</option>*/}
            {/*        <option value="3">Kyiv</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
            {'\n\n\n'}
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {optionsItems}
                    </div>
                }

            </div>

        </>)
}
