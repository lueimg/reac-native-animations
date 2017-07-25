import { Animated, PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import liraries
import React, { Component } from 'react';

import styled from 'styled-components/native';

const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
 
const FlipCard = styled(Animated.View)`
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    background-color: blue;
    backface-visibility: hidden;
`;
const FlipCardBack = styled(Animated.View)`
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    background-color: red;
    position: absolute;
    top: 0;
`;
const FlipText = styled(Text)``;


// create a component
class Animation3 extends Component {

    componentWillMount() {

        this.animatedValue = new Animated.Value(0);

        this.value = 0;
        this.animatedValue.addListener(({value}) => {
            this.value = value;
        })

        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })

      
    }

    flipCard = () => {

        if (this.value > 90) {
             Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10
                
            }).start()
        } else {
             Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10
                
            }).start()
        }

       
    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate}
            ]
        }

        const backAnimatedStyle = {
            transform: [
                {rotateY: this.backInterpolate}
            ]
        }

        return (
            
            <Container>
                <View>
                    <FlipCard style={frontAnimatedStyle}>
                        <FlipText>
                            this text is flipping on the front
                        </FlipText>
                    </FlipCard>
                    <FlipCardBack style={backAnimatedStyle}>
                        <FlipText>
                            this text is flipping on the back
                        </FlipText>
                    </FlipCardBack>
                    <TouchableOpacity onPress={() => this.flipCard()}>
                        <Text>Flip!</Text>
                    </TouchableOpacity>
                </View>
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
