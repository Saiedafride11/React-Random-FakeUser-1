import React from 'react';
import './UserSummary.css'
const UserSummary = (props) => {
    const cart = props.cart;
      
    return (
        <div className="summeryContainer" >
            <h1>Users  Summery:</h1>
            <p>Users :{cart.length}</p>
           <p>
           { 
            cart.map((addName ,i) => 
                 <div className="addUser" >
                    <p> {addName.name.title + " " + addName.name.first + " " + addName.name.last}</p> 
                    <small> User number : {i+1}</small>
                </div>
            )}
           </p>
        </div>
    );
};

export default UserSummary;