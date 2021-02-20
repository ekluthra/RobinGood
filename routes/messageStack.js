import {createStackNavigator} from 'react-navigation-stack';
import Message from '../screens/message';

const screens = {
    Message: {
        screen: Message
    },

}

const MessageStack = createStackNavigator(screens);

export default MessageStack;