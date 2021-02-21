import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeStack from './homeStack';
import GroupStack from './groupStack';
import DonationStack from './donationStack';
import InvestingStack from './investingStack';

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
    Investing: {
        screen: InvestingStack,
    }
})

export default createAppContainer(RootDrawNavigator);