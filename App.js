import { StyleSheet, Text, View } from 'react-native';

import Animation2 from './pages/Animation2';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Animation2 />
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
