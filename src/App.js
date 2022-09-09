import React,{useState,useEffect} from "react";
import RandomOrg from "random-org";
import Check from './components/Check'
import './style.css';
import Select from "react-select";

function App() {

  const [value,setValue]=useState(0);
  const [selValue,setSelValue]=useState(0);
  

  useEffect(()=>{
    let random = new RandomOrg({ apiKey: 'fd0c34e1-c6fc-491d-9154-0fbb2a859f2a' });
    random.generateIntegers({ min: 1, max: 150, n: 1 })
    .then(function(result) {
     setValue(result.random.data);   
    });
},[selValue]);
   
const options = [
  { value: '1', label: 'Орел', },
  { value: '2', label: 'Решка' },
 
]

return (
  <>
     <Select options={options}  onChange={event=>setSelValue(event.value)}/>
       
       

  <h1>Результат </h1>
  <div className="res">
  
 

<Check key={Math.random (). toString (36) .substr (2, 9)} value={value} selValue={selValue} />
 
  </div>
  </>
 );

}


export default App;
