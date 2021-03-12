import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Details({ navigation }) {
    const [hobbies, setHobbies] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const onAddButtonClick = () => {
        setHobbies((previousHobbies) => [
            ...previousHobbies,
            {text: inputValue, id: previousHobbies.length}
        ]);
        setInputValue('');
    }

    const onSave = () => {
        navigation.navigate('Home', {
            name: navigation.getParam('name'),
            hobbies: hobbies,
        })
    }

    return (
        <View style={styles.container}>
            <Text>Hi, { navigation.getParam('collection').text }</Text>
            <Text style={styles.text}>Hi! This is my second screen!</Text>
            
            <View style={styles.row}>
                <TextInput
                    onChangeText={inputValue => setInputValue(inputValue)}
                    defaultValue={inputValue}
                    style={styles.addInput}
                    placeholder="Add your hobbies"
                />
                <TouchableOpacity onPress={onAddButtonClick} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.hobbies}>
                <Text style={styles.text}>Your hobbies:</Text>
                <Button title="Save Hobbies" onPress={onSave}/>

                <FlatList 
                    data={hobbies}
                    renderItem={({item})=> (
                        <View style={styles.hobby}>
                            <Ionicons name="md-checkmark-circle"  />
                            <Text style={styles.hobbyText}>{item.text}</Text>
                        </View>
                    )
                    }
                />
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
    },
    button: {
        margin: 20,
        fontFamily: 'montserrat-regular',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    hobbies: {
        alignItems: 'flex-start',
        display: 'flex',
        marginTop: 20,
    },
    hobby: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    hobbyText: {
        marginLeft: 10,
        fontFamily: 'montserrat-regular',
    },
    appButtonContainer: {
        borderWidth:1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        width: '20%',
        backgroundColor: '#e1e1e1',
        borderColor: '#e1e1e1',
    },
    addInput: {
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#e1e1e1',
        width: '60%',
        fontFamily: 'montserrat-regular',
        padding: 20,
    },
    appButtonText: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        fontFamily: 'montserrat-bold',
        color: "gray",
    },
   
    text: {
        fontFamily: 'montserrat-regular',
        marginBottom: 20,
    }
  });