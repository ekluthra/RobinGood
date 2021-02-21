import {createStackNavigator} from 'react-navigation-stack';
import Groups from '../screens/groups';
import Message from '../screens/message';
import Home from '../screens/home';

const screens = {
    Groups: {
        screen: Groups
    },
    Message: {
        screen: Message
    },
    Home: {
        screen: Home
    }
}

const GroupStack = createStackNavigator(screens);

export default GroupStack;