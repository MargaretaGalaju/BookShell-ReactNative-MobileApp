import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import BookCollection from '../screens/bookCollection';
import BookDescription from '../screens/bookDescription';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'BookShell',
        }
    },
    BookCollection: {
        screen: BookCollection,
        navigationOptions: {
            title: 'AVAILABLE BOOKS',
        }
    },
    BookDescription: {
        screen: BookDescription,
        navigationOptions: {
            title: 'BOOK DESCRIPTION',
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