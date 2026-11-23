function sum(a: number, b: number): number { return a + b; }
console.log(sum(2, 3));
// ДЗ №16. Этот файл уже подключён в app.component.ts.
// Пиши решения под соответствующими комментариями.

// === ИНТЕРФЕЙСЫ ===

// №6. Создай IUser: поля на выбор, одно поле необязательное.
interface IUser {
  name: string;
  age: number;
  email?: string;
}

// №7. Создай интерфейс с префиксом I, расширяющий IUser своими полями.
interface IStudent extends IUser {
  course: string;
}

// === ПЕРЕМЕННЫЕ И ТИПЫ ===

// №4. uploadStatus: только 'loading', 'success', 'error'.
let uploadStatus: 'loading' | 'success' | 'error' = 'loading';

// №5. textFormat: только 'uppercase', 'lowercase', 'capitalize'.
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';
let textFormat: TextFormat = 'uppercase';

// === ФУНКЦИИ ===

// №3. Здесь напиши свою функцию sum: два числа → их сумма.

// №8. Функция форматирования строки по варианту из пункта №5.
function formatText(text: string, format: TextFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }

  if (format === 'lowercase') {
    return text.toLowerCase();
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

// №9. Функция удаления переданного символа из строки.
function removeCharacter(text: string, character: string): string {
  return text.replaceAll(character, '');
}

// === МАССИВЫ ===

// №10. Создай массив пользователей IUser и отфильтруй по одному признаку.
const users: IUser[] = [
  { name: 'Барсик', age: 1 },
  { name: 'Мурка', age: 4 },
];
const olderCats = users.filter(user => user.age >= 2);

// === ПРОВЕРКА ===

// Здесь вызывай свои функции через console.log и проверяй результат.
console.log(formatText('привет', textFormat)); // ПРИВЕТ
console.log(formatText('ПРИВЕТ', 'lowercase')); // привет
console.log(formatText('привет', 'capitalize')); // Привет
console.log(removeCharacter('банан', 'а')); // бнн
console.log(olderCats); // [{ name: 'Мурка', age: 4 }]

export {};
