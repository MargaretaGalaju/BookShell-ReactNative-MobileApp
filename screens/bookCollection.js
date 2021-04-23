import React, { useState, useEffect } from 'react';
import { Button, Text, ActivityIndicator, View, FlatList } from 'react-native';
import { styles } from '../assets/styles/styles'

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
        .catch((error) => console.error(error))
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
