// import { fireEvent } from "@testing-library/dom";
import { use, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "/PackingList";
import Stats from "/Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
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

  function handleClearList(tem) {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// ___________________________

// After the child to parent communication
// export default function App() {
//   const [items, setItems] = useState([]);

//   function handleNewItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleDeleteItem(id) {
//     setItems((items) => items.filter((item) => item.id !== id));
//   }

//   function handleToggleItem(id) {
//     console.log(id);
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item,
//       ),
//     );
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleNewItems} />
//       <PackingList
//         item={items}
//         onToggleItem={handleToggleItem}
//         onDeleteItem={handleDeleteItem}
//       />
//       <Stats />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🌴Far Away 💼</h1>;
// }
// function Form({ onAddItems }) {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItems = {
//       description,
//       quantity,
//       id: Date.now(),
//       packed: false,
//     };

//     onAddItems(newItems);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your 😎 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }
// function PackingList({ item, onToggleItem, onDeleteItem }) {
//   return (
//     <div className="list">
//       <ul>
//         {item.map((item) => (
//           <Item
//             item={item}
//             key={item.id}
//             onToggleItem={onToggleItem}
//             onDeleteItem={onDeleteItem}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item, onToggleItem, onDeleteItem }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => onToggleItem(item.id)}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity}
//         {item.description}
//         <button onClick={() => onDeleteItem(item.id)}>❌</button>
//       </span>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>😊 You have X items on your list, and you already packed X (X%)</em>
//     </footer>
//   );
// }

// // Before lifting up state
// export default function App() {
//   return (
//     <div className="app">
//       <Logo />
//       <Form />
//       <PackingList />
//       <Stats />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🌴Far Away 💼</h1>;
// }
// function Form() {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItems = {
//       description,
//       quantity,
//       id: Date.now(),
//       packed: false,
//     };

//     console.log(newItems);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your 😎 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }
// function PackingList() {
//   return (
//     <div className="list">
//       <ul>
//         {initialItems.map((item) => (
//           <Item item={item} key={item.id} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item }) {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity}
//         {item.description}
//         <button>❌</button>
//       </span>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>😊 You have X items on your list, and you already packed X (X%)</em>
//     </footer>
//   );
// }
