import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import TurtleText from '../../components/TurtleText';

/*
Turtle Sighting Screen for information on one particular sighting
*/
export default function SightingViewScreen({ navigation }) {
    turtle = navigation.getParam('turtle');
    return (
        <ScrollView style={{ padding: 10 }}>
            <Image />
            <TurtleText titleText="Sighting #1" />
            <TurtleText titleText={`Turtle #${turtle.number}`} />
            <TurtleText titleText="Mark: " baseText={turtle.mark} />
            <TurtleText titleText="Date: " baseText="10-10-18" />
            <TurtleText titleText="Length: " baseText={`${turtle.length} cm`} />
            <TurtleText titleText="Location: " baseText="42.9313086715985, -85.58243000000002" />
            {/* map */}
            <View style={{ width: '100%', height: 200 }}>
                <MapView
                    style={{ flex: 1 }}
                    provider="google"
                    initialRegion={{
                        latitude: 42.9313086715985,
                        longitude: -85.58243000000002,
                        latitudeDelta: 0.0025,
                        longitudeDelta: 0.0025
                    }} >
                    <Marker coordinate={{
                        latitude: 42.9313086715985,
                        longitude: -85.58243000000002,
                    }} />
                </MapView>
            </View>
            <TurtleText titleText="Notes: " baseText="SIGHTING NOTES" />
        </ScrollView>
    );
}

// Sets the navigation options.
SightingViewScreen.navigationOptions = ({ navigation }) => ({
    title: 'Sighting',
    headerRight: () => (
        <Button
            onPress={() => navigation.navigate('SightingEdit')}
            title="Edit"
        />
    ),
});