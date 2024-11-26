
// HymnListScreen.tsx
import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import hymnsData from '../database/db.json';
import { Hymn } from '../(tabs)/AppNavigator';

interface Props {
  navigation: StackNavigationProp<{ HymnList: undefined; HymnDetail: { hymn: Hymn }; Search: undefined }>;
}

const HymnListScreen: React.FC<Props> = ({ navigation }) => {
  const hymnList = Object.values(hymnsData.hymns).sort((a, b) => parseInt(a.number) - parseInt(b.number));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={hymnList}
        keyExtractor={item => item.number}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.hymnItem}
            onPress={() => navigation.navigate('HymnDetail', { hymn: item })}
            activeOpacity={0.7}
          >
            <View style={styles.hymnContent}>
              <Text style={styles.hymnNumber}>{item.number}.</Text>
              <Text style={styles.hymnTitle} numberOfLines={2}>
                {item.title}
              </Text>
            </View>
            <Text style={styles.categoryText}>{item.category}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B59B7C',
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContent: {
    paddingVertical: 8,
  },
  hymnItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#B59B7C',
  },
  hymnContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  hymnNumber: {
    fontSize: 20,
    fontWeight: '500',
    minWidth: 32,
    color: '#666',
  },
  hymnTitle: {
    fontSize: 20,
    flex: 1,
    lineHeight: 22,
    color: '#000',
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    marginLeft: 32,
    textTransform: 'capitalize',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E1E1E1',
  },
});

export default HymnListScreen;


