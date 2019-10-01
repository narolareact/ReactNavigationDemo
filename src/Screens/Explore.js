//LIBRARIES
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Colors, Metrics, Images } from '../Assets/index';

let self;

class Explore extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Explore',
        headerTitleStyle: styles.headerStyleNav,
        headerStyle: { backgroundColor: Colors.NAVIGATIONLABEL },
        headerTintColor: Colors.WHITE,
        headerLeft: <TouchableOpacity onPress={() => self.props.navigation.openDrawer()} style={{ padding: Metrics.CountScale(15) }}><Image source={Images.MenuIcon}></Image></TouchableOpacity>,
        headerRight: <View></View>,
        headerBackTitle: null
    });

    componentDidMount() {
        self = this;
    }

    detail() {
        this.props.navigation.navigate('Detail');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => this.detail()} >
                    <Text>
                        Explore
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
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
    }
});

export default Explore;