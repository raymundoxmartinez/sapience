import {
    createAppContainer,
    createSwitchNavigator,
  } from 'react-navigation'
  import { createBottomTabNavigator } from 'react-navigation-tabs'
  import HomeScreen from '../screens/HomeScreen'
  import AddExperienceScreen from '../screens/AddExperienceScreen'
  import ProfileScreen from '../screens/ProfileScreen'
  
  
  const switchNavigator = createSwitchNavigator({
    mainFlow: createBottomTabNavigator({
      Home: HomeScreen,
      AddExperience: AddExperienceScreen,
      Profile: ProfileScreen,
    })
  })
  
  
  export default createAppContainer(switchNavigator)