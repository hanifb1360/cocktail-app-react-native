import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Keyboard } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    onSearch(query);
    Keyboard.dismiss(); // Dismiss the keyboard after submitting the search
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Margarita"
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSubmit}>
        <Text style={{ color: 'white' }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#184761',
    padding: 10,
    borderRadius: 4,
  },
});

export default SearchBar;
