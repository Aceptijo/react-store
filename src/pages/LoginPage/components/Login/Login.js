import React from 'react';
import Form from '../../../../components/Form/Form';
import { useAuth } from '../../../../context/AuthContext/AuthContext';

const Login = () => {
    const { googleSignIn, emailSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn();
    };

    const handleEmailSignIn = (email, password) => {
        emailSignIn(email, password);
    };

    return (
        <Form
            title={'Sign In'}
            googleSignIn={handleGoogleSignIn}
            emailSignIn={handleEmailSignIn}
        />
    );
};

export default Login;
