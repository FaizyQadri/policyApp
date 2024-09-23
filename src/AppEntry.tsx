import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';
import RootStack from './routes/RootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Colors } from './utility/constants';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

const AppEntry = () => {
  const isDarkMode = useColorScheme() === 'dark';

  
  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <GestureHandlerRootView style={styles.root}>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={Colors.white}
          />
          <RootStack />
        </GestureHandlerRootView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppEntry;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
