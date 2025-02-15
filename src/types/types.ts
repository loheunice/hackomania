export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  expiryDate?: Date;
}

export interface DietaryPreferences {
  isVegan: boolean;
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isKeto: boolean;
  allergies: string[];
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  instructions: string[];
  nutritionInfo: NutritionInfo;
  healthBenefits: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number;
  cookTime: number;
  servings: number;
  image?: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface MealPlan {
  id: string;
  startDate: Date;
  meals: {
    [key: string]: {
      breakfast: Recipe;
      lunch: Recipe;
      dinner: Recipe;
      dessert?: Recipe;
    };
  };
} 