import { Animated, StyleSheet, Text, View } from 'react-native';
//import liraries
import React, { Component } from 'react';

import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Box = styled(Animated.View)`
   width: 100px;
   height: 100px;
`;
// create a component
class Animation4 extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 1500,
        }).start()
    }

    render() {
         const interpolateColor = this.animatedValue.interpolate({
             inputRange: [0, 150],
             outputRange: ['rgb(0,0,0)', 'rgb(51,250, 170)']
         });
        
         const animatedStyle = {
             backgroundColor: interpolateColor,
             transform: [
                 {
                     translateY: this.animatedValue
                 }
             ]
         }

        return (
            <Container>
                <Box style={animatedStyle}/>
            </Container>
        );
    }
}



//make this component available to the app
export default Animation4;
