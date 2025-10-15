import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, email, phone, id} = user;

    const userStyle ={
        border: '2px solid red',
        padding: '10px',
        margin: '10px',
        borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: </small> {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;