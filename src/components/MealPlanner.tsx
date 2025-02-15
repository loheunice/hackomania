import React from 'react';
import { DietaryPreferences, Ingredient } from '../types/types';

interface MealPlannerProps {
  pantryItems: Ingredient[];
  preferences: DietaryPreferences;
}

const MealPlanner: React.FC<MealPlannerProps> = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Meal Planner</h1>
      <p>Coming soon...</p>
    </div>
  );
};

export default MealPlanner; 