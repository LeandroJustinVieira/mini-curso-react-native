import React from 'react';
import AppNavigator from './src/AppNavigator';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            music: 'babyshark.mp3',
        }
    }

    changeMusic = (music) => {
        this.setState({music: music});
    };

    render() {
        return (
            <AppNavigator
                screenProps={{
                    music: this.state.music,
                    changeMusic: this.changeMusic,
                }}
            />
        );
    }
}