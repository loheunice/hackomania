import React from 'react';
import { DietaryPreferences } from '../types/types';

interface PreferencesFormProps {
  preferences: DietaryPreferences;
  setPreferences: (prefs: DietaryPreferences) => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dietary Preferences</h1>
      <p>Coming soon...</p>
    </div>
  );
};

export default PreferencesForm; 