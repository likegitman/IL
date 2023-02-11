import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function Page() {
    return (
        <div className='page'>
            <Header /> 
            <Content/>
            <Footer />
        </div>
    );
}

export default Page;