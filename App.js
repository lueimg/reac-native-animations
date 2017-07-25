import { StyleSheet, Text, View } from 'react-native';

import Animation4 from './pages/Animation4';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <Animation4 />
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
