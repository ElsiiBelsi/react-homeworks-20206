import { useState } from 'react';
import Login from './Login';
import UserList from './UsersList';
import './App.css';

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
     
     return (
      <div>
        {isLoggedIn ? ( <UserList/>) : (
         <Login setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
      );
}
  

export default App;
