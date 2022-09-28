import React from 'react';
import { useRef } from 'react';

const Modal = ({ closeModal }) => {
    const modalFormRef = useRef();

    const subscribeToUpdates = (e) => {
        e.preventDefault();
        const form = e.target;

        const number = form[0].value;
        const question = form[1].value;

        form.reset();
        console.log(number, question);
    };

    return (
        <div className="modal-content">
            <span className="close" onClick={closeModal}>
                &times;
            </span>
            <h3 className="modal-title">
                Получать уведомления о следующих ивентах
            </h3>
            <form
                action="submit"
                className="modal-form"
                ref={modalFormRef}
                onSubmit={subscribeToUpdates}
            >
                <input
                    className="modal-inp1"
                    type="number"
                    required
                    placeholder="Номер телефона"
                />
                <div className="modal-info">
                    Необязательно <span>*</span>
                </div>
                <input
                    className="modal-inp2"
                    type="text"
                    placeholder="Напишите свой вопрос"
                />
                <button className="modal-btn">Отправить</button>
            </form>
        </div>
    );
};

export default Modal;
