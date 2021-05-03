import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import userImg from '../assets/Nicole.png';


export function Header() {

  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUsername() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '');      
    }  
    
    loadStorageUsername();

  }, []);

    return(
        <View style={styles.container}>
          <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <Image source={userImg} style={styles.image} />
        </View>
   
    )
}

const styles = StyleSheet.create({  
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
    marginTop: getStatusBarHeight(),
    paddingVertical: 20,
    paddingTop: 50,  
  }, 
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
})