import './App.css';
import { useEffect, useState } from 'react';
import Header from './Component/Header/Header';
import User from './Component/User/User';
import UserSummary from './Component/UserSummary/UserSummary';

function App() {
  const [users, setUsers] = useState([])
  const [cart, setCart] = useState([])
  const handlePerson = (info) => {
    const newCart = [...cart, info]
    setCart(newCart);
  };

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
      // console.log(data.results);
      setUsers(data.results)
    })
    .catch(error => console.log(error))
  },0);

  return (
    <div className="App">
        <Header></Header>

        {/* <ul>
          {
            users.map(user => <li>{user.name.first}</li>)
          }
        </ul> */}

        <div style={{ display: "flex" }} >
          <User users={users} handlePerson={handlePerson}></User>
          <UserSummary cart={cart}></UserSummary>
        </div>
    </div>
  );
}

export default App;
