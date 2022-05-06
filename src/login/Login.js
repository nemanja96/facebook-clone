import React, { useState } from 'react'
import './Login.css';
import facebook from '../images/facebook.svg';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const [ input, setInput ] = useState(true);

    const handleNewAccout = () => {
        setInput(prev => !prev);
    }

    const handleLoginBack = () => {
        setInput(prev => !prev);
    }

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.profileURL,
            }))
        })
    }

    const register = () => {
        if(!email) {
            return alert("You need to write email");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: `${firstName} ${lastName}`,
                photoURL: profilePic,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: `${firstName} ${lastName}`,
                    photoUrl: profilePic,
                }))
            })
        })
    }

  return (
    <div className='login'>
        <div className='login__left'>
            <img src={facebook} />
            <p>Fejsbuk Vam pomaze da se povezete sa ljudima iz svog zivota i delite sadrzaj sa njima.</p>
        </div>
        <div className='login__right'>
            {!input && <div className='login__fullName'>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder='Ime' />
                <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder='Prezime' />  
            </div>}
            {!input && <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Upload your image (URL)" type="text" /> }
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='E-adresa' />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Lozinka' />
            {input && <button onClick={loginToApp} className='login__signIn'>Prijavite se</button> }
            {!input && <button onClick={register} className='login__register'>Registrujte se</button> }
            {input && <hr /> }
            {input && <button className='login__newAccount' onClick={handleNewAccout}>Napravite novi nalog</button>}
            {!input && <span className='back__login' onClick={handleLoginBack}>Prijavite se</span> }
        </div>
    </div>
  )
}

export default Login