import React from 'react';
import {StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';
import CardItens from "./components/CardItens";
import axios from 'axios';

export default class Music extends React.Component {

    constructor(props) {
        super(props);
        this.state = {list: []}
        this.serveradress = "http://192.168.0.165:3000";
    }

    componentWillMount() {
        axios.get(this.serveradress + '/music').then(response => {
            this.setState({list: response.data});
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.state.list.map(item =>
                    (
                        <TouchableOpacity key={item.id} onPress={() =>  {this.props.screenProps.changeMusic(item.music);
                            this.props.navigation.navigate('Home');}}>
                            <CardItens key={item.id} item={item}/>
                        </TouchableOpacity>
                    )
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
});