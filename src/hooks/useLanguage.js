import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Use AsyncStorage to persist language settings
import i18n from 'i18n-js'; // Assumes you are using i18n-js for localization

const LANGUAGE_KEY = 'selectedLanguage';

// Import localization files
import en from '../locales/en/home.json'; // Adjust path as needed
import fr from '../locales/fr/accueil.json'; // Adjust path as needed

// Define your translations
i18n.translations = {
  en,
  fr,
};

export const useLanguage = () => {
  const [language, setLanguage] = useState('en'); // Default language is English

  useEffect(() => {
    // Fetch saved language preference from AsyncStorage
    const fetchLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
        if (storedLanguage) {
          setLanguage(storedLanguage);
          i18n.locale = storedLanguage; // Set the locale in i18n
        } else {
          i18n.locale = 'en'; // Set default locale if none is saved
        }
      } catch (error) {
        console.error('Failed to load language:', error);
      }
    };

    fetchLanguage();
  }, []);

  const switchLanguage = async () => {
    const newLanguage = language === 'en' ? 'fr' : 'en'; // Toggle between English and French
    setLanguage(newLanguage);
    i18n.locale = newLanguage; // Update locale in i18n
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, newLanguage); // Save the selected language in AsyncStorage
    } catch (error) {
      console.error('Failed to save language:', error);
    }
  };

  return {
    language,
    switchLanguage,
  };
};
