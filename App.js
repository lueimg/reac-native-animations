import { StyleSheet, Text, View } from 'react-native';

import Animation5 from './pages/Animation5';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Animation5 />
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
