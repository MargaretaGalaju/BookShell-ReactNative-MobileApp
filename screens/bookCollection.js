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
  
    return (
      <View>
        <Text style={styles.title}>{ navigation.getParam('collection') ? navigation.getParam('collection') : 'List of books:' }</Text>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                <TouchableHighlight onPress={onBookClick.bind(this, item.volumeInfo.description)} underlayColor="white">
                    <Text style={styles.bookName}>{item.volumeInfo.title}</Text>
                </TouchableHighlight>
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
    bookName: {
        fontFamily: 'montserrat-regular',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e1e1e1'
    }
  });