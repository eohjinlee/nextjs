import { Counter } from "@/components/Counter";
import React, {useState} from 'react';
let CounterDummy = ({value, onChangeValue}) => {

  return <>
    <input type="text" value={value}></input>
    <input type="button" value="+" onClick={() => onChangeValue(value + 1)}></input>
  </>;
}

export default function Home() {
  const [ count, setCount ] = useState(10);

  return (
    <>
    <h1>Counter</h1>
      <Counter down={true} ></Counter><br/>
      <CounterDummy value={count} onChangeValue={(oldValue) => setCount(oldValue)}></CounterDummy>
    </>
  )
}
