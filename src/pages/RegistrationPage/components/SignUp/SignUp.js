import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from '../../../../components/Form/Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (login, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, login, password)
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

    return <Form title={'Sign up'} handleClick={handleRegister} />;
};

export default SignUp;
