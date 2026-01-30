import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      {/* <ParkingList /> */}
      <Stats />
    </div>
  );
}

// function Logo() {
//   return <h1>🌲Far Away 💼</h1>;
// }

// function Form() {
//   const [quantity, setQuantity] = useState(1);
//   const [description, setDescription] = useState("");
//   console.log(quantity);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const newItems = { quantity, description, id: Date.now(), isParked: false };
//     console.log(newItems);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option key={num}>{num}</option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="items..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }

// function ParkingList() {
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
//   return <li>{item.description}</li>;
// }

// function Stats() {
//   return (
//     <footer className="stats">
//       <em>💼You have X items on your list, and you already packed X (X%)</em>
//     </footer>
//   );
// }

// function Logo() {
//   return <h1></h1>;
// }
// function Form() {
//   // Three steps to implement controlled elements techniqu
//   // 1. Create a piece of states
//   // 2. Use the state value as the html value
//   // 3. Use the onChange props to handle the change event and set the state function to the value

//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     const oldItem = { description };
//     if (!description) return;

//     console.log(newItem);
//     console.log(oldItem);

//     console.log(e.target[1]);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need for your 😻 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//         {/* <option value={1}>1</option>
//         <option value={1}>2</option>
//         <option value={3}>3</option> */}
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
//       {/* // We render item in the packing list
//      //  */}

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
//         {item.quantity} {item.description}
//       </span>
//       <button>❌</button>
//     </li>
//   );
// }
