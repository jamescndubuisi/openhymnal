import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { HymnDetailScreenProps } from '../(tabs)/AppNavigator';

const HymnDetailScreen: React.FC<HymnDetailScreenProps> = ({ route }) => {
  const { hymn } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{hymn.titleWithHymnNumber}</Text>
      <Text style={styles.chorus}>{hymn.chorus}</Text>
      {hymn.verses.map((verse, index) => (
        <Text key={index} style={styles.verse}>
          {verse}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#B59B7C',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chorus: {
    fontStyle: 'italic',
    marginBottom: 16,
  },
  verse: {
    marginBottom: 12,
  },
});

export default HymnDetailScreen;