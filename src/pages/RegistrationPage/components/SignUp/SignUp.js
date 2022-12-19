import React from 'react';
import Form from '../../../../components/Form/Form';
import { useAuth } from '../../../../context/AuthContext/AuthContext';

const SignUp = () => {
    const { emailSignUp } = useAuth();

    const handleEmailSignUp = (email, password) => {
        emailSignUp(email, password);
    };

    return <Form title={'Sign up'} emailSignUp={handleEmailSignUp} />;
};

export default SignUp;
