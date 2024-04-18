import React from 'react'
import UseContext from './userContext'
export default UserContextProvider = ({ childern }) => {
    let [user, setUser] = React.useState(null);
    return (
        <UseContext.Provider value={{ user, setUser }}>
            {childern}
        </UseContext.Provider>
    )
}
