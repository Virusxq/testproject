/* Показать/скрыть контент внутри виджетов */
const question = document.querySelectorAll('.question');

// Находим все виджеты на странице
question.forEach(function (question) {

    // Слушаем клик внутри виджета
    question.addEventListener('click', function (e) {
        // Если клик по заголовку - тогда скрываем/показывае тело виджета
        if (e.target.classList.contains('question')) {
            e.target.classList.toggle('question-active');
            e.target.nextElementSibling.classList.toggle('ansver');
        }
    });
});



