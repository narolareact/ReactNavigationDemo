//LIBRARIES
import React from 'react';
import { Image, Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

//ASSETS
import Login from './Screens/Login';
import Home from './Screens/Home';
import FoodFeed from './Screens/FoodFeed';
import Explore from './Screens/Explore';
import Profile from './Screens/Profile';
import Detail from './Screens/Detail';
import SideMenu from './Screens/SideMenu';

import { Images, Colors } from './Assets/index'

//=======TAB DECLARATION=========//

const HomeStack = createStackNavigator(
    {
        Home: { screen: Home },
        Detail: { screen: Detail }
    }
);

const FoodFeedStack = createStackNavigator(
    {
        FoodFeed: { screen: FoodFeed },
        Detail: { screen: Detail }
    }
);

const ExploreStack = createStackNavigator(
    {
        Explore: { screen: Explore },
        Detail: { screen: Detail }
    }
);

const ProfileStack = createStackNavigator(
    {
        Profile: { screen: Profile },
        Detail: { screen: Detail }
    }
);

const TabBar = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: () => ({
                tabBarLabel: 'Home'
            })
        },
        FoodFeed: {
            screen: FoodFeedStack,
            navigationOptions: () => ({
                tabBarLabel: 'FoodFeed'
            })
        },
        Explore: {
            screen: ExploreStack,
            navigationOptions: () => ({
                tabBarLabel: 'Explore'
            }),
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: () => ({
                tabBarLabel: 'Profile'
            }),
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused ? Images.HomeActiveIcon : Images.HomeIcon;
                } else if (routeName === 'FoodFeed') {
                    iconName = focused ? Images.FoodActiveIcon : Images.FoodIcon;
                } else if (routeName === 'Explore') {
                    iconName = focused ? Images.ExploreActiveIcon : Images.ExploreIcon;
                } else if (routeName === 'Profile') {
                    iconName = focused ? Images.ProfileActiveIcon : Images.ProfileIcon;
                }
                return <Image source={iconName} resizeMode='center' />;
            },
        }),
        tabBarOptions: {
            activeTintColor: Colors.NAVIGATIONLABEL
        },
        swipeEnabled: false
    }
);

//=======STACK DECLARATION=========//

const SideBar = createDrawerNavigator({
    Home: { screen: TabBar },
    FoodFeed: { screen: FoodFeed },
    Explore: { screen: Explore },
    Profile: { screen: Profile }
}, {
        // contentComponent: SideMenu,
        // drawerWidth: Dimensions.get('window').width - 100,
    });

//=======STACK DECLARATION=========//

const MainStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => ({
            header: null
        })
    },
    SideBar: {
        screen: SideBar,
        navigationOptions: () => ({
            header: null
        })
    }
});

const AppNavigation = createAppContainer(MainStack);

export default AppNavigation;