import React from 'react';
import { View, StyleSheet } from 'react-native';
//ASSETS
import AppNavigation from './AppNavigation';

//====CLASS DECLARATION====//
class App extends React.Component {

    componentWillMount() {
        console.disableYellowBox = true;
    }

    render() {
        return (
            <View style={styles.container}>
                <AppNavigation />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;