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

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleNewItem} />
      <ParkingList items={items} />
      <Stats />
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
    const newItem = {
      quantity,
      description,
      id: Date.now(),
      isPacked: true,
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

function ParkingList({ items }) {
  console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <span>❌</span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

// const newObj = [{ name: "Idowu", age: 28 }];
// // console.log(newObj);

// const newArr = [...newObj, newObj];
// console.log(newArr);
