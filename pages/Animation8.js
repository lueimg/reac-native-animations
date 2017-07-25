import { Animated, Dimensions, PanResponder, StyleSheet, Text, View } from 'react-native';
//import liraries
import React, { Component } from 'react';

import styled from 'styled-components/native';

const Container = styled(View)`
    flex-direction: row;
    justify-content: space-around;
`;

const Box = styled(Animated.View)`
    background-color: #333;
    width:100px;
    height: 100px;
    justify-content: center;
    align-items: center;
`;
const SText = styled(Text)`
    color: #fff;
`;

const {height} = Dimensions.get("window");

// create a component
class Animation3 extends Component {

    componentWillMount() {
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(1);  
    }
    
    componentDidMount() {
       Animated.parallel([
           Animated.timing(this.animatedValue1, {
               toValue: 500,
               duration: 300
           }),
            Animated.spring(this.animatedValue2, {
               toValue: 3,
               
           }),

       ]).start()
    }

    render() {
        const animatedStyle1 = {
            transform: [
                {translateY: this.animatedValue1},
                {scale: this.animatedValue2},
            ]
        }
       

        return (
            
            <Container>
                <Box style={animatedStyle1} />
            </Container>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Animation3;
