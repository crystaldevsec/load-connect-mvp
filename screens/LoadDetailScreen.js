import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoadDetailScreen({ route }) {
  const { load } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{load.title}</Text>
      <Text>Weight: {load.weight}</Text>
      <Text>Pay: {load.pay}</Text>
      <Text>Status: Available</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
