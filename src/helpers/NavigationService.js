import { CommonActions, StackActions } from "@react-navigation/native";

export default NavigationService = {
  navigation: null,
  navigate: function(screenName, params){
    this.navigation.navigate(screenName, params)
  },
  replace: function(screenName, params){
    this.navigation.dispatch(StackActions.replace(screenName, params))
  },
  goBack: function(){
    this.navigation.dispatch(CommonActions.goBack());
  },
  showProfileModal: function(profile){
    this.navigation.navigate('Modal', { screen: 'DetailScreen', params: profile })
  },
  showMessage: function(id){
    this.navigation.navigate('Modal', { screen: 'ChatScreen', params: id })
  },
}