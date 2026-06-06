import {useEffect, useState,useRef} from 'react';
import UserCard from './UsersCard';
import Filters from './Filters';


function UserList() {

    const endRef = useRef(null);


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [showName, setShowName] = useState(true);
    const [showLastName, setShowLastName] = useState(true);
    const [showEmail, setShowEmail] = useState(true);
    const [showGender, setShowGender] = useState(true);
    const [showAge, setShowAge] = useState(true);

// es xuti useristvis
    async function fetchUsers() {
        try { setLoading(true);
            setError("");

   const response = await fetch("https://randomuser.me/api/?results=5");
   if (!response.ok) {
    throw new Error("API Error");
    }

    const data = await response.json();
    setUsers(data.results);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    }
     
    // es erti useris damateba

    async function addUser() {
  try {
    setLoading(true);
    setError("");

    const response = await fetch(
      "https://randomuser.me/api/"
    );

    if (!response.ok) {
      throw new Error("API Error");
    }

    const data = await response.json();

    console.log("NEW USER:", data.results[0]);
console.log("TOTAL USERS:", users.length);

  setUsers((prev) => [...prev, data.results[0]]);

  setTimeout(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 100);

  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}
useEffect(() => {
    fetchUsers();
}, []);


    return (
        <div>
            <h1>Users</h1>
            {loading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}


    <Filters 
    showName={showName}
    setShowName={setShowName}
    showLastName={showLastName}
    setShowLastName={setShowLastName}
    showEmail={showEmail}
    setShowEmail={setShowEmail}
    showGender={showGender}
    setShowGender={setShowGender}
    showAge={showAge}
    setShowAge={setShowAge}
    />

    <button onClick={addUser}>Add User</button>
<div className="usersContainer">
    {users.map((user) => (
        <UserCard
        key={user.email}
        user={user}
        showName={showName}
        showLastName={showLastName}
        showEmail={showEmail}
        showGender={showGender}
        showAge={showAge} />
    ))}
    <div ref={endRef} />
</div>
    </div>
);
}



export default UserList;

    