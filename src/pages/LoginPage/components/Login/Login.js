import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../store/slices/userSlice';
import Form from '../../../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (login, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, login, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    setUser({
                        login: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
                navigate('/');
            })
            .catch((error) => error.message);
    };

    return <Form title={'Sign In'} handleClick={handleClick} />;
};

export default Login;
