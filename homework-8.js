 const userInfo = {
name: "Nazly",
lastName: "Beitullaeva",
email: "nazlybeitullaeva@gmail.com",
age: 17,
country: "Russia",
city: "Bahchisaray"
}

const infoCar = {
brand: "Audi",
model: "RS6 Avant",
releaseYear: 2024,
transmissionType: "automatic",
color: "Mythos black",
}

userInfo.carOwner = infoCar;

function checkMaxSpeed(InfoCar) {
if ("MaxSpeed" in InfoCar) {
  return;
} else {
  InfoCar.MaxSpeed = 250;

}
}

function showInfoCar(InfoCar, color) {
  console.log(InfoCar[color]);
}
showInfoCar(infoCar, "color");

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];

const infoBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "красный",
    genre: "фэнтези"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "чёрный",
    genre: "антиутопия"
  },
  {
    title: "Маленький принц",
    author: "Антуан де Сент-Экзюпери",
    year: 1943,
    coverColor: "жёлтый",
    genre: "сказка"
  },
  {
    title: "Великий Гэтсби",
    author: "Фрэнсис Скотт Фицджеральд",
    year: 1925,
    coverColor: "синий",
    genre: "роман"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    coverColor: "коричневый",
    genre: "роман"
  }
];

const infoBooksSpiderman = [
  {
    title: "Spider-Man: Kraven's Last Hunt",
    author: "J. M. DeMatteis",
    year: 1987,
    coverColor: "чёрный",
    genre: "супергероика"
  },
  {
    title: "Spider-Man: Blue",
    author: "Jeph Loeb",
    year: 2002,
    coverColor: "синий",
    genre: "супергероика"
  },
  {
    title: "Spider-Man: Life Story",
    author: "Chip Zdarsky",
    year: 2019,
    coverColor: "красный",
    genre: "супергероика"
  }
]

const allBooks = infoBooks.concat(infoBooksSpiderman);
console.log(allBooks);

function addBooks(allBooks) {
  const isRareAllBooks = allBooks.map(book => {
    if (book.year < 2000) {
      book.isRare = true;
    } else {
      book.isRare = false;
    }
      return book;
    }); 
  return isRareAllBooks;
}

  console.table(addBooks(allBooks));

  