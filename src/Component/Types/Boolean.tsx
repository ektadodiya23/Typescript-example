type Booleanprop = {
    isLoggedIn:boolean
}

export default function Boolean(props : Booleanprop) {
  return (
    <div>
        <h4>#This example of Boolean type :</h4>
      <h6>
        {
            props.isLoggedIn ? `Welcome your Login successfully` 
            :
            `Your Login unsuccessfully!`
        }
      </h6>
    </div>
  )
}
