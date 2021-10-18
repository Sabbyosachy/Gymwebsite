import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const Authcontexts=createContext();
const AuthProvider = ({children}) => {
    const totalContexts=useFirebase();
    return (
        <Authcontexts.Provider value={totalContexts}>
            {children}
        </Authcontexts.Provider>
    );
};

export default AuthProvider;