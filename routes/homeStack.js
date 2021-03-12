import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'BookShell',
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'YOUR BOOKS',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleStyle: {
            alignSelf: 'center',
            backgroundColor: '#88C5CC',
            fontFamily: 'montserrat-regular',
        },
        headerStyle: {
            backgroundColor: '#88C5CC',
        }
    }
});

export default createAppContainer(HomeStack);