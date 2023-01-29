import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    auth,
    googleProvider,
    actionCodeConfig,
    metaProvider,
    gitHubProvider,
} from '../../firebase';
import {
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink,
} from 'firebase/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const providers = {
        google: 'Google',
        meta: 'Meta',
        github: 'GitHub',
    };

    const signInByGoogle = () => signInWithPopup(auth, googleProvider);
    const signInByMeta = () =>
        signInWithPopup(auth, metaProvider).catch((error) =>
            alert(error.message)
        );
    const signInByGitHub = () =>
        signInWithPopup(auth, gitHubProvider).catch((error) =>
            alert(error.message)
        );

    const signInByProvider = (provider) => {
        switch (provider) {
            case providers.google:
                return signInByGoogle();
            case providers.meta:
                return signInByMeta();
            case providers.github:
                return signInByGitHub();
            default:
                throw Error('This provider is not registered');
        }
    };

    const sendLinkToEmail = (email) => {
        sendSignInLinkToEmail(auth, email, actionCodeConfig).then(() => {
            window.localStorage.setItem('emailForSignIn', email);
        });
    };

    const isSignInByLink = () => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            const email = window.localStorage.getItem('emailForSignIn');
            signInByLink(email);
        }
    };

    const signInByLink = (email) => {
        signInWithEmailLink(auth, email, window.location.href).then(() => {
            window.localStorage.removeItem('emailForSignIn');
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        isSignInByLink();
        return () => {
            unsubscribe();
        };
    }, []);

    const logOut = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider
            value={{
                signInByProvider,
                sendLinkToEmail,
                logOut,
                providers,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
