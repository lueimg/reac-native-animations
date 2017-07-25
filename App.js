import { StyleSheet, Text, View } from 'react-native';

import Animation1 from './pages/Animation1';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Animation1 />
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
