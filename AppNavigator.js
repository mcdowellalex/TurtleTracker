import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Import Screens
import TurtleListScreen from './Screens/TurtleListScreen';
import TurtleProfileScreen from './Screens/TurtleProfileScreen';
import MapScreen from './Screens/MapScreen';

const MapStack = createStackNavigator(
    {
      Map: {
        screen: MapScreen,
      },
    }
  );

const TurtleListStack = createStackNavigator(
    {
        TurtleList: {
          screen: TurtleListScreen,
        },
      }
);

const MainNavigator = createBottomTabNavigator({
    MapTab: {
      navigationOptions: {
        tabBarLabel: 'Map',
      },
      screen: MapStack,
    },
    TurtleTab: {
        navigationOptions: {
            tabBarLabel: 'Turtle List',
        },
        screen: TurtleListStack,
    }
  }
);

const AppNavigator = createStackNavigator(
    {
        Map: {screen: MapScreen},
        TurtleList: TurtleListScreen,
    },
    {
        initialRouteName: 'Map',
    }
);

export default createAppContainer(MainNavigator);