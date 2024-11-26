import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { HymnDetailScreenProps } from '../(tabs)/AppNavigator';

const HymnDetailScreen: React.FC<HymnDetailScreenProps> = ({ route }) => {
  const { hymn } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{hymn.titleWithHymnNumber}</Text>
      {hymn.chorus && typeof hymn.chorus === 'string' && (
        <View>
          <Text style={styles.chorustitle}>Chorus:</Text>
        <Text style={styles.chorus}>{hymn.chorus}</Text>
        </View>
        
    
  )}
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
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chorus: {
    fontStyle: 'italic',
    marginBottom: 16,
    fontSize: 21,
  },
  chorustitle: {
    fontStyle: 'italic',
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  verse: {
    marginBottom: 12,
    fontSize:21,
  },
});

export default HymnDetailScreen;