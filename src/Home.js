import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Cat from './components/Cat';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {dance: false};
    }

    dance() {
        this.setState({dance: !this.state.dance});
    }

    goMusic() {
        this.props.navigation.navigate('Music');
        if (this.state.dance) {
            this.setState({dance: !this.state.dance});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => this.dance()}>
                        <Cat dance={this.state.dance} music={this.props.screenProps.music}/>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={() => this.goMusic()}>
                            <Text style={styles.buttonText}>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center'
    },
});