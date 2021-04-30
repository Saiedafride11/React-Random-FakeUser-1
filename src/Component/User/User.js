import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const User = (props) => {
    // console.log(props);
    const users = props.users;

    // const phone = props.users.phone;
    // console.log(phone)
    // const [mobile, setMobile] = useState('');
    // const showPhone = () => {
    //     setMobile(phone)
    // }

    const selary = (Math.random() * 5000).toFixed(0);
    return (
        <div className="userContainer">
            <div className="userWrappers">
                <div className="headerDetails" >
                    <h2>Respond to {users.length}  Users</h2>
                    <p>Click to view more users</p>
                </div>
                {
                    users.map((user) => 
                        <>
                            <div className="bodyDetails" >
                                <div className="usersImg" >
                                    <img src={user.picture.large} alt="" />
                                </div>
                                <div className="usersInfo" >
                                    <h4>Users names : {user.name.title + " " + user.name.first + " " + user.name.last} </h4>
                                    {/* <p>Age : {user.age}</p> */}
                                    <p>Gender : {user.gender}</p>
                                    <p>Email : {user.email}</p>
                                    <p>Phone no : {user.phone}</p>
                                    <p>Salary : {selary} Usd </p>
                                    {/* <p><small><strong>Phone: </strong>{mobile}</small></p>
                                    <button onClick={showPhone}>Show Phone Number</button> */}
                                    <button onClick={() => props.handlePerson(user)} ><FontAwesomeIcon icon={faPlus} /> Add User </button>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            
        </div>
    );
};

export default User;