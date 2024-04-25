import 'react-native-gesture-handler';// necessaire pour drawer (reanimated ) should be on the top
// import AppStack from './src/navigations/AppStack';
import React from 'react';
// import MainStack from './src/navigations/MainStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import { useUserStore } from './src/store/useUserStore';



const  App=()=> {
  const { session, user } = useUserStore();

  return (
    <GestureHandlerRootView style={{flex:1,}}>
    {/* <MainStack /> */}
      <AuthStackNavigator/>

    </GestureHandlerRootView>

    // <AppStack/>

   
  
  );
};

export default App;






