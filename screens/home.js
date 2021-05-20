import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { setBooks } from '../store/BooksActions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  const { subjects } = state;
  return { subjects }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setBooks,
  }, dispatch)
);
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);

export function Home(props) {
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
    props.navigation.navigate('BookCollection', {collection: bookCollections[index]?.text});
  }

  useEffect(() => {
    fetch(`https://606c6493c445570017a46ed8.mockapi.io/BookShell`)
      .then((response) => response.json())
      .then((json) => {
        props.setBooks(json);
        console.log('onemoretime');
      }
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const navigateToMyBooks = () => {
    props.navigation.navigate('MyBooks');
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
