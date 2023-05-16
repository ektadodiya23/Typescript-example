
import './App.css';
import String from './Component/Types/String';
import Boolean from './Component/Types/Boolean';
import Person from './Component/Types/Person';
import Arraylist from './Component/Array/Arraylist';
import Optional from './Component/Optional/Optional';
import Clickevent from './Component/Event/Clickevent';
import Use_state from './Component/State/Use_state';
import UseState from './Component/State/UseState';


function App() {
  // this is part of Person.tsx file
  const Username = {
    Name : 'Elvinaa',
    Age : 34
  } 

  // this part of Array-list
  const languageList = [ 
    {
    Language : 'React JS'
    },

    {
    Language : 'JavaScript'
    },

      {
    Language : 'Ruby'
    },

      {
    Language : 'Python'
    },

      {
    Language : 'Blockchain'
    }
  ]
  


  return (
    <div className="App">
      <String name='Elvinaa' messageCount={25} /><br/><hr/>
      <Boolean isLoggedIn={true}/><br/><hr/>
      <Person personName={Username}/><br/><hr/>
      <Arraylist names={languageList}/><br/><hr/>
      <Optional Username = 'Mike' Age={22}/><br/><hr/>
      <Clickevent handleClick={(event , id)=>{
         console.log("Button Clicked!" , event , id)
      }}/><br/><hr/>
      < Use_state/><br/><hr/>
      <UseState/>
      

    </div>
  );
}

export default App;
