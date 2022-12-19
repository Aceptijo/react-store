import React, { createContext, useContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword] =
        useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        navigate('/react-store');
    };

    /////////////////////////////////////////////

    const emailSignUp = async (email, password) => {
        await createUserWithEmailAndPassword(email, password);
        navigate('/login');
    };

    const emailSignIn = async (email, password) => {
        await signInWithEmailAndPassword(email, password);
        navigate('/react-store');
    };

    /////////////////////////////////////////////

    return (
        <AuthContext.Provider
            value={{ googleSignIn, emailSignUp, emailSignIn }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
