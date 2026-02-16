// import { fireEvent } from "@testing-library/dom";
import { use, useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);
  const [clear, setClear] = useState();

  function handleClearList(item) {
    setClear((item) => item.splice());
  }

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleNewItem} />
      <ParkingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌲Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      quantity,
      description,
      id: Date.now(),
      packed: false,
    };

    onAddItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {" "}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="New item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function ParkingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>

      <button onClick={() => onClearList(items)}>Clear list</button>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          "You got everything! Ready to go 🛫"
        ) : (
          <span>
            💼You have {numItems} items on your list, and you already packed{" "}
            {numPacked} ({percentage}%)
          </span>
        )}
      </em>
    </footer>
  );
}

// Data for JavaScript Review
console.log("_____JavaScript Review______");

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
const book = getBook(2);

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);

// const titles = books.map((book) => book.title);

// function getTotalReviewCount(book) {
//   console.log(book);
//   return (
//     book?.reviews?.goodreads?.reviewsCount +
//       book?.reviews?.librarything?.reviewsCount ?? 0
//   );
// }

// getTotalReviewCount(book);

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviewCount(book),
// }));

// console.log(essentialData);

// const longBooks = books
//   .filter((book) => book.pages >= 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooks);

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);

// console.log(adventureBooks);

// const allBooksPages = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(allBooksPages);

// // Array.sort
// const y = [3, 7, 1, 9, 6];
// const ascending = y.slice().sort((a, b) => a - b);
// const descending = y.slice().sort((a, b) => b - a);
// console.log(ascending, descending);
// console.log(y);

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortedByPages);
console.log("apple".localeCompare("orange"));
console.log("orange".localeCompare("apples"));
console.log("orange".localeCompare("orange"));

// Working with Immutable arrays
// 1) Add book object to Array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2) Delete book object from an array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);
console.log(booksAfterDelete);

// Update the book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book,
);

console.log(booksAfterUpdate);

// const correctNobleArr = nobleArr.map((detail) =>
//   detail.lastName === "Adedotun"
//     ? { lastName: "Adeleke" }
//     : detail && detail.middleName === "Adeleke"
//       ? { middleName: "Adedotun" }
//       : detail,
// );

const nobleArr = [
  { name: "Idowu" },
  { age: 28 },
  { lastName: "Adedotun" },
  { middleName: "Adeleke" },
];

const correctNobleArr = nobleArr.map((detail) =>
  detail.lastName === "Adedotun" ? { lastName: "Adeleke" } : detail,
);

console.log(correctNobleArr);

// Array.slice
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2));
// const allArray = arr.slice(1, 3);
// const lastArry = arr.slice(-1);
// console.log(lastArry);
// console.log(allArray);
// console.log(arr);

// Array.sort revisited

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners);
console.log(owners.slice().sort((a, b) => a - b));
console.log(owners.slice().sort((a, b) => b - a));
console.log(owners.slice().sort());

console.log(movements);
console.log(owners);

const ascendingSorted = movements.slice(sort(a, b) => {
  if (a > b) 
})
