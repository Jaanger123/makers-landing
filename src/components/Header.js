import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={require('../media/logo.svg').default} alt="makers" />
            </div>
            <h1 className="header-title">
                Прокачка до уровня <br />{' '}
                <span className="glow-text">strong junior</span> на проектах
            </h1>
            <p className="header-info">
                Дружелюбное сообщество начинающих junior программистов
            </p>
            <ul className="header-list">
                <li className="header-list-item">
                    <img
                        src={require('../media/star.svg').default}
                        alt="star"
                    />
                    <div>onsequat sunt nostrud amet.</div>
                </li>
                <li className="header-list-item">
                    <img
                        src={require('../media/star.svg').default}
                        alt="star"
                    />
                    onsequat sunt nostrud amet.
                </li>
                <li className="header-list-item">
                    <img
                        src={require('../media/star.svg').default}
                        alt="star"
                    />
                    onsequat sunt nostrud amet.
                </li>
            </ul>
            <div className="header-bottom">
                <a href="#reg">
                    <button className="header-bottom-btn">
                        Начать прокачку прямо сейчас
                    </button>
                </a>
            </div>
        </header>
    );
};

export default Header;
