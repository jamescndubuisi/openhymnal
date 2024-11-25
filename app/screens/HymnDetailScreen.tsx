// // screens/HymnDetailScreen.tsx
// import React, { useState } from 'react';
// import { View, Text, Button, ScrollView } from 'react-native';
// import Sound from 'react-native-sound';

// type Hymn = {
//   title: string;
//   chorus: string;
//   verses: string[];
//   sound: string;
//   category: string;
// };

// interface Props {
//   route: { params: { hymn: Hymn } };
// }

// const HymnDetailScreen: React.FC<Props> = ({ route }) => {
//   const { hymn } = route.params;
//   const [isPlaying, setIsPlaying] = useState(false);
//   const sound = new Sound(hymn.sound, Sound.MAIN_BUNDLE, (error) => {
//     if (error) {
//       console.log('Failed to load sound', error);
//       return;
//     }
//   });

//   const playSound = () => {
//     if (sound.isPlaying()) {
//       sound.stop();
//       setIsPlaying(false);
//     } else {
//       sound.play(() => {
//         setIsPlaying(false);
//       });
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <ScrollView>
//       <Text style={{ fontSize: 24 }}>{hymn.title}</Text>
//       <Text style={{ fontSize: 18, marginTop: 20 }}>Chorus:</Text>
//       <Text>{hymn.chorus.replace(/\\n/g, '\n')}</Text>
//       <Text style={{ fontSize: 18, marginTop: 20 }}>Verses:</Text>
//       {hymn.verses.map((verse, index) => (
//         <Text key={index}>{verse.replace(/\\n/g, '\n')}</Text>
//       ))}
//       <Button
//         title={isPlaying ? 'Stop Audio' : 'Play Audio'}
//         onPress={playSound}
//       />
//       <Text style={{ marginTop: 20 }}>Category: {hymn.category}</Text>
//     </ScrollView>
//   );
// };

// export default HymnDetailScreen;


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
    backgroundColor: '#fff',
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