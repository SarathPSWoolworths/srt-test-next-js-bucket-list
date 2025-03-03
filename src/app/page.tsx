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
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Bucket List</h1>
      <div className="flex">
        <div className="flex flex-col">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new bucket list item"
            className="border p-2"
          />
          <button
            onClick={addItem}
            className="mt-2 p-2 bg-blue-500 text-white">
            Add
          </button>
        </div>
        <ul className="list-disc ml-8">
          {items.map((item, index) => (
            <li
              key={index}
              className="mt-2 flex items-center">
              {item}
              <button
                onClick={() => removeItem(index)}
                className="ml-4 p-1 bg-red-500 text-white">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
