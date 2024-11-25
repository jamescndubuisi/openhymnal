import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';
import HymnListScreen from '../screens/HymnListScreen';
import HymnDetailScreen from '../screens/HymnDetailScreen';

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
};

// Type for HymnDetail screen props
export type HymnDetailScreenProps = StackScreenProps<RootStackParamList, 'HymnDetail'>;

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
   // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HymnList" 
          component={HymnListScreen} 
          options={{ title: 'Hymns' }}
        />
        <Stack.Screen 
          name="HymnDetail" 
          component={HymnDetailScreen} 
          options={{ title: 'Hymn Details' }}
        />
      </Stack.Navigator>
    //</NavigationContainer>
  );
};

export default AppNavigator;