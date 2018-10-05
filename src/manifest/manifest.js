import {StackNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Article from '../screens/Article';

const RootNavigation = StackNavigator ({
    Home : {
        screen : Home
    },
    Article : {
        screen : Article
    }
})
export default RootNavigation