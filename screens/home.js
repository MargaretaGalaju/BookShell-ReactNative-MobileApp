import React, { useState } from 'react';
import { Text, FlatList, TouchableHighlight, View } from 'react-native';
import { styles } from '../assets/styles/styles'

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
      </View>
      );
  }
