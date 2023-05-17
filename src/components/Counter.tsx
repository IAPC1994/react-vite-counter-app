import { useState } from 'react'

interface Props {
  initialValue: number;
}

const Counter = ({ initialValue }:Props) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount( count + 1 );
  }
  const decrement = () => {
    setCount( count - 1 );
  }
  const reset = () => {
    setCount( initialValue ); 
  }
  const switchSigns = () => {
    setCount( count * -1 );
  }

  return (
    <div className='container'>
      <h1>
        Count: { count }
      </h1>
      <div>
        <button onClick={ increment }> Increment </button>
        <button onClick={ decrement }> Decrement </button>
        <button onClick={ reset }> Restart </button>
        <button onClick={ switchSigns }> Switch Signs </button>
      </div>
    </div>
  )
}

export default Counter
