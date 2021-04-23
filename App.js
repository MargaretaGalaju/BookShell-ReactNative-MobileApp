import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';

const getFonts = () => {
  return Font.loadAsync({
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={()=> (
            <View>
                <Text>Error!</Text>
            </View>
        )}
      />
    )
  }
}
