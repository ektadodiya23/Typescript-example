

type UserdataProps = {
    Username:String
    Age ?:number
}

export default function Optional(props:UserdataProps) {
  return (
    <div>
      <h4>This example of optional types:</h4>
      <p>Username : {props.Username}</p>
      <p>UserAge : (Optional type)</p>
    </div>
  )
}
