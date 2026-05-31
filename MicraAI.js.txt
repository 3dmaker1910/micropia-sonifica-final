import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MicraAI = ({ message }) => {
  return (
    <View style={styles.micraContainer}>
      <Text style={styles.micraName}>DRA. MICRA (AI)</Text>
      <Text style={styles.micraMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  micraContainer: { backgroundColor: '#1a1a2e', padding: 20, borderRadius: 15, margin: 20, borderLeftWidth: 5, borderLeftColor: '#00FFFF' },
  micraName: { color: '#00FFFF', fontWeight: 'bold', marginBottom: 5 },
  micraMessage: { color: '#FFFFFF', fontStyle: 'italic' }
});