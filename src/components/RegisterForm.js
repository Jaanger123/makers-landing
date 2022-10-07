import React, { useState } from 'react';

import {
    validateEmail,
    validateNameOrLastName,
    validateNickname,
    validatePassword,
} from '../utils';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [stack, setStack] = useState('Выберите стэк');

    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        nickname: '',
        email: '',
        password: '',
        passwordConfirm: '',
        stack: 'Выберите стэк',
    });

    const comparePasswords = (e) => {
        // setPasswordConfirm(() => e.target.value);
        setUserData((prev) => {
            return { ...prev, passwordConfirm: e.target.value };
        });

        if (userData.password !== e.target.value) {
            e.target.parentNode.classList.add('password-check');
        } else {
            e.target.parentNode.classList.remove('password-check');
        }
    };

    const removeErrorMessage = (e) => {
        e.target.parentNode.classList.remove('error-message');
    };

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const select = form[6];

        for (let input in form) {
            if (
                Number.isInteger(+input) &&
                form[input].className.includes('register-input') &&
                !form[input].value.trim()
            ) {
                form[input].parentNode.classList.add('error-message');
            }
        }

        if (select.value === select[0].value) {
            select.parentNode.classList.add('error-message');
        }

        // form.reset();
        // setStack('Выберите стэк');
        setUserData({
            name: '',
            lastName: '',
            nickname: '',
            email: '',
            password: '',
            passwordConfirm: '',
            stack: 'Выберите стэк',
        });
    };

    const nicknameInput = (e) => {
        const input = e.target;
        input.parentNode.classList.remove('validation');
        if (input.value.startsWith('@') && input.value.length === 1) {
            input.value = '';
        }
    };

    return (
        <section id="reg" className="register">
            <h2 className="register-title">Регистрация</h2>
            <form
                action="submit"
                className="register-form"
                onSubmit={submitForm}
            >
                <div className="register-input-wrapper name-last_name">
                    <div className="name-wrapper" data-error="Введите имя">
                        <label htmlFor="name">Ваше имя:</label>
                        <input
                            type="text"
                            placeholder="Азамат"
                            className="register-input"
                            id="name"
                            value={userData.name}
                            onChange={(e) => {
                                removeErrorMessage(e);
                                validateNameOrLastName(e);
                                // setName(e.target.value);
                                setUserData((prev) => {
                                    return { ...prev, name: e.target.value };
                                });
                            }}
                        />
                    </div>
                    <div
                        className="last_name-wrapper"
                        data-error="Введите фамилию"
                    >
                        <label htmlFor="last_name">Ваша фамилия:</label>
                        <input
                            type="text"
                            placeholder="Торокулов"
                            className="register-input"
                            id="last_name"
                            value={userData.lastName}
                            onChange={(e) => {
                                removeErrorMessage(e);
                                validateNameOrLastName(e, true);
                                // setLastName(e.target.value);
                                setUserData((prev) => {
                                    return {
                                        ...prev,
                                        lastName: e.target.value,
                                    };
                                });
                            }}
                        />
                    </div>
                </div>
                <div
                    className="register-input-wrapper"
                    data-error="Введите ник в телеграме"
                >
                    <label htmlFor="telegram-nick">Ваш ник в телеграме:</label>
                    <input
                        type="text"
                        placeholder="@example"
                        className="register-input"
                        id="telegram-nick"
                        value={userData.nickname}
                        onChange={(e) => {
                            removeErrorMessage(e);
                            validateNickname(e);
                            // setNickname(e.target.value);
                            setUserData((prev) => {
                                return { ...prev, nickname: e.target.value };
                            });
                        }}
                        onBlur={nicknameInput}
                    />
                </div>
                <div
                    className="register-input-wrapper"
                    data-error="Введите электронную почту"
                >
                    <label htmlFor="email">Ваша электронная почта:</label>
                    <input
                        type="text"
                        placeholder="example@gmail.com"
                        className="register-input"
                        id="email"
                        value={userData.email}
                        onChange={(e) => {
                            removeErrorMessage(e);
                            validateEmail(e);
                            // setEmail(e.target.value);
                            setUserData((prev) => {
                                return { ...prev, email: e.target.value };
                            });
                        }}
                    />
                </div>
                <div
                    className="register-input-wrapper"
                    data-error="Введите пароль"
                >
                    <label htmlFor="password">Введите пароль:</label>
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="register-input"
                        id="password"
                        value={userData.password}
                        onChange={(e) => {
                            // e.target.value =
                            //     '●'.repeat(e.target.value.length - 1) +
                            //     e.target.value.at(-1);
                            removeErrorMessage(e);
                            validatePassword(e);
                            // setPassword(e.target.value);
                            setUserData((prev) => {
                                return { ...prev, password: e.target.value };
                            });
                        }}
                        // onBlur={(e) => {
                        //     e.target.value = '●'.repeat(e.target.value.length);
                        // }}
                    />
                </div>
                <div
                    className="register-input-wrapper"
                    data-error="Подтвердите пароль"
                    password-error="Пароли не совпадают"
                >
                    <label htmlFor="password-confirmation">
                        Подтвердите пароль:
                    </label>
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="register-input"
                        id="password-confirmation"
                        value={userData.passwordConfirm}
                        onChange={(e) => {
                            removeErrorMessage(e);
                            comparePasswords(e);
                            setUserData((prev) => {
                                return {
                                    ...prev,
                                    passwordConfirm: e.target.value,
                                };
                            });
                        }}
                    />
                </div>
                <div
                    className="register-input-wrapper"
                    data-error="Выберите стэк"
                >
                    <label htmlFor="stack">Выберите стэк:</label>
                    <select
                        name="stack"
                        id="stack"
                        value={userData.stack}
                        onChange={(e) => {
                            removeErrorMessage(e);
                            // setStack(e.target.value);
                            setUserData((prev) => {
                                return { ...prev, stack: e.target.value };
                            });
                        }}
                    >
                        <option disabled>Выберите стэк</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                    </select>
                </div>
                <button className="btn register-btn">Зарегистрироваться</button>
            </form>
        </section>
    );
};

export default RegisterForm;
