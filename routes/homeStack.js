import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Welcome',
        }
    },
    Details: {
        screen: Details
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#e1e1e1',
        }
    }
});

export default createAppContainer(HomeStack);