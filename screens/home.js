import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, TouchableHighlight, View, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
    const [bookCollections, setBookCollections] = useState([
      {text: 'Romantic Books', id: 0},
      {text: 'Fantasy Books', id: 1},
      {text: 'Detective Books', id: 2},
      {text: 'Criminal Books', id: 3},
      {text: 'Action Books', id: 4},
      {text: 'Children Books', id: 5},
  ]);

  const [myBookCollection, setMyBookCollections] = useState([
    {text: 'Saved Books', id: 0},
]);

  const onCollectionClick = (index) => {
    navigation.navigate('BookCollection', {collection: bookCollections[index]?.text});
  }

  const navigateToMyBooks = () => {
    navigation.navigate('MyBooks');
  }

    return (
      <View style={styles.layout}>
        <View style={styles.collectionsWrapper}>
          <Text style={styles.blockTitle}>GOOGLE COLLECTION</Text>

          <FlatList
            horizontal
            style={styles.flatList}
            data={bookCollections}
            keyExtractor={item => item.id}
            renderItem={({ item })=> (

              <TouchableHighlight onPress={onCollectionClick.bind(this, item.id)} underlayColor="white">
                <View style={styles.collection}>
                <Text style={styles.bookText}>{item.text}</Text>
              </View>
              </TouchableHighlight>
            )}
          />

        </View>

          <View style={styles.collectionsWrapper}>
            <Text style={styles.blockTitle}>My books</Text>

            <FlatList
              horizontal
              style={styles.flatList}
              data={myBookCollection}
              keyExtractor={item => item.id}
              renderItem={({ item })=> (

                <TouchableHighlight onPress={navigateToMyBooks.bind(this)} underlayColor="white">
                  <View style={styles.collection}>
                      <Text style={styles.bookText}>{item.text}</Text>
                </View>
                </TouchableHighlight>
              )}
            />
          </View>

          {/* <View style={styles.collectionsWrapper}>
            <Text style={styles.blockTitle}>Favorites</Text>

            <FlatList
              horizontal
              style={styles.flatList}
              data={bookCollections}
              keyExtractor={item => item.id}
              renderItem={({ item })=> (

                <TouchableHighlight onPress={onCollectionClick.bind(this, item.id)} underlayColor="white">
                  <View style={styles.collection}>
                      <Text style={styles.bookText}>{item.text}</Text>
                </View>
                </TouchableHighlight>
              )}
            />
          </View> */}
      </View>
      );
  }

  const styles = StyleSheet.create({
    layout: {
      backgroundColor: '#fff',
      fontFamily: 'montserrat-regular',
      display: 'flex',
      flexDirection: 'column'
    },
    collectionsWrapper: {
      marginTop: 20,
      fontFamily: 'montserrat-regular',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
    },
    blockTitle: {
      fontSize: 17,
      fontWeight: "600",
      fontFamily: 'montserrat-regular',
      marginBottom: 10,
    },
    button: {
      margin: 20,
      alignItems: 'center',
      fontFamily: 'montserrat-regular',
      justifyContent: 'center',
    },
   
    collection: {
      marginRight: 10,
      padding: 20,
      fontFamily: 'montserrat-regular',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#e1e1e1', 
      height: 100,
      width: 150,
    },
    image: {
      resizeMode: 'cover',
      justifyContent: 'center',
      width: 150,
      height:100,
    },
    flatList: {
      paddingBottom: 5,
    },
    bookText: {
    }
  });