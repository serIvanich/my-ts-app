import React, { useState } from 'react';
import './App.css';
import {Accordion} from './components/Accordion';
import {Rating} from "./components/Rating/Rating";
import { UncontroledAccordion } from './components/UncontroledAccordion/UncontroledAccordion';
import { UncontroledRating, ValueType } from './components/UncontroledRaiting/UncontroledRaiting';

export function App() {
  console.log('App rendering')

  const [raitingValue, setRaitingValue] = useState<ValueType>(0)
  return (
    <div>

      <UncontroledAccordion titleValue={'Menu'}/>
      <UncontroledRating />
      <Rating value={raitingValue} onClick={setRaitingValue}/>

      {/* <PageTitle title={'This is APP component'}/>
      <PageTitle title={'My friends'}/>

      Article 1

      <Accordion titleValue={'MENU'} collapsed={true}/>
      <Accordion titleValue={'USERS'} collapsed={false}/>
      Article 2
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/> */}
    </div>
  )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('AppTitle rendering')
  return <h1>{props.title}</h1>
}



