import {createStackNavigator} from 'react-navigation-stack';
import Profile from '../screens/profile';

const screens = {
    Profile: {
        screen: Profile
    },

}

const ProfileStack = createStackNavigator(screens);

export default ProfileStack;