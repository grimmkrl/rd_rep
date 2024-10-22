/*const fs = require('fs'); // Підключаємо стандартний модуль fs для парсингу json файлу

// Читаємо потрібний файл json
fs.readFile('spaces.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err); // Цей код виводить помилку в консоль, якщо не вдається прочитати json файл
        return;
    }

    const spacesJson = JSON.parse(data);  // Парсинг JSON

    if (spacesJson.folders) {
        spacesJson.folders.forEach(folder => {
            if (folder.lists) {
                folder.lists.forEach(list => {
                    if (list.name && list.name.startsWith('test')) { // Додаємо умову виводити space.name та space.id для тих lists у яких імя починається на слово test
                        console.log(folder.space.name);
                        console.log(folder.space.id);
                    }
                });
            }
        });
    }
});*/

const fs = require('fs'); // Підключаємо модуль 'fs' для роботи з файловою системою

fs.readFile('spaces.json', 'utf8', function (err, data) { // Читаємо файл 'spaces.json' з кодуванням 'utf8'
    if (err) { // Якщо сталася помилка під час читання файлу
        console.error('Error reading file:', err); // Виводимо помилку в консоль
        return; // Завершуємо функцію, якщо є помилка
    }

    const spacesJson = JSON.parse(data); // Парсимо JSON-стрічку з файлу у об'єкт

    if (spacesJson.folders) { // Перевіряємо, чи є властивість 'folders' у об'єкті spacesJson
        for (var i = 0; i < spacesJson.folders.length; i++) { // Перебираємо всі елементи у масиві 'folders'
            var folder = spacesJson.folders[i]; // Отримуємо поточний елемент 'folder'

            if (folder.lists) { // Перевіряємо, чи є властивість 'lists' у 'folder'
                for (var j = 0; j < folder.lists.length; j++) { // Перебираємо всі елементи у масиві 'lists'
                    var list = folder.lists[j]; // Отримуємо поточний елемент 'list'

                    if (list.name && list.name.startsWith('test')) { // Перевіряємо, чи існує 'name' у 'list' та чи починається воно зі слова 'test'
                        console.log(folder.space.name); // Виводимо ім'я простору (space) у консоль
                        console.log(folder.space.id); // Виводимо id простору (space) у консоль
                    }
                }
            }
        }
    }
});
