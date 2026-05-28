import "./App.css";
import { useState } from "react";
import UserList from "./UserList";
import Login from "./Login";

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
     
     return (
      <div>
        {isLoggedIn ? ( <Users/>) : (
         <login setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
      );
}
  

export default App;
