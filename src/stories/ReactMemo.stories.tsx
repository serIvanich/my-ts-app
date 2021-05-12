import {Meta, Story} from "@storybook/react";
import React, {useState} from "react";


export default {
    title: 'React.Memo demo'
} as Meta

type NewMessagesCpunterPropsType = {
    count: number
}
type UsersPropsType = {
    users: Array<string>
}

const NewMessagesCounter = (props: NewMessagesCpunterPropsType) => {
    console.log('Counter')
    return <div>{props.count}</div>
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
const CounterMemo = React.memo(NewMessagesCounter)

type PropsType = NewMessagesCpunterPropsType & UsersPropsType

export const UsersWithoutMemo: Story<PropsType> = (args) => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Serik', 'Olya', 'Gleb', 'Ivan'])
    console.log('container')
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}


export const UsersWithMemo: Story<PropsType> = (args) => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Serik', 'Olya', 'Gleb', 'Ivan'])
    console.log('container')
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <NewMessagesCounter count={count}/>
        <UsersMemo users={users} />
    </>
}

export const UsersMutationAddedUser: Story<PropsType> = (args) => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Serik', 'Olya', 'Gleb', 'Ivan'])
    const addUser = () => {
        return users.push('Tanya' + new Date().getTime())
    }
    console.log('container')
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button  onClick={addUser}>add user</button>
        <NewMessagesCounter count={count}/>
        <UsersMemo users={users}/>
    </>
}

export const UsersImmutableAddedUser: Story<PropsType> = (args) => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Serik', 'Olya', 'Gleb', 'Ivan'])
    const addUser = () => {
        return setUsers([...users, 'Tanya' + new Date().getTime()])
    }
    console.log('container')
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button  onClick={addUser}>add user</button>
        <NewMessagesCounter count={count}/>
        <UsersMemo users={users}/>
    </>
}

export const CounterWithMemo: Story<PropsType> = (args) => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Serik', 'Olya', 'Gleb', 'Ivan'])
    const addUser = () => {
        return setUsers([...users, 'Tanya' + new Date().getTime()])
    }
    console.log('container')
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button  onClick={addUser}>add user</button>
        <CounterMemo count={count}/>
        <UsersMemo users={users}/>
    </>
}
