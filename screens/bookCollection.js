import React, { useState, useEffect } from 'react';
import { Button, Text, ActivityIndicator, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook } from '../store/BooksActions';

const mapStateToProps = (state) => {
  const { subjects } = state;
  return { subjects }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addBook,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BookCollection);

export function BookCollection(props) {
    const [isLoading, setLoading] = useState(true);
    const [listOfBooks, setListOfBooks] = useState([]);

    const onBookClick = (description) => {
      props.navigation.navigate('BookDescription', {description: description});
    }

    useEffect(() => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.navigation.getParam('collection')}`)
        .then((response) => response.json())
        .then((json) => setListOfBooks(json.items))
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
        .then((newBook) => 
          {
            props.addBook(newBook);
          }
        )
        .catch((error) => console.error(error))
    }
  
    return (
      <View>
        <Text style={styles.title}>{ props.navigation.getParam('collection') ? props.navigation.getParam('collection') : 'List of books:' }</Text>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={listOfBooks}
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
