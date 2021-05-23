import {Meta, Story} from "@storybook/react";
import React, {useMemo, useState} from "react";


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
