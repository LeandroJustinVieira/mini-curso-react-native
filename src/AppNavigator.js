import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Music from "./Music";

const navigation = createStackNavigator(
    {
        Home: {screen: Home},
        Music: {screen: Music},
    },
    {
        initialRouteName: "Home"
    }
);

const AppNavigator = createAppContainer(navigation);

export default AppNavigator;