import 'react-native-gesture-handler';// necessaire pour drawer (reanimated ) should be on the top
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import { BottomSheetVisibilityProvider } from './src/Context/TabVisibilityContext';


//  android 27783368672-em6h13n60fsjbui0otk7lnmp7c87uk64.apps.googleusercontent.com




const  App=()=> {
  

  return (
    <GestureHandlerRootView style={{flex:1,}}>
   
    <BottomSheetVisibilityProvider>
      <AuthStackNavigator/>
    </BottomSheetVisibilityProvider>

    </GestureHandlerRootView>

    

   
  
  );
};

export default App;






