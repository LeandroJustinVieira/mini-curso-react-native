import React, {Component} from "react";
import {Text, View, Image, StyleSheet} from "react-native";

export default class CardItens extends Component {
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.image}>
                    <Image style={{height: 100, width: 100}} source={{uri: this.props.item.image}}/>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <Text>{this.props.item.artistic}</Text>
                    <Text>{this.props.item.album}</Text>
                    <Text>Dt: {this.props.item.music}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10
    },
    image: {
        width: 102,
        height: 102
    },
    detail: {
        marginLeft: 20,
        flex: 1
    },
    title: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    }
});
