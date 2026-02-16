// import { fireEvent } from "@testing-library/dom";
import { use, useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼</h1>;
}
function Form() {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("hello");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😎 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
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
        {item.quantity}
        {item.description}
        <button>❌</button>
      </span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>😊 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

// export default function App() {
//   const [items, setItems] = useState([]);
//   const [clear, setClear] = useState();

//   function handleClearList(item) {
//     setClear((item) => item.splice());
//   }

//   function handleNewItem(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleDeleteItem(id) {
//     setItems((items) => items.filter((item) => item.id !== id));
//   }

//   function handleToggleItem(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item,
//       ),
//     );
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleNewItem} />
//       <ParkingList
//         items={items}
//         onDeleteItem={handleDeleteItem}
//         onToggleItem={handleToggleItem}
//         onClearList={handleClearList}
//       />
//       <Stats items={items} />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🌲Far Away 💼</h1>;
// }

// function Form({ onAddItems }) {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItem = {
//       quantity,
//       description,
//       id: Date.now(),
//       packed: false,
//     };

//     onAddItems(newItem);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       {" "}
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option key={num}>{num}</option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="New item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }

// function ParkingList({ items, onDeleteItem, onToggleItem, onClearList }) {
//   const [sortBy, setSortBy] = useState("input");
//   let sortedItems;

//   if (sortBy === "input") sortedItems = items;
//   if (sortBy === "description")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));

//   if (sortBy === "packed")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));

//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             item={item}
//             onDeleteItem={onDeleteItem}
//             onToggleItem={onToggleItem}
//             key={item.id}
//           />
//         ))}
//       </ul>

//       <div className="actions">
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">Sort by input order</option>
//           <option value="description">Sort by description</option>
//           <option value="packed">Sort by packed status</option>
//         </select>
//       </div>

//       <button onClick={() => onClearList(items)}>Clear list</button>
//     </div>
//   );
// }

// function Item({ item, onDeleteItem, onToggleItem }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => {
//           onToggleItem(item.id);
//         }}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.description} {item.quantity}
//       </span>
//       <button onClick={() => onDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({ items }) {
//   if (!items.length)
//     return (
//       <p className="stats">
//         <em>Start adding some items in your packing list 🚀</em>
//       </p>
//     );

//   const numItems = items.length;
//   const numPacked = items.filter((item) => item.packed).length;
//   const percentage = Math.round((numPacked / numItems) * 100);

//   return (
//     <footer className="stats">
//       <em>
//         {percentage === 100 ? (
//           "You got everything! Ready to go 🛫"
//         ) : (
//           <span>
//             💼You have {numItems} items on your list, and you already packed{" "}
//             {numPacked} ({percentage}%)
//           </span>
//         )}
//       </em>
//     </footer>
//   );
// }
