import React, {useMemo, useState} from "react";
import {Meta} from "@storybook/react";

export default {
    title: 'useState demo'
} as Meta

function generateData() {

    console.log('generateData')
    return 3457439805
}


export const Example1 = () => {

    let initValue = generateData()
    console.log('Example1')
    const [counter, setCounter] = useState<number>(initValue)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const Example1WithUseMemo = () => {

    let initValue = useMemo(generateData, [])
    console.log('Example1')
    const [counter, setCounter] = useState<number>(initValue)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const Example1WithFuncParamInUseState = () => {


    console.log('Example1')
    const [counter, setCounter] = useState<number>(generateData)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const FuncParamInSetState = () => {


    console.log('Example1')
    const [counter, setCounter] = useState<number>(0)
    const changer = (state: number) => state + 1
    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {/*<button onClick={() => setCounter(state => state + 1)}>+</button>*/}
        {counter}
    </>
}
