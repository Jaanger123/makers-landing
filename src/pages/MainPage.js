import React from 'react';

import RegisterForm from '../components/RegisterForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

import './css/main.css';

const MainPage = () => {
    return (
        <div>
            <Header />
            <Main />
            <RegisterForm />
            <Footer />
        </div>
    );
};

export default MainPage;
