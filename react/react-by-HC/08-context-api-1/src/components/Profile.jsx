import React, { useContext } from 'react';
import userContext from '../context/userContext';

const Profile = () => {
    const { user } = useContext(userContext);

    if (!user) return <h1>Please Login</h1>;

    return (
        <div>
            <h1>Welcome {user.userName}</h1>
        </div>
    );
};

export default Profile;
