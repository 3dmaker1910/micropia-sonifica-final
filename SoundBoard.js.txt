import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const SoundBoard = ({ onPlay }) => {
  const tones = ['396Hz', '417Hz', '528Hz', '639Hz', '741Hz', '852Hz'];
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tones.map(tone => (
        <TouchableOpacity key={tone} onPress={() => onPlay(tone)} style={{ backgroundColor: '#FF00FF', padding: 15, margin: 5, borderRadius: 10 }}>
          <Text style={{ color: '#FFF' }}>{tone}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};