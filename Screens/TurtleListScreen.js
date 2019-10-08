import React from 'react';
import { View, Text, Button } from 'react-native';

export default class TurtleListScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>TurtleList Screen</Text>
                <Button
                    title="Go to TurtleProfile"
                    onPress={() => this.props.navigation.navigate('TurtleProfile')}
                />
            </View>
        );
    }
}