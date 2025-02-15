import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PantryScanner from './components/PantryScanner';
import MealPlanner from './components/MealPlanner';
import PreferencesForm from './components/PreferencesForm';
import Scanner from './components/Scanner';
import { DietaryPreferences, Ingredient } from './types/types';

function App() {
  const [pantryItems, setPantryItems] = useState<Ingredient[]>([]);
  const [preferences, setPreferences] = useState<DietaryPreferences>({
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isKeto: false,
    allergies: [],
  });

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route 
              path="/" 
              element={
                <PantryScanner 
                  pantryItems={pantryItems} 
                  setPantryItems={setPantryItems} 
                />
              } 
            />
            <Route 
              path="/scan" 
              element={<Scanner />} 
            />
            <Route 
              path="/preferences" 
              element={
                <PreferencesForm 
                  preferences={preferences} 
                  setPreferences={setPreferences} 
                />
              } 
            />
            <Route 
              path="/meal-plan" 
              element={
                <MealPlanner 
                  pantryItems={pantryItems} 
                  preferences={preferences} 
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 