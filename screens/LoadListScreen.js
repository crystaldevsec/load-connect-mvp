import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const loads = [
  { id: '1', title: 'Houston → Dallas', weight: '10,000 lbs', pay: '$1,200' },
  { id: '2', title: 'San Antonio → Austin', weight: '5,000 lbs', pay: '$600' },
  { id: '3', title: 'El Paso → Phoenix', weight: '20,000 lbs', pay: '$2,000' },
];

export default function LoadListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={loads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('LoadDetail', { load: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.weight} — {item.pay}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 20, backgroundColor: '#eee', borderRadius: 10, marginBottom: 10 },
  title: { fontWeight: 'bold', fontSize: 18 },
});

