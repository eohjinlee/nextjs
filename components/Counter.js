import React, {useState} from 'react';

export function Counter({down}) {
  const [ count, setCount ] = useState(0);
  const [ step,  setStep  ] = useState(1);

  /*let upHandler = () => {
    setCount(count);
    console.log(count);
  }*/
  let upHandler = () => setCount(oldCount => oldCount + step);
  //let upHandler = () => setCount(oldCount => oldCount + 1);
  //let upHandler = () => setCount(++count);
  /*
  function upHandler(){
    setCount(++count);
    console.log(count);
  }
  */
  let downHandler = () => setCount(oldCount => oldCount - step);
  /*let downHandler = () => {
    if(count > 0)
      setCount(--count);
    console.log(count);
  }*/
  /*
  function downHandler(){
    if(count > 0)
      setCount(--count);
    console.log(count);
  }
  */

  return <>
    {count}
    <input type="number" value={step} onChange={evt => setStep(Number(evt.target.value))}></input>
    <input type="button" value="+" onClick={upHandler}></input>
    {down ? <input type="button" value="-" onClick={downHandler}></input> : null}
    {/* <input type="button" value="+" onClick={() => setCount(
      function(oldCount){
        return oldCount + 1;
      }
    )}></input>
    {down ? <input type="button" value="-" onClick={() => setCount(
      function(oldCount){
        return oldCount - 1;
      })}></input> : null} */}
  </>;
}
