export function checkNameOrLastName(value) {
    const alphaRe = /[a-z]/;
    const numberRe = /\d/;
    const specialRe = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return (
        !alphaRe.test(value) &&
        !numberRe.test(value) &&
        !specialRe.test(value) &&
        !(value.length > 32)
    );
}

export function validateNameOrLastName(e, isLastName = false) {
    const value = e.target.value.trim();
    const alphaRe = /[a-z]/;
    const numberRe = /\d/;
    const specialRe = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let message = '';

    if (alphaRe.test(value)) {
        message = 'Введите данные на русском';
    } else if (numberRe.test(value)) {
        message = isLastName ? 'Фамилие содержит цифры' : 'Имя содержит цифры';
    } else if (value.length > 32) {
        message = isLastName
            ? 'Слишком длинная фамилия'
            : 'Слишком длинное имя';
    } else if (specialRe.test(value)) {
        message = isLastName
            ? 'Фамилия не должна содержать спец. символы'
            : 'Имя не должно содержать спец. символы';
    }
    if (!checkNameOrLastName(value) && !!value) {
        e.target.parentNode.setAttribute('validation-error', message);
        e.target.parentNode.classList.add('validation');
    } else {
        e.target.parentNode.classList.remove('validation');
    }
}

export function checkNickname(value) {
    return (
        value.startsWith('@') &&
        value.match(/@/g).length === 1 &&
        value.length > 5
    );
}

export function validateNickname(e) {
    let value = e.target.value.trim();

    if (!value.startsWith('@')) {
        e.target.value = '@' + e.target.value;
        value = e.target.value;
    }
    if (!!value.match(/@/g) && value.match(/@/g).length > 1) {
        e.target.value = '@' + e.target.value.replaceAll('@', '');
        value = e.target.value;
    }
    if (value.length < 6) {
        e.target.parentNode.setAttribute(
            'validation-error',
            'Слишком короткий ник'
        );
        e.target.parentNode.classList.add('validation');
    } else {
        e.target.parentNode.classList.remove('validation');
    }
}

export function checkEmail(value) {
    const emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRe.test(value);
}

export function validateEmail(e) {
    let value = e.target.value.trim();

    if (!checkEmail(value) && !!value) {
        e.target.parentNode.setAttribute(
            'validation-error',
            'Введите правильную электронную почту'
        );
        e.target.parentNode.classList.add('validation');
    } else {
        e.target.parentNode.classList.remove('validation');
    }
}

export function checkPassword(value) {
    const passwordRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    return passwordRe.test(value);
}

export function validatePassword(e) {
    let value = e.target.value.trim();
    let message =
        'Пароль должен содержать буквы и цифры, также одну заглавную букву';

    if (value.length < 8) {
        message = 'Пароль слишком короткий';
    } else if (value.length > 16) {
        message = 'Пароль слишком длинный';
    }
    // ●
    if (!checkPassword(value) && !!value) {
        e.target.parentNode.setAttribute('validation-error', message);
        e.target.parentNode.classList.add('validation');
    } else {
        e.target.parentNode.classList.remove('validation');
    }
}
