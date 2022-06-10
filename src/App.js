import React from "react";
import Input from "./input";
import Memeimage from './lowerrender'





function App() {
/*
// Todo 
// Create state which accepts data
const [data,setData] = React.useState(Data)
 
//loop through thd data to render a component and pass in props to the component
const newData = data.map(item => <Box key={item.id} id = {item.id} condition = {item.condition}  toggle = {toggle}/>)

//create a toggle function that handles clicks
function toggle(id){
  setData(prev =>{
    return prev.map(item => {
      return item.id === id ? {...item , condition: !item.condition} : item
    })
  })
  
  }
*/
return (
    <div className="">
      <Input />
      <Memeimage />
    </div>
  );
}

export default App;
