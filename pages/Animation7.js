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
    height: 50px;
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
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.stagger(300, [
            Animated.timing(this.animatedValue1, {
                toValue: height,
                duration: 1500
            }),
            Animated.timing(this.animatedValue2, {
                toValue: height,
                duration: 3000
            }),
            Animated.timing(this.animatedValue3, {
                toValue: 500,
                duration: 1500
            }),
        ]).start()
    }

    render() {
        const animatedStyle1 = {
            height: this.animatedValue1
        }
        const animatedStyle2 = {
            height: this.animatedValue2
        }
        const animatedStyle3 = {
            height: this.animatedValue3
        }

        return (
            
            <Container>
                <Box style={animatedStyle1} />
                 <Box style={animatedStyle2} />
                  <Box style={animatedStyle3} />
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
