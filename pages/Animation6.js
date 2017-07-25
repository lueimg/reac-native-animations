import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';
//import liraries
import React, { Component } from 'react';

import styled from 'styled-components/native';

const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
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


// create a component
class Animation3 extends Component {

    componentWillMount() {
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(1);
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(this.animatedValue1, {
                toValue: 150,
                duration: 1000
            }),
            Animated.spring(this.animatedValue2, {
                toValue: 3
            }),
            Animated.timing(this.animatedValue1, {
                toValue: 0,
                duration: 1500
            }),
            Animated.spring(this.animatedValue2, {
                toValue: .5 
            })

        ]).start();
    }

    render() {
        const animatedStyle = {
            transform: [
                { translateY: this.animatedValue1 },
                { scale: this.animatedValue2 },
            ]
        }

        return (
            
            <Container>
                <Box style={animatedStyle} />
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
