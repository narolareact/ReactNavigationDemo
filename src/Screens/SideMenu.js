// <<<<<<<<<<<<----------- LIBRARIES ----------->>>>>>>>>>>>>
import { NavigationActions, StackActions } from 'react-navigation';
import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Colors, Images } from '../Assets/index';

// <<<<<<<<<<<<----------- CLASS DECLARATION ----------->>>>>>>>>>>>>

class SideMenu extends Component {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        });
        this.props.navigation.closeDrawer();
        this.props.navigation.dispatch(navigateAction);
    }

    logout() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: "Login" })
            ],
            key: null // THIS LINE
        });
        this.props.navigation.dispatch(resetAction);
    }
    // <<<<<<<<<<<<----------- RENDER METHOD ----------->>>>>>>>>>>>>
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* <View style={styles.firstView}>
                    <View style={[styles.logoView, Platform.OS == 'android' ? { marginTop: StatusBar.currentHeight } : { marginTop: 0 }]}>
                        <Image style={styles.imageLogo} source={Images.AppLogo}></Image>
                        <View style={styles.mt10}>
                            <Text style={styles.titleText}>Flockbase</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.drawerMainView, this.props.activeItemKey == 'Home' ? { backgroundColor: Colors.SIDEMENUBACKGROUND } : { backgroundColor: Colors.WHITE }]} onPress={this.navigateToScreen('Home')} >
                        <View style={styles.sideMenuImageView}>
                            {this.props.activeItemKey == 'Home' ?
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.ActiveHome}></Image>
                                :
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.Home}></Image>
                            }
                        </View>
                        <View style={styles.sideMenuTextView}>
                            <Text style={[styles.sideMenuText, this.props.activeItemKey == 'Home' ? { color: Colors.AQUA } : { color: Colors.BLACK }]}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.drawerMainView, this.props.activeItemKey == 'Donate' ? { backgroundColor: Colors.SIDEMENUBACKGROUND } : { backgroundColor: Colors.WHITE }]} onPress={this.navigateToScreen('Donate')}>
                        <View style={styles.sideMenuImageView}>
                            {this.props.activeItemKey == 'Donate' ?
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.ActiveDonate}></Image>
                                :
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.Donate}></Image>
                            }
                        </View>
                        <View style={styles.sideMenuTextView}>
                            <Text style={[styles.sideMenuText, this.props.activeItemKey == 'Donate' ? { color: Colors.AQUA } : { color: Colors.BLACK }]}>Donate</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.drawerMainView, this.props.activeItemKey == 'MyGroups' ? { backgroundColor: Colors.SIDEMENUBACKGROUND } : { backgroundColor: Colors.WHITE }]} onPress={this.navigateToScreen('MyGroups')} >
                        <View style={styles.sideMenuImageView}>
                            {this.props.activeItemKey == 'MyGroups' ?
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.ActiveGroups}></Image>
                                :
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.Groups}></Image>
                            }
                        </View>
                        <View style={styles.sideMenuTextView}>
                            <Text style={[styles.sideMenuText, this.props.activeItemKey == 'MyGroups' ? { color: Colors.AQUA } : { color: Colors.BLACK }]}>My Groups</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.drawerMainView, this.props.activeItemKey == 'MyCalendar' ? { backgroundColor: Colors.SIDEMENUBACKGROUND } : { backgroundColor: Colors.WHITE }]} onPress={this.navigateToScreen('MyCalendar')} >
                        <View style={styles.sideMenuImageView}>
                            {this.props.activeItemKey == 'MyCalendar' ?
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.ActiveCalendar}></Image>
                                :
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.Calendar}></Image>
                            }
                        </View>
                        <View style={styles.sideMenuTextView}>
                            <Text style={[styles.sideMenuText, this.props.activeItemKey == 'MyCalendar' ? { color: Colors.AQUA } : { color: Colors.BLACK }]}>My Calendar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.drawerMainView, this.props.activeItemKey == 'CheckIn' ? { backgroundColor: Colors.SIDEMENUBACKGROUND } : { backgroundColor: Colors.WHITE }]} onPress={this.navigateToScreen('CheckIn')} >
                        <View style={styles.sideMenuImageView}>
                            {this.props.activeItemKey == 'CheckIn' ?
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.ActiveCheckIn}></Image>
                                :
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.CheckIn}></Image>
                            }
                        </View>
                        <View style={styles.sideMenuTextView}>
                            <Text style={[styles.sideMenuText, this.props.activeItemKey == 'CheckIn' ? { color: Colors.AQUA } : { color: Colors.BLACK }]}>Check In</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.drawerMainView, this.props.activeItemKey == 'Profile' ? { backgroundColor: Colors.SIDEMENUBACKGROUND } : { backgroundColor: Colors.WHITE }]} onPress={this.navigateToScreen('Profile')} >
                        <View style={styles.sideMenuImageView}>
                            {this.props.activeItemKey == 'Profile' ?
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.ActiveProfile}></Image>
                                :
                                <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.Profile}></Image>
                            }
                        </View>
                        <View style={styles.sideMenuTextView}>
                            <Text style={[styles.sideMenuText, this.props.activeItemKey == 'Profile' ? { color: Colors.AQUA } : { color: Colors.BLACK }]}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                </View> */}
                <TouchableOpacity style={styles.drawerMainView} onPress={() => this.logout()}>
                    <View style={styles.sideMenuImageView}>
                        <Image style={styles.sideMenuImage} resizeMode={'contain'} source={Images.Logout}></Image>
                    </View>
                    <View style={styles.sideMenuTextView}>
                        <Text style={styles.sideMenuText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
// <<<<<<<<<<<<----------- STYLESHEET ----------->>>>>>>>>>>>>
const styles = {
    container: {
        flex: 1
    },
    // firstView: {
    //     flex: 0.9
    // },
    // logoView: {
    //     height: Matrics.ScaleValue(200), justifyContent: 'center', alignItems: 'center'
    // },
    // imageLogo: {
    //     height: Matrics.ScaleValue(80), width: Matrics.ScaleValue(90)
    // },
    // mt10: {
    //     marginTop: Matrics.ScaleValue(10)
    // },
    // titleText: {
    //     fontSize: Matrics.ScaleValue(18), color: Colors.AQUA, fontWeight: '600'
    // },
    // drawerMainView: {
    //     flex: 0.12, flexDirection: 'row'
    // },
    // sideMenuImageView: {
    //     flex: 0.2, justifyContent: 'center', alignItems: 'center'
    // },
    // sideMenuImage: {
    //     height: Matrics.ScaleValue(20), width: Matrics.ScaleValue(20)
    // },
    // sideMenuTextView: {
    //     flex: 0.8, justifyContent: 'center'
    // },
    // sideMenuText: {
    //     fontSize: Matrics.ScaleValue(15)
    // },

}
export default SideMenu