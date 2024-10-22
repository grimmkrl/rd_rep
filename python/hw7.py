import json  # Імпортуємо модуль для роботи з JSON

# Відкриваємо файл 'spaces.json' для читання з кодуванням 'utf-8'
with open('spaces.json', 'r', encoding='utf-8') as file:
    spaces_json = json.load(file)  # Парсимо JSON у об'єкт Python

# Перебираємо всі папки у масиві 'folders', якщо такий існує
for folder in spaces_json.get('folders', []):
    # Перебираємо всі списки у поточній папці, якщо такі існують
    for lst in folder.get('lists', []):
        # Перевіряємо, чи існує ключ 'name' та чи починається він зі слова 'test'
        if lst.get('name', '').startswith('test'):
            # Отримуємо простір (space) з папки, якщо він існує
            space = folder.get('space', {})
            print(space.get('name'))  # Виводимо ім'я простору
            print(space.get('id'))    # Виводимо ID простору