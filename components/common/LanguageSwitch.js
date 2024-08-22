// components/LanguageSwitch.js
import React from 'react';
import { View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <View>
      <Button title="EN" onPress={() => switchLanguage('en')} />
      <Button title="FR" onPress={() => switchLanguage('fr')} />
      {/* Add more language buttons as needed */}
    </View>
  );
};

export default LanguageSwitch;
