import {createStackNavigator} from 'react-navigation-stack';
import Donation from '../screens/donation';

const screens = {
    Donation: {
        screen: Donation
    },

}

const DonationStack = createStackNavigator(screens);

export default DonationStack;