import React, {ChangeEvent, useRef, useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {OnOff, OnOffPropsType} from "../components/OnOff/OnOff";
import {action} from "@storybook/addon-actions";



export default {
  title: 'Example/input',
  // component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;


export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const actualValue = e.currentTarget.value
    setValue(actualValue)
  }

  return <><input  onChange={onChange}/>  - {value}</>
}


export const GetValueOfUncontrolledInputByButtonPress = () => {

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const saveValue = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <><input ref={inputRef} id={'inputId'} /> <button onClick={saveValue}>save</button>  - {value}</>
}


export const ControlledInput = () => {

  const [parentValue, setParentValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
}
export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChange}>
    <option >none</option>
    <option value="1">Minsk</option>
    <option value="2">Kyiv</option>
    <option value="3">Tbilisi</option>
  </select>
}

export const ControlledInputWithFixedValue = () => <input  value={'vaiti-v-it'}/>;

