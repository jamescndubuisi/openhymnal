import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import HymnListScreen from '../screens/HymnListScreen';
import HymnDetailScreen from '../screens/HymnDetailScreen';
import SearchScreen from '../screens/HymnSearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Ensure correct import

export interface Hymn {
  number: string;
  title: string;
  titleWithHymnNumber: string;
  chorus: string | boolean;
  verses: string[];
  sound: string;
  category: string;
}

export type RootStackParamList = {
  HymnList: undefined;
  HymnDetail: { hymn: Hymn };
  Search: undefined;
};

export type HymnDetailScreenProps = StackScreenProps<RootStackParamList, 'HymnDetail'>;


export type SearchScreenProps = StackScreenProps<RootStackParamList, 'Search'>;
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="HymnList" 
          component={HymnListScreen} 
          options={({ navigation }) => ({
            title: 'Open Hymns',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ marginRight: 10 }}>
                <Ionicons name="search" size={30} style={{ color: 'white' }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="HymnDetail" 
          component={HymnDetailScreen} 
          options={{ title: 'Hymn Details' }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Search Hymns' }}
        />
      </Stack.Navigator>

  );
};

export default AppNavigator;