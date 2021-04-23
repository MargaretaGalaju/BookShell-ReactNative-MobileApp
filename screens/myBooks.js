import React, { useState, useEffect } from 'react';
import { Button, Text, ActivityIndicator, View, TouchableHighlight, FlatList } from 'react-native';
import { styles } from '../assets/styles/styles'

export default function MyBooks({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const onBookClick = (description) => {
        navigation.navigate('BookDescription', {description: description});
    }
    const addNewBook = () => {
      navigation.navigate('AddNewBook')
    }
  
    useEffect(() => {
      fetch(`https://606c6493c445570017a46ed8.mockapi.io/BookShell`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>'My books:'</Text>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                keyExtractor={({ Id }) => Id}
                inverted={true}
                renderItem={({ item }) => (
                <TouchableHighlight  onPress={onBookClick.bind(this, item.Description)} underlayColor="white">
                    <Text style={styles.bookName}>{item.Name}</Text>
                </TouchableHighlight>
                )}
            />
            )
        }
        <Button style={styles.button} title="Add New Book" onPress={addNewBook}/>
      </View>
    );
  }
