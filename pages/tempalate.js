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

        this.animatedValue = new Animated.ValueXY();

      
    }

    render() {
        const animatedStyle = {
            
        }

        return (
            
            <Container>
                <Box style={animatedStyle}>
                    <SText>
                        Text
                    </SText>
                </Box>
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
