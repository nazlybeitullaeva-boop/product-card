import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers);

const kitchenAppliances = ["Чайник", "Тостер", "Блендер", "Микроволновка", "Кофемашина"];
const hasCoffeeMachine = kitchenAppliances.includes("Кофемашина");
console.log(hasCoffeeMachine);

function reverseArray(arr) {
  return [...arr].reverse();
}

const arraysToReverse = [numbers, kitchenAppliances];
const reversed = arraysToReverse.map((arr) => reverseArray(arr));
console.log(reversed);

console.log(comments);

const comEmailComments = comments.filter((comment) => comment.email.endsWith(".com"));
console.log(comEmailComments);

const idComments = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(idComments);

const idName = comments.map((comment) => ({
  id: comment.id,
  name: comment.name
}));
console.log(idName);

const validatedComments = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(validatedComments);

const emails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emails);

const emails2 = comments.reduce((acc, comment) => [...acc, comment.email], []);
console.log(emails2);

const emailsMap = comments.map((comment) => comment.email);
console.log(emailsMap);

const emailsToString = emailsMap.toString();
console.log(emailsToString);

const emailsJoin = emailsMap.join(", ");
console.log(emailsJoin);