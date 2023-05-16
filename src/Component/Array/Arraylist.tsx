

type arrayProps = {
    names:{
        Language:string
    }[]
}

export default function Arraylist(props:arrayProps) {
  // destructuring array {names :[Language]}
  return (
    <div>
        <h4>#This Example of Array (with mapping) : </h4>
        {props.names.map((List)=>{
            return(
                  <li key={List.Language}>{List.Language}</li>
                 )
        })}
    </div>
  )
}
