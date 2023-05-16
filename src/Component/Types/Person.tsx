
type userProps = {
    personName:{
        Name:string
        Age:number
    }
}

export default function Person(props: userProps) {
  return (
    <div>
      <h4>#This is Basic Example:</h4>
      <p>Username is : {props.personName.Name}</p>
      <p>{props.personName.Name}'s Age is : {props.personName.Age}</p>
    </div>
  )
}
