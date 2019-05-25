import React, {Component} from "react";
import {Image, View, ToastAndroid} from "react-native";
import Sound from 'react-native-sound';

export default class Cat extends Component {
    constructor(props) {
        super(props);
        this.gatinho = require('./../../resources/gatinho.jpeg');
        this.gatinhoDancando = require('./../../resources/gatinho_dancando.gif');
        this.song = null;
    }

    render() {
        if (this.props.dance) {
            this.song = new Sound(this.props.music, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
                    return;
                }
                this.song.setCurrentTime(0);
                this.song.setSpeed(1);
                this.song.setNumberOfLoops(-1);
                this.song.play((success) => {
                    if (!success)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                });

            });
            return (
                <View>
                    <Image source={this.gatinhoDancando}/>
                </View>
            );
        }

        if (this.song != null) {
            this.song.pause();
        }
        return (
            <View>
                <Image source={this.gatinho}/>
            </View>
        );
    }
}
