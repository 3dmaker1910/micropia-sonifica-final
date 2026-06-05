import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

const LOGO_URL = 'https://static.prod-images.emergentagent.com/jobs/b09505ba-190e-4ca7-9d47-23f73249f18b/images/ead6be8a705c5bff1249e23b0e7accce78ef17c453ae9a93a98fbca30f7ed3ae.png';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: LOGO_URL }} style={styles.logo} />
        <Text style={styles.title}>M104: SINFONÍA</Text>
        <Text style={styles.subtitle}>El Sonido de la Vida Invisible</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ritmos Electrónicos</Text>
          <Text style={styles.cardText}>¿A qué suena una bacteria? Descubre las frecuencias y vibraciones que mantienen el pulso de nuestro mundo.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.founderText}>"Siente el ritmo alrededor."</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000814' },
  header: { padding: 50, alignItems: 'center', backgroundColor: '#001d3d' },
  logo: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  title: { color: '#00FFFF', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#FF00FF', fontSize: 16 },
  content: { padding: 30 },
  card: { backgroundColor: '#1a1a2e', padding: 25, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#00FFFF' },
  cardTitle: { color: '#00FFFF', fontWeight: 'bold', fontSize: 20, marginBottom: 10 },
  cardText: { color: '#fff', fontSize: 16 },
  footer: { padding: 40, alignItems: 'center' },
  founderText: { color: '#CCFF00', fontSize: 14, fontStyle: 'italic' }
});

registerRootComponent(App);