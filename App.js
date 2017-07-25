import { StyleSheet, Text, View } from 'react-native';

import Animation from './pages/Animation6';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Animation />
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
