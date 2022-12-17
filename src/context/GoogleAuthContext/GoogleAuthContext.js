import React, { createContext, useContext } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const GoogleAuthContext = createContext(null);

//todo: добавить контекст для авторизации по мылу и пассворду если это возможно
//      и совместить с гугл авторизацией

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        navigate('/profile');
    };

    const googleLogOut = async () => {
        await signOut(auth);
    };

    return (
        <GoogleAuthContext.Provider value={{ googleSignIn, googleLogOut }}>
            {children}
        </GoogleAuthContext.Provider>
    );
};

export const useGoogleAuth = () => {
    return useContext(GoogleAuthContext);
};
