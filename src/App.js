
import './App.css';
import { useState,useEffect } from "react";
import Filtered from './Components/Filtered';
import Nav from './Components/Nav';
import User from './Components/User';
function App() {
  const [users,setUsers] = useState([])
  const [filteredusers,setFilteredUsers] = useState(users)

  

  useEffect(()=>{
    fetch(" https://randomuser.me/api/?results=20").then((res)=>res.json()).then((data)=>setUsers(data.results))
 
},[filteredusers])
  
  return (
    <div className="App">
      <Nav/>
     {users.length>0&&( <Filtered users={users} setFilteredUsers={setFilteredUsers}/>)}
      {users.length>0?(<User filteredusers={filteredusers}/>):(<h1 style={{marginLeft:"40vw"}}>Loading Data.....</h1>)
     }
    </div>
  );
}

export default App;
