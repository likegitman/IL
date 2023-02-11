import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../context/UserContext';

function Login() {
    const {setUser}=useContext(UserContext);
    const [value, setValue]=useState('');
    const focus=useRef();

    useEffect(()=>{
        focus.current.focus();
    },[]);

    const onChange=(e)=>{
        setValue(e.target.value);
    };

    const onClick=()=>{
        setUser(value);
    };

    return (
        <div>
            <input
             type='text'
             value={value}
             onChange={onChange}
             ref={focus}
            />
            <button onClick={onClick}>닉네임 제출</button>
        </div>
    );
}

export default Login;