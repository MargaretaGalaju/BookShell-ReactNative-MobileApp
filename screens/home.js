import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Home({ navigation, route }) {
      React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('lala');
        });
    
        return unsubscribe;
      }, [navigation]);

    const [name, setName] = useState('');
    const [hobbies, setHobbies] = useState([]);

    const onContinue = () => {
      navigation.navigate('Details', {name: name});
    }
  
    const onInputChange = (value) => {
      setName(value);
    }

    if (navigation?.hobbies?.length){
        setHobbies(navigation.hobies);
    }

    if (hobbies.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Dear {name}, here are your hobbies: </Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hi! This is my home screen!</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your name"
                    onChangeText={onInputChange}
                />
                <View style={styles.button}>
                    <Button title="Continue" onPress={onContinue}/>
                </View>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    text: {
        fontFamily: 'montserrat-regular'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'montserrat-regular',
      },
      button: {
        margin: 20,
        alignItems: 'center',
        fontFamily: 'montserrat-regular',
        justifyContent: 'center',
      },
      input: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e1e1e1',
        width: 300,
        fontFamily: 'montserrat-regular',
        padding: 10,
      }
  });