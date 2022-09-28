import React, { useRef } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

import './css/main.css';

const MainPage = () => {
    const modal = useRef();

    const register = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form[0].value;
        const number = form[1].value;
        const email = form[2].value;

        form.reset();
        console.log(name, number, email);
    };

    const openModal = () => {
        modal.current.style.display = 'block';
    };

    const closeModal = () => {
        modal.current.style.display = 'none';
    };

    window.onclick = (e) => {
        if (e.target === modal.current) {
            modal.current.style.display = 'none';
        }
    };

    return (
        <div>
            <Header />

            <section className="learn container">
                <h2 className="learn-title title">
                    Прокачка до уровня{' '}
                    <span className="glow-text">strong junior</span> на проектах
                </h2>
                <p className="learn-info">
                    Дружелюбное сообщество начинающих junior программистов
                </p>
                <ul className="learn-list">
                    <li className="learn-list-item">
                        <div className="learn-list-item-wrapper">
                            <img
                                src={require('../media/check.svg').default}
                                alt="check"
                            />
                            <h4 className="learn-list-item-title">
                                До трудоустройства
                            </h4>
                        </div>
                        <p>
                            Мы с вами до конца, пока вы не будете готовы начать
                            работать
                        </p>
                    </li>
                    <li className="learn-list-item">
                        <div className="learn-list-item-wrapper">
                            <img
                                src={require('../media/check.svg').default}
                                alt="check"
                            />
                            <h4 className="learn-list-item-title">
                                Проекты от компаний
                            </h4>
                        </div>
                        <p>
                            Проекты и технологии подтверждены реальными IT
                            компаниями
                        </p>
                    </li>
                    <li className="learn-list-item">
                        <div className="learn-list-item-wrapper">
                            <img
                                src={require('../media/check.svg').default}
                                alt="check"
                            />
                            <h4 className="learn-list-item-title">
                                Качаем hard и soft скиллы
                            </h4>
                        </div>
                        <p>
                            Реализация совместных проектов, работа в паре и
                            командах
                        </p>
                    </li>
                    <li className="learn-list-item">
                        <div className="learn-list-item-wrapper">
                            <img
                                src={require('../media/check.svg').default}
                                alt="check"
                            />
                            <h4 className="learn-list-item-title">
                                Готовим к собеседованиям
                            </h4>
                        </div>
                        <p>
                            Парные интервью помогут вам подготовиться к реальным
                            собеседованиям.
                        </p>
                    </li>
                </ul>
            </section>
            <section className="events container">
                <h2 className="events-title title">
                    Вас ждут классные проекты 💎
                </h2>
                <p className="events-info">
                    Проекты основаны на требованиях компаний
                </p>
                <ul className="events-list">
                    <li className="events-list-item">
                        <img
                            src={require('../media/laptop.png')}
                            alt="laptop"
                        />
                        <h4>Составлены middle разработчиками</h4>
                        <p>
                            Каждый проект разрабатывается middle разработчиками
                        </p>
                    </li>
                    <li className="events-list-item">
                        <img src={require('../media/books.png')} alt="books" />
                        <h4>Имеют архитектура и требования</h4>
                        <p>
                            Есть четкие технические требования и архитектура,
                            прописанная middle разработчиками
                        </p>
                    </li>
                    <li className="events-list-item">
                        <img src={require('../media/hands.png')} alt="hands" />
                        <h4>По требованиям компаний</h4>
                        <p>
                            Все технологии соответствуют трендам рынка и
                            требованиям компаний
                        </p>
                    </li>
                </ul>
            </section>
            <section className="type container">
                <h2 className="type-title title">Как все проходит?</h2>
                <ul className="type-list">
                    <li>
                        <span>👩‍⚕️</span>
                        <h4>Парные собеседования</h4>
                        <p>Тренировка к собеседованию.</p>
                    </li>
                    <li>
                        <span>💻</span>
                        <h4>Live coding сессии</h4>
                        <p>Совместная работа над задачей.</p>
                    </li>
                    <li>
                        <span>💪🏽</span>
                        <h4>Ежедневные стэндапы</h4>
                        <p>Ежедневный треккинг вашего прогресса.</p>
                    </li>
                    <li>
                        <span>📚</span>
                        <h4>Своя группа из 10-15 человек</h4>
                        <p>Всегда есть у кого спросить и обсудить.</p>
                    </li>
                    <li>
                        <span>🍿</span>
                        <h4>Совместные проекты</h4>
                        <p>Прокачка командной работы.</p>
                    </li>
                    <li>
                        <span>✈️</span>
                        <h4>Ивенты</h4>
                        <p>Ивенты и митапы с действующими разработчиками.</p>
                    </li>
                    <li>
                        <span>🌈</span>
                        <h4>Обсуждения </h4>
                        <p>Всегда есть с кем обсудить проблему задачу.</p>
                    </li>
                    <li>
                        <span>🍼</span>
                        <h4>Buddy</h4>
                        <p>Человек, с которым всегда можете обсудить что-то</p>
                    </li>
                </ul>
                <h2 className="type-subtitle title">А также:</h2>
                <ul className="type-list sub-type-list">
                    <li>
                        <span>🛠</span>
                        <h4>У нас нет даты начала</h4>
                        <p>
                            Начать можете прямо сейчас. У нас нет даты старта
                            потока. Можете начать в любой момент.
                        </p>
                    </li>
                    <li>
                        <span>👩‍💻</span>
                        <h4>Знание языка программирования</h4>
                        <p>Необходимо знать один язык программирования.</p>
                    </li>
                    <li>
                        <span>📹</span>
                        <h4>Нет входного теста</h4>
                        <p>
                            Можете приступить без входного теста и
                            собеседования.
                        </p>
                    </li>
                </ul>
            </section>
            <section className="struct">
                <h4 className="struct-title title">Как начать?</h4>
                <ul className="struct-list container">
                    <li className="struct-list-item">
                        <div>1</div>
                        <h4>Пройти регистрацию</h4>
                        <p>Заполняем данные о себе и выбираем направление.</p>
                    </li>
                    <li className="struct-list-item">
                        <div>2</div>
                        <h4>Произвести оплату</h4>
                        <p>
                            Оплачиваем за вход сумму 830 сомов; это единоразовый
                            платеж.
                        </p>
                        <div className="requisites">
                            <p>
                                <br />
                                Наши реквизиты:
                                <br />
                                Элсом: 0501619690
                                <br />
                                Мбанк: 0703666656
                            </p>
                        </div>
                    </li>
                    <li className="struct-list-item">
                        <div>3</div>
                        <h4>Подтвердить оплату</h4>
                        <p>
                            Отправить скрин оплаты или чек в телеграм аккаунт{' '}
                            <a
                                href="https://t.me/juniors_dev"
                                className="glow-text"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @juniors_dev
                            </a>
                        </p>
                    </li>
                    <li className="line"></li>
                </ul>
            </section>
            <section className="speak container">
                <h2 className="speak-title title">Часто задаваемые вопросы:</h2>
                <ul className="speak-list">
                    <li className="speak-list-item">
                        <img
                            className="eclipse"
                            src={require('../media/eclipse.svg').default}
                            alt="eclipse"
                        />
                        <div className="top-wrap">
                            <h4>Есть ли оффлайн программа?</h4>
                            <p>
                                Наша программа полностью онлайн. Это позволяет
                                вам прокачиваться в любом места и в любое время.
                                Возможны оффлайн митапы в вашем городе.
                            </p>
                        </div>
                    </li>
                    <li className="speak-list-item">
                        <img
                            className="eclipse"
                            src={require('../media/eclipse.svg').default}
                            alt="eclipse"
                        />
                        <div className="top-wrap">
                            <h4>Будут ли менторы?</h4>
                            <p>
                                Менторов в нашей программе нет, так как это не
                                курсы. Но в сообществе и вашей мини группе
                                всегда будет человек, который знает одну тему
                                лучше и вы всегда можете задать ваш вопрос.
                            </p>
                        </div>
                    </li>
                    <li className="speak-list-item">
                        <img
                            className="eclipse"
                            src={require('../media/eclipse.svg').default}
                            alt="eclipse"
                        />
                        <div className="top-wrap">
                            <h4>Когда можно начать?</h4>
                            <p>
                                Начать можете прямо сейчас. Так как мы не курсы,
                                у нас нет даты старта потока. Можете начать в
                                любой момент.
                            </p>
                        </div>
                    </li>
                    <li className="speak-list-item">
                        <img
                            className="eclipse"
                            src={require('../media/eclipse.svg').default}
                            alt="eclipse"
                        />
                        <div className="top-wrap">
                            <h4>Кто может подать?</h4>
                            <p>
                                Начать прокачку могут все, кто изучил один язык
                                программирования.
                            </p>
                        </div>
                    </li>
                    <li className="speak-list-item">
                        <img
                            className="eclipse"
                            src={require('../media/eclipse.svg').default}
                            alt="eclipse"
                        />
                        <div className="top-wrap">
                            <h4>Это курсы?</h4>
                            <p>
                                Это не курсы, это программа прокачки. Программа
                                не закончится вплоть до вашего трудоустройства.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="offer">
                <div className="offer-title-wrap">
                    <h2 className="offer-title-1">СПЕЦИАЛЬНОЕ</h2>
                    <h2 className="offer-title-2">ПРЕДЛОЖЕНИЕ</h2>
                </div>

                <p className="offer-text">
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor.
                    <span>
                        Voluptate exercitation incididunt aliquip deserunt
                        reprehenderit elit laborum.
                    </span>
                </p>
                <ul className="offer-list">
                    <li className="offer-list-item">
                        <img
                            src={require('../media/star.svg').default}
                            alt="star"
                        />
                        onsequat sunt nostrud amet.
                    </li>
                    <li className="offer-list-item">
                        <img
                            src={require('../media/star.svg').default}
                            alt="star"
                        />
                        onsequat sunt nostrud amet.
                    </li>
                    <li className="offer-list-item">
                        <img
                            src={require('../media/star.svg').default}
                            alt="star"
                        />
                        onsequat sunt nostrud amet.
                    </li>
                </ul>
                <a style={{ textDecoration: 'none' }} href="#reg">
                    <button className="offer-btn">Принять участие</button>
                </a>
            </section>
            <section id="reg" className="register">
                <h2 className="register-title">Регистрация</h2>
                {/* <p className="register-text">Начать прокачку прямо сейчас</p> */}
                <form
                    action="submit"
                    className="register-form"
                    onSubmit={register}
                >
                    <div className="register-input-wrapper">
                        <label htmlFor="name">Ваше имя</label>
                        <input
                            type="text"
                            required
                            placeholder="Азамат"
                            className="register-input input1"
                            id="name"
                        />
                    </div>
                    <div className="register-input-wrapper">
                        <label htmlFor="last-name">Ваша фамилия</label>
                        <input
                            type="text"
                            required
                            placeholder="Торокулов"
                            className="register-input input2"
                            id="last-name"
                        />
                    </div>
                    <div className="register-input-wrapper">
                        <label htmlFor="name">Ваша электронная почта</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="register-input input3"
                        />
                    </div>
                    <button className="register-btn">Зарегистрироваться</button>
                </form>
            </section>
            <Footer />
            <div id="myModal" className="modal" ref={modal}>
                <Modal closeModal={closeModal} />
            </div>
            <div id="myBtn" className="bell" onClick={openModal}>
                <img src={require('../media/bell.png')} alt="bell" />
            </div>
        </div>
    );
};

export default MainPage;
