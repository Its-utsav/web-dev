import React, { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = ({ children }) => {
    const [user, SetUser] = useState(null);

    return (
        <userContext.Provider value={{ user, SetUser }}>
            {children}
        </userContext.Provider>
    );
};

export default UserContextProvider;
