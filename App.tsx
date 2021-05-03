import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    //ESCUTA AS NOTIFICAÇÕES
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async notifications => {
    //     const data = notifications.request.content.data.plant as PlantProps;
    //     console.log(data);
    //   }
    // )
    // return () => subscription.remove();

    
    async function notifications() {
      //VER TODAS AS NOTIFICAÇÕES
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log(data);

      //CANCELA TODAS AS NOTIFICAÇÕES
      // await Notifications.cancelAllScheduledNotificationsAsync();
    }
  }, []);

  if(!fontsLoaded)
  return <AppLoading />

  return (
    <Routes />  
  );
}


