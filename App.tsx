import 'react-native-gesture-handler';// necessaire pour drawer (reanimated ) should be on the top
import AppStack from './src/navigations/AppStack';
// import React from 'react';
// import MainStack from './src/navigations/MainStack';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';


const  App=()=> {
  return (
    // <GestureHandlerRootView style={{flex:1,}}>
    // <MainStack />
    // </GestureHandlerRootView>

    <AppStack/>
  
  );
};

export default App;
