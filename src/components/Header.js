import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={require('../media/logo_juniors.png')} alt="makers" />
            </div>
            <h1 className="header-title">
                Прокачка до уровня{' '}
                <span className="glow-text">strong junior</span> на проектах
            </h1>
            <p className="header-info">
                Дружелюбное сообщество начинающих junior программистов
            </p>
            <ul className="header-list">
                <li className="header-list-item">
                    <div className="header-list-item-wrapper">
                        <img
                            src={require('../media/check.svg').default}
                            alt="check"
                        />
                        <h4 className="header-list-item-title">
                            До трудоустройства
                        </h4>
                    </div>
                    <p>
                        Мы с вами до конца, пока вы не будете готовы начать
                        работать
                    </p>
                </li>
                <li className="header-list-item">
                    <div className="header-list-item-wrapper">
                        <img
                            src={require('../media/check.svg').default}
                            alt="check"
                        />
                        <h4 className="header-list-item-title">
                            Проекты от компаний
                        </h4>
                    </div>
                    <p>
                        Проекты и технологии подтверждены реальными IT
                        компаниями
                    </p>
                </li>
                <li className="header-list-item">
                    <div className="header-list-item-wrapper">
                        <img
                            src={require('../media/check.svg').default}
                            alt="check"
                        />
                        <h4 className="header-list-item-title">
                            Качаем hard и soft скиллы
                        </h4>
                    </div>
                    <p>
                        Реализация совместных проектов, работа в паре и командах
                    </p>
                </li>
                <li className="header-list-item">
                    <div className="header-list-item-wrapper">
                        <img
                            src={require('../media/check.svg').default}
                            alt="check"
                        />
                        <h4 className="header-list-item-title">
                            Готовим к собеседованиям
                        </h4>
                    </div>
                    <p>
                        Парные интервью помогут вам подготовиться к реальным
                        собеседованиям.
                    </p>
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
