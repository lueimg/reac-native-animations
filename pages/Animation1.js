import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
//import liraries
import React, { Component } from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

`;
const Box = styled(Animated.View)`
    background-color: #333;
    width: 100px;
    height: 100px;
`;

// create a component
class Animation1 extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    componentDidMount() {
        
        Animated.timing(this.animatedValue, {
            toValue: .3,
            duration: 3000,
            easing: Easing.bounce
        }).start();
    }

    render() {

        const animatedStyle = { opacity: this.animatedValue };

        return (
            <Container >
                <Box style={animatedStyle}/>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        
    },
});

//make this component available to the app
export default Animation1;
