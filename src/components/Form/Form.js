import React, { useState } from 'react';
import styles from './Form.module.scss';
import { ReactComponent as GoogleIcon } from './google.svg';
import { ReactComponent as GitHubIcon } from './github.svg';
import { ReactComponent as FaceBookIcon } from './facebook.svg';
import { ReactComponent as MailIcon } from './mail.svg';
import { useAuth } from '../../context/AuthContext/AuthContext';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material';

const Form = () => {
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const { signInByProvider, sendLinkToEmail } = useAuth();

    const providers = ['Google', 'Meta', 'GitHub'];

    const icons = {
        [providers[0]]: <GoogleIcon />,
        [providers[1]]: <FaceBookIcon />,
        [providers[2]]: <GitHubIcon />,
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        sendLinkToEmail(email);
        setEmail('');
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                startIcon={<MailIcon />}
            >
                {'Sign in with Link'}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
            {providers.map((provider) => (
                <Button
                    variant="contained"
                    key={provider}
                    startIcon={icons[provider]}
                    onClick={() => signInByProvider(provider)}
                >
                    {`Sign in with ${provider}`}
                </Button>
            ))}
        </form>
    );
};

export default Form;
