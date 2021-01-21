import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {useDispatch} from "react-redux";
import {auth,provider} from './firebase';
import {login} from './features/appSlice';

function Login() {

    const dispatch = useDispatch();

    const signin =() =>{

        auth.signInWithPopup(provider).then(result =>{

            console.log(result);

            dispatch(login({
                username:result.user.displayName,
                profilePic:result.user.photoURL,
                id:result.user.uid
            }));
        }).catch(error => alert(error.message))

    }

    return ( 
        <div className="login">
            <div className="login_container">
                <img src="https://www.trecebits.com/wp-content/uploads/2017/05/snapchat-comun.jpg" alt=""/>
                <Button variant='outline' onClick={signin}>Sign in </Button>
            </div>
        
        </div>
    )
}

export default Login
