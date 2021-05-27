import {Meta, Story} from "@storybook/react";
import React, {useCallback, useMemo, useState} from "react";
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

    // select cities who begin on V
    const [valueOnV, setValueOnV] = useState('1')

    const citiesOnV: Array<ItemsType> = useMemo(() => {
        return cities.filter(c => /^V/.test(c.cityName)).map(c => {

            console.log('map citiesOnV')
            return {title: c.cityName, value: `${c.id}`}
        })
    }, [valueOnV])


    // select cities from Ukraine

    // let citiesFromUkr: Array<ItemsType> = []
    // cities.map(c => {
    //         console.log('map citiesFromUkr')
    //         if (c.countryCod === 1) {
    //             if (citiesFromUkr.length === 0) {
    //                 citiesFromUkr = [{title: c.cityName, value: `${c.id}`}]
    //             } else {
    //                 citiesFromUkr = [...citiesFromUkr, {title: c.cityName, value: `${c.id}`}]
    //             }
    //         }
    //     }
    // )
    const [valueFromUkr, setValueFromUkr] = useState('1')

    const citiesFromUkr: Array<ItemsType> = useMemo(() => {
        return cities.filter(c => c.countryCod === 1).map(c => {
            console.log('map citiesFromUkr')
            return {title: c.cityName, value: `${c.id}`}
        })
    }, [valueFromUkr])

    // select cities where populations > 500 000 people

    // let bigCities: Array<ItemsType> = []
    // cities.map(c => {
    //         console.log('map bigCities')
    //         if (c.population > 900000) {
    //             if (bigCities.length === 0) {
    //                 bigCities = [{title: c.cityName, value: `${c.id}`}]
    //             } else {
    //                 bigCities = [...bigCities, {title: c.cityName, value: `${c.id}`}]
    //             }
    //         }
    //     }
    // )
    const [valueBigCities, setValueBigCities] = useState('1')
    const bigCities: Array<ItemsType> = useMemo(() => {
        console.log('map bigCities')
        return cities.filter(c => c.population > 900000).map(c => {
            return {title: c.cityName, value: `${c.id}`}
        })
    }, [valueBigCities])

    return <>
        <div>
            <button onClick={() => setCount(count + 1)}>increment number :</button>
            <div>
                {count}
            </div>
        </div>
        <div style={{marginBottom: '100px'}}>
            <DimychSelect items={citiesOnV} value={valueOnV} onChange={setValueOnV}/>
        </div>

        <div style={{marginBottom: '100px'}}>
            <DimychSelect items={citiesFromUkr} value={valueFromUkr} onChange={setValueFromUkr}/>
        </div>


        <DimychSelect items={bigCities} value={valueBigCities} onChange={setValueBigCities}/>

    </>
}

export const LikesUseCallback = () => {
    const [count, setCount] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['Javascript', 'HTML', 'CSS', 'React'])

    const addBook = () => {
        setBooks([...books, 'Angular' + new Date().getTime()])
    }

    const memoizedSetCount = useCallback(() => setCount(count + 1), [count])

    const memoizedAddBook = useMemo(() => {
        return addBook
    }, [books])

    console.log('LikesUseCallback')
    return <>

        <Count count={count} changeCount={memoizedSetCount}/>
        <BooksMemo addBook={memoizedAddBook}/>
    </>
}
type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}
const BooksMemo = React.memo(BooksSecret)

type CountPropsType = {
    count: number
    changeCount: () => void
}

const Count: React.FC<CountPropsType> = React.memo((props) => {
    console.log('Count')
    return <div>
        <button onClick={props.changeCount}>+</button>
        {props.count}
    </div>
})
