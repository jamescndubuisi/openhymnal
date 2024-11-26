// SearchScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import hymnsData from '../database/db.json';
import  { SearchScreenProps }  from '../(tabs)/AppNavigator';


const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const hymnList = Object.values(hymnsData.hymns).sort((a, b) => parseInt(a.number) - parseInt(b.number));

  const filteredHymns = hymnList.filter(hymn =>
    hymn.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hymn.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a hymn..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {filteredHymns.length === 0 && searchQuery !== '' ? (
        <Text style={styles.noResultsText}>No hymns match your search.</Text>
      ) : (
        <FlatList
          data={filteredHymns}
          keyExtractor={item => item.number}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.hymnItem}
              onPress={() => navigation.navigate('HymnDetail', { hymn: item })}
            >
              <Text style={styles.hymnNumber}>{item.number}.</Text>
              <Text style={styles.hymnTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#B59B7C',
  },
  searchInput: {
    height: 45,
    borderColor: '#ccc',
    backgroundColor: '#d8cbbb',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  hymnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.4,
    borderBottomColor: '#e1e1e1',
  },
  hymnNumber: {
    fontSize: 16,
    fontWeight: '500',
    minWidth: 32,
    color: '#666',
  },
  hymnTitle: {
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
    color: '#000',
  },
});

export default SearchScreen;