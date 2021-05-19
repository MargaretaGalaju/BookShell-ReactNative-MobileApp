import React from 'react';
import { Button, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBooks } from '../store/BooksActions';

const mapStateToProps = (state) => {
  const { subjects } = state;
  return { subjects }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setBooks,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);

export function MyBooks(props) {
    const onBookClick = (description) => {
      props.navigation.navigate('BookDescription', {description: description});
    }

    const addNewBook = () => {
      props.navigation.navigate('AddNewBook')
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>'My books:'</Text>
            <FlatList
                data={props.subjects.all_books}
                keyExtractor={({ Id }) => Id.toString()}
                inverted={true}
                renderItem={({ item }) => (
                <TouchableHighlight  onPress={onBookClick.bind(this, item.Description)} underlayColor="white">
                    <Text style={styles.bookName}>{item.Name}</Text>
                </TouchableHighlight>
                )}
            />
        <Button style={styles.button} title="Add New Book" onPress={addNewBook}/>
      </View>
    );
  }
