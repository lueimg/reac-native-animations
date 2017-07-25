import { StyleSheet, Text, View } from 'react-native';

import Animation3 from './pages/Animation3';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Animation3 />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
