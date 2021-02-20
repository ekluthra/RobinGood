import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import HomeStack from './homeStack';
import MessageStack from './messageStack';
import DonationStack from './donationStack';
import InvestingStack from './investingStack';

const RootDrawNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Message: {
        screen: MessageStack,
    },
    Donation: {
        screen: DonationStack,
    },
    Investing: {
        screen: InvestingStack,
    }
})

export default createAppContainer(RootDrawNavigator);