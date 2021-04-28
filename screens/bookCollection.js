import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, ActivityIndicator, View, TouchableHighlight, FlatList } from 'react-native';

export default function BookCollection({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const onBookClick = (description) => {
        navigation.navigate('BookDescription', {description: description});
    }

    useEffect(() => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${navigation.getParam('collection')}`)
        .then((response) => response.json())
        .then((json) => setData(json.items))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const addToMyBooks = (item) => {
      const bookObjectBody = {
        Id: `${Math.round(Math.random()*99999999999)}`,
        CreatedAt: `${new Date()}`,
        Name: item.volumeInfo.title,
        Description: item.volumeInfo.description,
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
    }
  
  
    return (
      <View>
        <Text style={styles.title}>{ navigation.getParam('collection') ? navigation.getParam('collection') : 'List of books:' }</Text>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                <View style={styles.row}>
                    <Text style={styles.bookName}  onPress={onBookClick.bind(this, item.volumeInfo.description)} >{item.volumeInfo.title}</Text>
                    <Button style={styles.button} title="Add To My Books" onPress={addToMyBooks.bind(this, item)}/>
                </View>

                )}
            />
            )
        }
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
    row: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
      marginRight: 20,
      marginLeft: 20,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#e1e1e1'
    },
    button: {
      alignContent: 'flex-end',
      marginLeft: 10,
    },  
    bookName: {
        fontFamily: 'montserrat-regular',
        flex: 1,
        maxWidth: '50%',
        overflow: 'hidden',
        marginRight: 20,
    }
  });