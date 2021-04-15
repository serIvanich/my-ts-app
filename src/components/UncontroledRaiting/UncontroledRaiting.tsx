import React, {ChangeEvent, useState} from "react";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5 | ''

export const UncontroledRating: React.FC = () => {
    console.log('Rating rendering')
    const [value, setValue] = useState<ValueType>('')
    return <div>
        
        <Star selected={value > 0} setValue={() => setValue(1)} />
        <Star selected={value > 1} setValue={() => setValue(2)} />
        <Star selected={value > 2} setValue={() => setValue(3)} />
        <Star selected={value > 3} setValue={() => setValue(4)} />
        <Star selected={value > 4} setValue={() => setValue(5)} />
    </div>
}


type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

const onClickStar = () => {
    props.setValue()
}
    return <span onClick={onClickStar}>
        {props.selected ? <b> star </b> : ' star ' }
    </span>
    
}