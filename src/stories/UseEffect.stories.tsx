import React, {useEffect, useState} from "react";
import {Meta} from "@storybook/react";

export default {
    title: 'useEffect demo'
} as Meta

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

const changer = (state: number) => state + 1
    return <>
    Hello, {counter} {fake}
    <button onClick={() => setFake(changer)}> + </button>
    <button onClick={() => setCounter(changer)}> + </button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('useEffect every render')
            document.title = counter.toString()
        }, 1000)
    }, [counter])



const changer = (state: number) => state + 1
    return <>
    Hello, {counter} {fake}
    <button onClick={() => setFake(changer)}>fake + </button>
    <button onClick={() => setCounter(changer)}> + </button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            console.log('hi')
            setCounter((state: number) => state + 1)
        }, 1000)
    }, [])



const changer = (state: number) => state + 1
    return <>
    Hello, counter: {counter} - fake: {fake}

    </>
}

export const SetIntervalForHours = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {

            setDate((state) => new Date())

        },1000)
    }, [])

    return <>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </>
}