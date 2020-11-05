function prediction() {
    let answer = '';
    let randomNumber;

    randomNumber = Math.random(randomNumber) * 20;
    randomNumber = Math.ceil(randomNumber);

    switch(randomNumber){
        case 1: answer = 'Бесспорно';
        break;
        case 2:  answer = 'Предрешено';
        break;
        case 3: answer = 'Никаких сомнений';
        break;
        case 4: answer = 'Определённо да';
        break;
        case 5: answer = 'Можешь быть уверен(а) в этом';
        break;
        case 6: answer = 'Мне кажется — «да»';
        break;
        case 7: answer = 'Вероятнее всего';
        break;
        case 8: answer = 'Хорошие перспективы';
        break;
        case 9: answer = 'Знаки говорят — «да»';
        break;
        case 10: answer = 'Пока не ясно, попробуй снова';
        break;
        case 11: answer = 'Спроси позже';
        break;
        case 12: answer = 'Лучше не рассказывать';
        break;
        case 13: answer = 'Сейчас нельзя предсказать';
        break;
        case 14: answer = 'Сконцентрируйся и спроси опять';
        break;
        case 15: answer = 'Даже не думай';
        break;
        case 16: answer = 'Мой ответ — «нет»';
        break;
        case 17: answer = 'По моим данным — «нет»';
        break;
        case 18: answer = 'Перспективы не очень хорошие';
        break;
        case 19: answer = 'Весьма сомнительно';
        break;
        case 20: answer = 'Да';
        break;
        default: answer = 'ERROR';
    }

    document.querySelector('.prediction').innerHTML= answer;
}