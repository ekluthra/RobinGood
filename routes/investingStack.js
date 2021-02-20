import {createStackNavigator} from 'react-navigation-stack';
import Investing from '../screens/investing';

const screens = {
    Investing: {
        screen: Investing
    },

}

const InvestingStack = createStackNavigator(screens);

export default InvestingStack;