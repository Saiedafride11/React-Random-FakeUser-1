import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar" >
            <a className="logo" href="/home">Logo</a>
                <div className="nav">
                    <a href="/home">Home</a>
                    <a href="/user">User</a>
                    <a href="/about">About</a>
                </div>
        </div>
    );
};

export default Header;