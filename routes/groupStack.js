import {createStackNavigator} from 'react-navigation-stack';
import Groups from '../screens/groups';
import Specific_Group from '../screens/specific_group'

const screens = {
    Groups: {
        screen: Groups
    },
    Specific_Group: {
        screen: Specific_Group
    },
}

const GroupStack = createStackNavigator(screens);

export default GroupStack;