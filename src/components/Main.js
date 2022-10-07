import React from 'react';

const Main = () => {
    return (
        <>
            <section className="intro container">
                <h2 className="intro-title title">
                    Узнай все о нашей программе за 2 минуты
                </h2>
                <div className="iframe-container">
                    <div className="iframe-wrapper">
                        <iframe
                            align="center"
                            src="https://www.youtube.com/embed/fD8yDfnl9i4"
                            title="Что Такое Juniors Dev?"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
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
                        <h4>Имеют архитектуру и требования</h4>
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
                    <li className="type-list-item">
                        <span>👩‍⚕️</span>
                        <h4>Парные собеседования</h4>
                        <p>Тренировка к собеседованию.</p>
                    </li>
                    <li className="type-list-item">
                        <span>💻</span>
                        <h4>Live coding сессии</h4>
                        <p>Совместная работа над задачей.</p>
                    </li>
                    <li className="type-list-item">
                        <span>💪🏽</span>
                        <h4>Ежедневные стэндапы</h4>
                        <p>Ежедневный треккинг вашего прогресса.</p>
                    </li>
                    <li className="type-list-item">
                        <span>📚</span>
                        <h4>Своя группа из 10-15 человек</h4>
                        <p>Всегда есть у кого спросить и обсудить.</p>
                    </li>
                    <li className="type-list-item">
                        <span>🍿</span>
                        <h4>Совместные проекты</h4>
                        <p>Прокачка командной работы.</p>
                    </li>
                    <li className="type-list-item">
                        <span>✈️</span>
                        <h4>Ивенты</h4>
                        <p>Ивенты и митапы с действующими разработчиками.</p>
                    </li>
                    <li className="type-list-item">
                        <span>🌈</span>
                        <h4>Обсуждения </h4>
                        <p>Всегда есть с кем обсудить проблему задачу.</p>
                    </li>
                    <li className="type-list-item">
                        <span>🍼</span>
                        <h4>Buddy</h4>
                        <p>Человек, с которым всегда можете обсудить что-то</p>
                    </li>
                </ul>
                <a href="https://t.me/juniors_devBot">
                    <button className="btn type-btn">Зарегистрироваться</button>
                </a>
                <h2 className="type-subtitle title">А также:</h2>
                <ul className="type-list sub-type-list">
                    <li className="type-list-item-bottom">
                        <span>🛠</span>
                        <h4>У нас нет даты начала</h4>
                        <p>
                            Начать можете прямо сейчас. У нас нет даты старта
                            потока. Можете начать в любой момент.
                        </p>
                    </li>
                    <li className="type-list-item-bottom">
                        <span>👩‍💻</span>
                        <h4>Знание языка программирования</h4>
                        <p>Необходимо знать один язык программирования.</p>
                    </li>
                    <li className="type-list-item-bottom">
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
                    <li className="struct-list-item struct-one">
                        <div className="struct-circle">1</div>
                        <h4>Внести оплату</h4>
                        <p>
                            Это единоразовый платеж. Других платежей нет.
                            <br />
                            Сумма: 830 сомов ($10);
                            <br />
                            Сохраните фото чека или скрин об оплате.
                        </p>
                    </li>
                    <li className="struct-list-item struct-two">
                        <div className="struct-circle">2</div>
                        <h4>Наши реквизиты</h4>
                        <div className="requisites">
                            <p>Элсом: 0501619690</p>
                            <p>Мбанк: 0703666656</p>
                            <p>Оптима: 4169 5853 5847 4186</p>
                        </div>
                    </li>
                    <li className="struct-list-item struct-three">
                        <div className="struct-circle">3</div>
                        <h4>Начинаем прокачку</h4>
                        <p>
                            Через некоторое время наши модераторы добавят вас на
                            наш сервис. Отправить чек или скрин оплаты через
                            телеграм бот{' '}
                            <a
                                href="https://t.me/juniors_devBot"
                                className="glow-text"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @juniors_devBot
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
                    <h2 className="offer-title-1">СТОИМОСТЬ</h2>
                </div>

                <p className="offer-text">
                    Вы платите только за вход. Только один раз. Других
                    обязательных платежей нет.
                </p>
                <div className="offer-cost">
                    <p className="offer-cost-desc">
                        <span className="glow-text offer-big">Pre-junior</span>
                        <br />
                        Единоразовая оплата до трудоустройства
                        <br />
                        <span className="glow-text offer-big">$10</span> / до
                        трудоустройства
                    </p>
                    <p>
                        <span className="offer-big">Наши реквизиты:</span>
                        <br />
                        Элсом: 0501619690
                        <br />
                        Мбанк: 0703666656
                    </p>
                </div>
                <a
                    style={{ textDecoration: 'none' }}
                    href="https://t.me/juniors_devBot"
                >
                    <button className="btn offer-btn">Принять участие</button>
                </a>
            </section>
        </>
    );
};

export default Main;
