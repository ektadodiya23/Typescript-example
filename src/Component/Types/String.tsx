

type stringProps = {
    name : string
    messageCount : number
  
} 

export default function String({name ,messageCount } : stringProps) {
  return (
    <div>
        <h4>#This example of typescript (string , Number)</h4>
      <h6>Hello {name}! You have unread {messageCount} message</h6>
    </div>
  )
}
