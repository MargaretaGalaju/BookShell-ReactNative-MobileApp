import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';

export default function AddNewBook({ navigation }) {
    const [isLoading, setLoading] = useState(true);

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
        .then((json) => 
          {
            console.log(json)
          }
        )
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

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

  const styles = StyleSheet.create({
    title: {
      fontFamily: 'montserrat-regular',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    bookName: {
        fontFamily: 'montserrat-regular',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e1e1e1'
    },
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