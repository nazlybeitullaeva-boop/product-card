interface IUser {
  name: string;
  age: number;
  email?: string;
}

interface IStudent extends IUser {
  course: string;
}

let uploadStatus: 'loading' | 'success' | 'error' = 'loading';

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';
let textFormat: TextFormat = 'uppercase';

function sum(a: number, b: number): number {
  return a + b;
}

function formatText(text: string, format: TextFormat): string {
  if (format === 'uppercase') {
    return text.toUpperCase();
  }

  if (format === 'lowercase') {
    return text.toLowerCase();
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

function removeCharacter(text: string, character: string): string {
  return text.replaceAll(character, '');
}

const users: IUser[] = [
  { name: 'Барсик', age: 1 },
  { name: 'Мурка', age: 4 },
];
const olderCats = users.filter(user => user.age >= 2);

console.log(sum(2, 3));
console.log(formatText('привет', textFormat));
console.log(formatText('ПРИВЕТ', 'lowercase'));
console.log(formatText('привет', 'capitalize'));
console.log(removeCharacter('банан', 'а'));
console.log(olderCats);

export {};
