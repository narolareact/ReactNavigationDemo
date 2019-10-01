//LIBRARIES
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../Assets/index';

class Detail extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Detail',
        headerTitleStyle: styles.headerStyleNav,
        headerStyle: { backgroundColor: Colors.NAVIGATIONLABEL },
        headerTintColor: Colors.WHITE,
        headerRight: <View></View>,
        headerBackTitle: null
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Detail
               </Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerStyleNav: {
        fontSize: Metrics.CountScale(20),
        color: Colors.WHITE,
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
});

export default Detail;