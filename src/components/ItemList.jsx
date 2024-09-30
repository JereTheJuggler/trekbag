import { useState } from "react";
import { DEFAULT_ITEMS } from "../lib/constants";

export default function ItemList() {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
