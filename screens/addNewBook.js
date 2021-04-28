import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/styles'

export default function AddNewBook({ navigation }) {
    const [bookNameValue, setBookNameValue] = useState('');
    const [bookDescriptionValue, setBookDescriptionValue] = useState('');

    const onAddButtonClick = () => {
      const bookObjectBody = {
        Id: `${Math.round(Math.random()*99999999999)}`,
        CreatedAt: `${new Date()}`,
        Name: bookNameValue,
        Description: bookDescriptionValue,
      }
      fetch(`https://606c6493c445570017a46ed8.mockapi.io/BookShell`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookObjectBody)
      })
        .then((response) => response.json())
        .catch((error) => console.error(error))

      setBookNameValue('');
      setBookDescriptionValue('');
      navigation.navigate('MyBooks');
    }
  
    return (
      <View>
          <Text>Here you can add your book</Text>
          <View style={styles.column}>
             <TextInput
                  onChangeText={bookNameValue => setBookNameValue(bookNameValue)}
                  defaultValue={bookNameValue}
                  style={styles.addInput}
                  placeholder="Add book name"
              />
              <TextInput
                  onChangeText={bookDescriptionValue => setBookDescriptionValue(bookDescriptionValue)}
                  defaultValue={bookDescriptionValue}
                  style={styles.addInput}
                  placeholder="Add book description"
              />
              <TouchableOpacity onPress={onAddButtonClick} style={styles.appButtonContainer}>
                  <Text style={styles.appButtonText}>Add book</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }

