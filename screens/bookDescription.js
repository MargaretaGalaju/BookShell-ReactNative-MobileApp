import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, ActivityIndicator, View, TouchableOpacity, FlatList } from 'react-native';

export default function BookDescription({ navigation }) {
       return (
        <View style={{ flex: 1, padding: 24 }}>
            <Text style={{fontFamily: 'montserrat-regular'}}>Book Description: </Text>
            <Text>{ navigation.getParam('description') }</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    text: {
        fontFamily: 'montserrat-regular',
        marginBottom: 20,
    }
  });