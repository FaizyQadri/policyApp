import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  //   StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import RootStack from './routes/RootStack';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const AppEntry = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <SafeAreaView style={backgroundStyle}>
        <KeyboardAvoidingView
          style={backgroundStyle}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
          />
          <RootStack />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default AppEntry;

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//   },
// });
