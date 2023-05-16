
import React from 'react'

type ClickeventProps ={
    handleClick: (event:React.MouseEvent<HTMLButtonElement> , id:number) => void
}

export default function Clickevent(props : ClickeventProps) {
  return (
    <div>
        <h4>This example of function :</h4>
      <button onClick={event =>props.handleClick(event , 1)}>Click</button>
    </div>
  )
}
