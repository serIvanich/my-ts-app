import {Meta, Story} from "@storybook/react";
import React, {useMemo, useState} from "react";
import {DimychSelect, ItemsType} from "../components/DimychSelect/DimychSelect";


export default {
    title: 'useMemo'
} as Meta


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let result = resultA
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            result = result * i
        }
        return result
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>

        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>
}

type UsersPropsType = {
    users: Array<string>
}

const Users = (props: UsersPropsType) => {
    console.log('Users')
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}
const UsersMemo = React.memo(Users)

export const HelpsToReactMemo = () => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Serik', 'Olya', 'Gleb', 'Ivan'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        return setUsers([...users, 'Tanya' + new Date().getTime()])
    }


    console.log('helpsToReactMemo')
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={addUser}>add user</button>
        <UsersMemo users={newArray}/>
    </>
}

export const HelpsToExample = () => {

    type CityInformation = {
        id: number
        cityName: string
        country: string
        countryCod: number
        population: number
    }


    const [count, setCount] = useState<number>(1)
    const [cities, setCities] = useState<Array<CityInformation>>(
        [
            {
                id: 1,
                cityName: 'Dnepr',
                country: 'Ukraine',
                countryCod: 1,
                population: 1033005

            },
            {
                id: 2,
                cityName: 'Varshava',
                country: 'Poland',
                countryCod: 3,
                population: 3550950

            },
            {
                id: 3,
                cityName: 'Lviv',
                country: 'Ukraine',
                countryCod: 1,
                population: 995573

            },
            {
                id: 4,
                cityName: 'Minsk',
                country: 'Belarus',
                countryCod: 2,
                population: 1567000

            },
            {
                id: 5,
                cityName: 'Kyiv',
                country: 'Ukraine',
                countryCod: 1,
                population: 4970600

            },
            {
                id: 6,
                cityName: 'Vinytsia',
                country: 'Ukraine',
                countryCod: 1,
                population: 666666

            },
            {
                id: 7,
                cityName: 'Vitebsk',
                country: 'Belarus',
                countryCod: 2,
                population: 1033005

            },
        ]
    )
    let newArray: Array<ItemsType> = []
    cities.map(c => {
            if (/^V/.test(c.cityName)) {
                newArray.push({title: c.cityName, value: `${c.id}`})
            }
            return c
        }
    )

    let valueSelect = newArray[0].value


    const onChangeSelectValue = ((value: string) => {
        debugger
        valueSelect = value
    })


    return <>
        <div>
            <button onChange={() => setCount(count + 1)}>increment number :</button>
            <div>
                {count}
            </div>
        </div>

        <DimychSelect items={newArray} value={valueSelect} onChange={onChangeSelectValue}/>

    </>
}
