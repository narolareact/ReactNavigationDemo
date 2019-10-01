//LIBRARIES
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//ASSETS
import { Colors, Metrics } from '../Assets/index';

class Login extends React.Component {



    login() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.login()} >
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#D34348', height: Metrics.CountScale(55), borderRadius: Metrics.CountScale(30) }}>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK,
        justifyContent: 'center'
    }
});