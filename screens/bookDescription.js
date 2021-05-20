import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../assets/styles/styles'

export default function BookDescription({ navigation }) {
       return (
        <View style={styles.container}>
            <Text style={styles.title}>Book Description: </Text>
            <Text style={styles.description}>{ navigation.getParam('description') }</Text>
        </View>
    );
  }