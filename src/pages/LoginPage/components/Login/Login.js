import React from 'react';
import Form from '../../../../components/Form/Form';
import { useGoogleAuth } from '../../../../context/GoogleAuthContext/GoogleAuthContext';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { setUser } from '../../../../store/slices/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { googleSignIn } = useGoogleAuth();

    const handleGoogleSignIn = () => {
        googleSignIn();
    };

    const handleEmailSignIn = (login, password) => {
        signInWithEmailAndPassword(auth, login, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        login: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
                navigate('/react-store');
            })
            .catch((error) => error.message);
    };

    return (
        <Form
            title={'Sign In'}
            emailAuth={handleEmailSignIn}
            googleAuth={handleGoogleSignIn}
        />
    );
};

export default Login;
