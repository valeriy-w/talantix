"use client"
import { useState } from 'react';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setEmailError(true);
            return;
        } else {
            setEmailError(false);
    }

        if (!isPrivacyChecked) {
            alert('Необходимо согласиться с политикой конфиденциальности');
            return;
        }

        console.log('Отправка формы:', {
            email,
            question,
            isPrivacyChecked,
        });

        setEmail('');
        setQuestion('');
        setIsPrivacyChecked(false);
    };

    return (
        <div className="form-block" id="contact">
            <div className="form">
                <h1>Заполните форму</h1>
                <form className="form-container" onSubmit={handleSubmit} noValidate>
                    <div className="form-container-block">
                        <textarea
                            id="question"
                            name="question"
                            rows="4"
                            placeholder="Напишите свой вопрос"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>
                    <div className="form-container-block">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Введите свой email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={emailError ? 'error-border' : ''} 
                        />
                        {emailError && <p className="error-message">Неправильно указана почта</p>} 

                        <div className="policy">
                            <input
                                type="checkbox"
                                id="privacy"
                                name="privacy"
                                checked={isPrivacyChecked}
                                onChange={(e) => setIsPrivacyChecked(e.target.checked)}
                            />
                            <label htmlFor="privacy" className="checkbox-label">
                                Я ознакомлен(а)
                                <a href="#" target="_blank"> с политикой конфиденциальности</a> и
                                согласен(на) на обработку <a href="#" target="_blank">  персональных данных.</a>
                            </label>
                        </div>
                        <input className="button black" type="submit" value="Отправить" />
                    </div>
                </form>
            </div>
        </div>
    );
}
