import React from 'react';
import { Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerButton = ({ onImagePicked }) => {
  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onImagePicked(result.uri);
    }
  };

  return <Button title="Pick an Image" onPress={handlePickImage} />;
};

export default ImagePickerButton;
