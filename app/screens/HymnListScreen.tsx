// // screens/HymnListScreen.tsx
// import React from 'react';
// import { View, FlatList, Text, TouchableOpacity } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import hymns from '../database/db.json';

// type Hymn = typeof hymns[ keyof typeof hymns ];
// type NavigationProps = StackNavigationProp< { HymnList: undefined; HymnDetail: { hymn: Hymn } } >;

// interface Props {
//   navigation: NavigationProps;
// }

// const HymnListScreen: React.FC<Props> = ({ navigation }) => {
//   const hymnList = Object.values(hymns);

//   return (
//     <View>
//       <FlatList
//         data={hymnList}
//         keyExtractor={item => item.number}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => navigation.navigate('HymnDetail', { hymn: item })}
//           >
//             <Text>{item.titleWithHymnNumber}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default HymnListScreen;



// screens/HymnListScreen.tsx
// import React from 'react';
// import { 
//   View, 
//   FlatList, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet,
//   SafeAreaView,
//   StatusBar
// } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import hymnData from '../database/db.json';

// // Define the type based on the actual data structure
// type Hymn = {
//   number: string;
//   title: string;
//   titleWithHymnNumber: string;
//   chorus: string;
//   verses: string[];
//   sound: string;
//   category: string;
// };

// type RootStackParamList = {
//   HymnList: undefined;
//   HymnDetail: { hymn: Hymn };
// };

// type NavigationProps = StackNavigationProp<RootStackParamList, 'HymnList'>;

// interface Props {
//   navigation: NavigationProps;
// }

// const HymnListScreen: React.FC<Props> = ({ navigation }) => {
//   // Correctly parse the nested hymns object
//   const hymnList = Object.values(hymnData.hymns);

//   const renderHymnItem = ({ item }: { item: Hymn }) => (
//     <TouchableOpacity
//       style={styles.hymnItem}
//       onPress={() => navigation.navigate('HymnDetail', { hymn: item })}
//       activeOpacity={0.7}
//     >
//       <View style={styles.hymnContent}>
//         <Text style={styles.hymnNumber}>{item.number}.</Text>
//         <Text style={styles.hymnTitle} numberOfLines={2}>
//           {item.title}
//         </Text>
//       </View>
//       <Text style={styles.categoryText}>{item.category}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <FlatList
//         data={hymnList}
//         keyExtractor={item => item.number}
//         renderItem={renderHymnItem}
//         contentContainerStyle={styles.listContent}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//       />
//     </SafeAreaView>
//   );
// };



// export default HymnListScreen;
import React from 'react';
import {View,FlatList, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import hymnsData from '../database/db.json';



interface Hymn {
  number: string;
  title: string;
  titleWithHymnNumber: string;
  chorus: string;
  verses: string[];
  sound: string;
  category: string;
}

type NavigationProps = StackNavigationProp<{ HymnList: undefined; HymnDetail: { hymn: Hymn } }>;

interface Props {
  navigation: NavigationProps;
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
          // <TouchableOpacity style={styles.hymnItem}
          //   onPress={() => navigation.navigate('HymnDetail', { hymn: item })}
          // >
          //   <Text style={styles.hymnTitle} numberOfLines={2}>{item.titleWithHymnNumber}</Text>
          // </TouchableOpacity>
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
         ItemSeparatorComponent={() => <View style={styles.separator} />} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingVertical: 8,
  },
  hymnItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  hymnContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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