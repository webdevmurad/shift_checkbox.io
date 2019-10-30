// Создаем переменную checkboxes и даем ей все флажки
const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

// создаем переменную для последнего отмеченного флажка
let lastChecked;

// Создаем функцию которая будет отмечать флажки при нажатий shift и даем ей один параметр
function handleCheck(e) {
    // создаем переменную для чекбоксов которые будут между отмеченными
    let inBetween = false;
    // проверяем если мы нажали shift И выбраны флажки
    if (e.shiftKey && this.checked) {
        // перебираем флажки 
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            // проверяем чекбоксы начало и конец
            if (checkbox === this || checkbox === lastChecked) {
                // этот момент вам лучше посмотреть в консоле
                // console.log(inBetween);
                inBetween = !inBetween;
            }
            // все инпуты которые находятся между выбранными, получают true
            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

// Перебираем все флажки и даем им обработчик событий клик
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));