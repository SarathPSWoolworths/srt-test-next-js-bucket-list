'use client';

import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Bucket List in Next JS </h1>
      <div>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new bucket list item"
          />
          <button onClick={addItem}>
            Add
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
