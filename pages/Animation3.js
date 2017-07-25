import { Animated, Buttonm, PanResponder, StyleSheet, Text, View } from 'react-native';
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

        this._value = {x: 0, y: 0};
        this.animatedValue.addListener((value) => this._value = value);
        
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (env, gestureState) => true,
            onMoveShouldSetPanResponder: (env, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue.setOffset({
                    x: this._value.x,
                    y: this._value.y,
                })
                this.animatedValue.setValue({x: 0, y: 0})
            },
            onPanResponderMove: Animated.event([
                null, 
                {
                    dx: this.animatedValue.x,
                    dy: this.animatedValue.y
                }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue.flattenOffset();
                Animated.decay(this.animatedValue, {
                    deceleration: 0.997,
                    velocity: {
                        x: gestureState.vx,
                        y: gestureState.vy
                    }
                }).start()
            },
        })
    }

    render() {
        const animatedStyle = {
            transform: this.animatedValue.getTranslateTransform()
        }

        return (
            
            <Container>
                <Button style={animatedStyle} {...this.panResponder.panHandlers}>
                    <SText>
                        Drag me
                    </SText>
                </Button>
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
