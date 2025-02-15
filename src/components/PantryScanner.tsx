import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ingredient } from '../types/types';

interface PantryScannerProps {
  pantryItems: Ingredient[];
  setPantryItems: (items: Ingredient[]) => void;
}

const PantryScanner: React.FC<PantryScannerProps> = ({ pantryItems, setPantryItems }) => {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState<Partial<Ingredient>>({});

  const handleManualAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.name && newItem.quantity && newItem.unit) {
      setPantryItems([
        ...pantryItems,
        {
          id: Date.now().toString(),
          name: newItem.name,
          quantity: newItem.quantity,
          unit: newItem.unit,
        },
      ]);
      setNewItem({});
    }
  };

  const handleScanReceipt = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // TODO: Implement OCR scanning using Azure AI Document Intelligence
      // For now, we'll just show a placeholder
      console.log('Receipt scanning to be implemented');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Pantry Items</h1>
      
      <div className="mb-8">
        <button
          onClick={() => navigate('/scan')}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Scan Items
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Scan Receipt</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleScanReceipt}
          aria-label="Upload receipt"
          title="Upload receipt"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Manual Entry</h2>
        <form onSubmit={handleManualAdd} className="space-y-4">
          <input
            type="text"
            placeholder="Item name"
            value={newItem.name || ''}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity || ''}
              onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Unit (e.g., grams, pieces)"
              value={newItem.unit || ''}
              onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
              className="w-1/2 p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Current Inventory</h2>
        <ul className="space-y-2">
          {pantryItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-3 bg-white rounded shadow">
              <span>{item.name}</span>
              <span>{item.quantity} {item.unit}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => navigate('/preferences')}
        className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Continue to Preferences
      </button>
    </div>
  );
};

export default PantryScanner; 