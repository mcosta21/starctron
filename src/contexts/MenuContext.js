import React, { useState, createContext } from 'react';

export const MenuContext = createContext();

const MenuProvider = ( { children } ) => {
    const [menu, setMenu] = useState({
        state: false
    });

    return (
        <MenuContext.Provider value={{menu, setMenu}}>
            { children }
        </MenuContext.Provider>
    )
}

export default MenuProvider;