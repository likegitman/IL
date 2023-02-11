import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';


function Content() {
    const {isDark}=useContext(ThemeContext);
    const {user}=useContext(UserContext);
        
    return (
        <article
            className='content'
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>{user}님 좋은하루 되세요!</h1>
        </article>
    );
}

export default Content;