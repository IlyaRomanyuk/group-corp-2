import React from 'react'

export const Home = () => {
    return (
        <div className="home">
            <h1>Messenger</h1>
            <p>Выберите чат</p>

            <h3>Как вести себя в соцсетях или правила нетикета</h3>
            <div className="home__rules">
                <ol>
                    <li>Не стоит писать приветствие отдельным сообщением</li>
                    <li>Помните, что сообщение не передает интонацию</li>
                    <li>Не перебарщивайте с эмодзи</li>
                    <li>Старайтесь как можно меньше использовать голосовые сообщения</li>
                    <li>Прекратите дробить одно сообщение на несколько коротких</li>
                    <li>Выберите для общения один канал связи</li>
                </ol>
            </div>
        </div>
    )
}