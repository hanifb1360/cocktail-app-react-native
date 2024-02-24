import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CocktailCard = ({ cocktail, onAdd }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(cocktail);
    setAdded(true);
  };

  return (
    <View style={styles.cocktailCard}>
      <Image style={styles.thumbnail} source={{ uri: cocktail.strDrinkThumb }} />
      <View style={styles.content}>
        <Text style={styles.title}>{cocktail.strDrink}</Text>
        <Text>{cocktail.strInstructions}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAdd} disabled={added}>
        <Text style={{ color: 'white' }}>Add to Shopping List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cocktailCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#184761',
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
  },
});

export default CocktailCard;
