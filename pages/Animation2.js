import { Animated, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
//import liraries
import React, { Component } from 'react';

import styled from 'styled-components/native';

const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Button = styled(Animated.View)`
    background-color: #333;
    width:100px;
    height: 50px;
    justify-content: center;
    align-items: center;
`;
const SText = styled(Text)`
    color: #fff;
`;

// create a component
class Animation2 extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    handlePressIn = () => {
        Animated.spring(this.animatedValue, {
            toValue: .5,

        }).start()
    }

    handlePressOut = () => {
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }

    render() {

        const animatedStyle = {
            transform: [
                {
                    scale: this.animatedValue
                }
            ]
        }

        return (
            <Container>
                <TouchableWithoutFeedback
                    onPressIn={this.handlePressIn}
                    onPressOut={this.handlePressOut}
                >
                    <Button style={animatedStyle}>
                        <SText>Press me</SText>
                    </Button>
                </TouchableWithoutFeedback>
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
export default Animation2;
