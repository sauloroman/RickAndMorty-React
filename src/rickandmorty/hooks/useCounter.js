import { useState } from "react"

export const useCounter = ( initialValue = 1, max = 10 ) => {

  const [counter, setCounter] = useState( initialValue );

  const onIncrementCounter = () => {
    if ( counter < max ) {
      setCounter( counter => counter + 1 );
    }
  }

  const onDecrementCounter = () => {
    setCounter( counter => counter - 1 );
  }

  const onSetCounter = value => setCounter( value );

  return {
    counter,
    onIncrementCounter,
    onDecrementCounter,
    onSetCounter
  }

}
