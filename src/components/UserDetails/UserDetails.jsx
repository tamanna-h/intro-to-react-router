import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website, name} = user;
    
    return (
        <div>
            <h4>This is User Details</h4>
            <h5>Name: {name}</h5> 
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;