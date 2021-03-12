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

  const onCollectionClick = (index) => {
    navigation.navigate('BookCollection', {collection: bookCollections[index]?.text});
  }

    const getImageUrlLink = (index) => {
      switch (index) {
        case 0: return { uri: '../assets/images/bookCollectionBackground/romantic.jpeg' };
        case 1: return { uri: '../assets/images/bookCollectionBackground/fantasy.jfif' };
        case 2: return { uri: '../assets/images/bookCollectionBackground/detective2.jfif' };
        case 3: return { uri: '../assets/images/bookCollectionBackground/detective.jpg' };
        case 4: return { uri: '../assets/images/bookCollectionBackground/action.webp' };
        case 5: return { uri: '../assets/images/bookCollectionBackground/children.jpg' };
        default: return { uri: 'https://reactjs.org/logo-og.png' };
      }
    }

    return (
      <View style={styles.layout}>
        <View style={styles.collectionsWrapper}>
          <Text style={styles.text}>Collections:</Text>

          <FlatList
            horizontal
            data={bookCollections}
            keyExtractor={item => item.id}
            renderItem={({ item })=> (

              <TouchableHighlight onPress={onCollectionClick.bind(this, item.id)} underlayColor="white">
                <View style={styles.collection}>
                  <ImageBackground source={() => this.getImageUrlLink(item.id)} style={styles.image}>
                    <Text style={styles.bookText}>{item.text}</Text>
                  </ImageBackground>
              </View>
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
      );
  }

  const styles = StyleSheet.create({
    text: {
        fontFamily: 'montserrat-regular'
    },
    layout: {
      backgroundColor: '#fff',
        fontFamily: 'montserrat-regular',
      },
      button: {
        margin: 20,
        alignItems: 'center',
        fontFamily: 'montserrat-regular',
        justifyContent: 'center',
      },
      collectionsWrapper: {
        marginTop: 20,
        fontFamily: 'montserrat-regular',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
      },
      collection: {
        margin: 10,
        padding: 30,
        fontFamily: 'montserrat-regular',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e1e1e1'
      },
      image: {
        resizeMode: 'cover',
        justifyContent: 'center',
        width: 50
      },
      bookText: {
      }
  });