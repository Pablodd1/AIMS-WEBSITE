
import React, { lazy, useEffect, useState, } from 'react';
import { DialogTitle, DialogContent, Button, TextField, Typography, Box, Alert, } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile, sendPasswordResetEmail, signInWithEmailAndPassword, } from "firebase/auth";
import { SiGnuprivacyguard, SiMinutemailer } from 'react-icons/si';
import bg from "../assets/patterns/pattern0.webp"
import logo from "../assets/icons/aims-logo.webp"
import { useTranslation } from 'react-i18next';
import SimpleBackdrop from '../components/crm.slaves/backdrop';
import { auth } from '../firebase';

const styles = {
    viewScreen: {
        backgroundColor: 'transparent',
        backgroundSize: '120px 120px',
        maxHeight: '70vh',

    },
    dialogTitleLogin: {
        backgroundColor: '#000',
        color: '#fff',
        padding: 1,
        display: 'flex',
        direction: 'row',
        gap: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'auto',
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontSize: '1.2rem',
        fontWeight: 500
    },
    loginText: {
        marginBottom: 5,
        // padding: 1
    },
    textWelcome: {
    },
    iconContLogin: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: 3
    },
    iconLogin: {
        width: 'auto',
        height: 150,
    },
    LogoLogin: {
        width: 'auto',
        height: 45,
    },
    startButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        height: '100%'
    },
    containerLogin: {
        padding: 20,
    },
    inputLogin: {
        marginBottom: 2,
        width: '100%',
    },
    googleButton: {
        width: '55%',
        mt: 2,
        backgroundColor: '#fff',
        color: '#000',
        border: '1px solid #eee',
        borderRadius: '10px',
        boxShadow: '1px 1px 2px #888e',
    },
    buttonLogin: {
        height: '2.7rem',
        width: '80%',
        m: 'auto',
        display: "flex",
        borderRadius: '25px',
        color: '#fffff0',
        boxShadow: '1px 3px 5px #888e',
        border: '1px solid teal',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            backgroundColor: '#47B758',
            border: '1px solid #47B758',
            color: '#000',
        },
    },
    facebookLoginButton: {
        width: '48%',
        m: '1%',
        backgroundColor: '#3b5998',
        color: '#fff',
        border: '1px solid #3b5998',
    },
    forgetButton: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 0,
        marginBottom: 3
    },
    personalDetailCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        marginTop: 5,
        width: 'max-content',
        maxWidth: '95vw'
    },
    alert: {
        top: 5,
        position: 'fixed',
        left: 0,
        right: 0
    }
};


const UserDashboard = lazy(() => import('./dashboard'));

const LoginDialog = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [emailCheck, setEmailCheck] = useState(true);
    const [psdCheck, setPsdCheck] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [fetchingStatus, setFetchingStatus] = useState(false);
    const [fetchMsg, setFetchMsg] = useState('Syncing User Data...');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [forgetPsd, setForgetPsd] = useState(false);
    const [head, setHead] = useState('AI Medical Scribe');
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { t } = useTranslation();




    const checkUserLogin = () => {
        setFetchingStatus(true);
        const userRec = localStorage.getItem('userId');
        const userEmail = localStorage.getItem('userEmail');
        const userName = localStorage.getItem('userName');

        if (userRec && userEmail && userName) {
            setFetchingStatus(false);
            dispatch({
                type: 'SET_USER',
                payload: {
                    uid: userRec,
                    email: userEmail,
                    displayName: userName
                },
            });
        } else {
            setFetchingStatus(false);
            dispatch({
                type: 'SET_USER',
                payload: null,
            });
        }
    };

    // Updated useEffect hook
    useEffect(() => {
        setFetchMsg('Validating User...');
        checkUserLogin();
    }, []);




    const handleSignin = async () => {
        setFetchingStatus(true);
        setFetchMsg('Signing in User...')
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userData = {
                uid: user.uid,
                email: user.email,
                userName: user.displayName
            }
            localStorage.setItem('userId', user.uid);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userName', user.displayName);
            dispatch({
                type: 'SET_USER',
                payload: userData,
            });
            setFetchMsg('Signed In Successfully.');
            setFetchingStatus(false);
            setIsAlert(true);

        } catch (error) {
            setIsError(true)
            setFetchMsg(error.message)
            setFetchingStatus(false);
            setIsAlert(true);
        }

    };


    const handleResetPassword = async () => {
        setFetchMsg('Password Reset Processing...');
        setFetchingStatus(true);
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent!');
            setForgetPsd(false);
            setFetchMsg('Processed.');
            setFetchingStatus(false);
            setIsAlert(true);

        } catch (error) {
            setIsError(true)
            setFetchMsg(error.message);
            setFetchingStatus(false);
            setIsAlert(true);

        }
    };
    const updateDisplayName = () => {
        const currentUser = auth.currentUser;
        const userRec = localStorage.getItem('userId');
        if (currentUser) {
            updateProfile(currentUser, {
                displayName: userName
            })
                .then(() => {
                    dispatch({
                        type: 'SET_USER',
                        payload: { ...user, displayName: userName }
                    });
                    setIsAlert(true);
                    localStorage.setItem('user', { ...userRec, displayName: userName });
                    setFetchMsg('Display name updated successfully');
                })
                .catch(error => {
                    setFetchMsg(error.message);
                    setIsAlert(true);
                });
        }
    };

    return (
        <>

            {user
                ?
                user.displayName ?
                    <UserDashboard />
                    :
                    <Box sx={{
                        maxWidth: '95%',
                        ml: 1, mr: 1,

                    }} >
                        <DialogTitle sx={styles.dialogTitleLogin} >
                            <img style={styles.LogoLogin} src={logo} height={'auto'} width={'auto'} alt="Logo" />

                            {head}
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                ...styles.viewScreen,
                                ...{
                                    backgroundImage: `url('${bg}')`,
                                }
                            }}
                        >
                            <TextField
                                label="Full Name"
                                value={userName}
                                className='w-full m-4'
                                placeholder="Enter Name"
                                variant="outlined"
                                autoComplete="name"
                                onChange={(e) => setUserName(e.target.value)}

                            />
                            <Button
                                aria-label={t('buttons.submit')}
                                size='small'
                                sx={styles.forgetButton}
                                onClick={updateDisplayName}
                            >
                                {t('buttons.submit')}!
                            </Button>
                        </DialogContent>
                        {
                            fetchingStatus &&
                            <SimpleBackdrop open={fetchingStatus} color={'#0f0'} msg={fetchMsg} />
                        }
                        {
                            isAlert && <Alert severity={isError ? 'error' : 'success'} color={isError ? 'error' : 'success'} sx={styles.alert} onClose={() => setIsAlert(false)} >{fetchMsg}</Alert>

                        }
                    </Box >
                :
                (
                    <Box sx={{
                        maxWidth: '95%',
                        ml: 1, mr: 1

                    }} >
                        <DialogTitle sx={styles.dialogTitleLogin} >
                            <img style={styles.LogoLogin} src={logo} height={'auto'} width={'auto'} alt="Logo" />

                            {head}
                        </DialogTitle>
                        <DialogContent
                            sx={{
                                ...styles.viewScreen,
                                ...{
                                    backgroundImage: `url('${bg}')`
                                }
                            }}
                        >
                            <Box>
                                <Box>
                                    <Box sx={styles.iconContLogin}>
                                        <img style={styles.iconLogin} src={logo} height={'auto'} width={'auto'} alt="AI Medical Scriber Logo" />
                                    </Box>

                                    <Box>

                                        <TextField
                                            label="Email"
                                            value={email}
                                            sx={styles.inputLogin}
                                            placeholder="Email Address"
                                            variant="outlined"
                                            type="email"
                                            autoComplete="email"
                                            error={emailError !== ''}
                                            helperText={emailError}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                                                if (!regex.test(e.target.value)) {
                                                    setEmailError('Invalid email address');
                                                    setEmailCheck(true);
                                                } else {
                                                    setEmailError('');
                                                    setEmailCheck(false);
                                                }
                                            }}
                                        />
                                        {!forgetPsd && (
                                            <>
                                                <TextField
                                                    label="Password"
                                                    value={password}
                                                    sx={[styles.inputLogin]}
                                                    placeholder="Password"
                                                    variant="outlined"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    error={passwordError !== ''}
                                                    helperText={passwordError}
                                                    onChange={(e) => {
                                                        setPassword(e.target.value);
                                                        const regex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
                                                        if (!regex.test(e.target.value)) {
                                                            setPasswordError('Password should contain at least one number, one letter, and 8 characters');
                                                            setPsdCheck(true);
                                                        } else {
                                                            setPasswordError('');
                                                            setPsdCheck(false);
                                                        }
                                                    }}
                                                />

                                                {!forgetPsd ? (
                                                    <Button
                                                        aria-label={t('buttons.forgotPass')}
                                                        size='small'
                                                        sx={styles.forgetButton}
                                                        onClick={() => (setForgetPsd(true) & setHead('Reset Password'))}
                                                    >
                                                        {t('buttons.forgotPass')}!
                                                    </Button>
                                                )
                                                    :
                                                    (
                                                        <TextField
                                                            label="Confirm Password"
                                                            value={confirmPassword}
                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                            sx={styles.inputLogin}
                                                            placeholder="Confirm Password"
                                                            variant="outlined"
                                                            type="password"
                                                            autoComplete="new-password"
                                                            error={password !== confirmPassword}
                                                            helperText={password !== confirmPassword ? "Passwords don't match" : ''}
                                                        />
                                                    )}
                                            </>
                                        )}


                                        <Button
                                            aria-label={forgetPsd ? t('buttons.sendEmail') : t('buttons.login')} fullWidth variant="contained" sx={styles.buttonLogin}
                                            onClick={forgetPsd ? handleResetPassword : handleSignin}
                                            startIcon={forgetPsd ? <SiMinutemailer size={'1.2rem'} /> : <SiGnuprivacyguard size={'1.1rem'} />}
                                            disabled={!((forgetPsd && !emailCheck) || (!psdCheck && !emailCheck))}
                                        >
                                            {forgetPsd ? t('buttons.sendEmail') : t('buttons.login')}
                                        </Button>
                                        {forgetPsd &&
                                            <Typography variant="body1" sx={{ mt: 1 }} >
                                                {'Instead have an account?'}
                                                <Button aria-label={forgetPsd && t('buttons.login')} onClick={() => { setForgetPsd(false); setHead(t('buttons.login')) }}  >
                                                    {t('buttons.login')}
                                                </Button>
                                            </Typography>}


                                    </Box>
                                </Box>
                            </Box>
                        </DialogContent>
                        {
                            fetchingStatus &&
                            <SimpleBackdrop open={fetchingStatus} color={'#0f0'} msg={fetchMsg} />
                        }
                        {
                            isAlert && <Alert severity={isError ? 'error' : 'success'} color={isError ? 'error' : 'success'} sx={styles.alert} onClose={() => setIsAlert(false)} >{fetchMsg}</Alert>

                        }
                    </Box >
                )}
        </>
        //  </Dialog>
    );
};



export default LoginDialog;
