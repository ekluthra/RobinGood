import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeStack from './homeStack';
import GroupStack from './groupStack';
import DonationStack from './donationStack';
import ProfileStack from './profileStack';

const RootDrawNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Groups: {
        screen: GroupStack,
    },
    Donation: {
        screen: DonationStack,
    },
    Profile: {
        screen: ProfileStack,
    }
})

export default createAppContainer(RootDrawNavigator);