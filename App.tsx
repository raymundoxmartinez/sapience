import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'

//These keys are made up by us
//the key can be anything you want
const navigator = createStackNavigator({
  Home: HomeScreen
}, {
  //default route we want to show any time the app starts up
  initialRouteName: 'Home',
  //can be used to customize header on each screen
  defaultNavigationOptions: {
    title: 'Home'
  }
})

//creates a default react component that shows the views in the navigator
//makes sure that we export a react component from this file
export default createAppContainer(navigator)

