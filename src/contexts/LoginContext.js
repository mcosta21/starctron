import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

const LoginProvider = ( { children } ) => {
    const [login, setLogin] = useState({
        username: undefined,
        photo: undefined
    });

    return (
        <LoginContext.Provider value={{login, setLogin}}>
            { children }
        </LoginContext.Provider>
    )
}

export default LoginProvider;