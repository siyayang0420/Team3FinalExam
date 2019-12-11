/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import MainMenu from './comps/MainMenu';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import TabBar from './comps/TabBar';


const App = () => {
  return (
    <View style={{justifyContent:'center', flex:1 }}>
      <MainMenu />
    </View>
  )
}

// export default App;
export default from './storybook';

