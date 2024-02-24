import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ShoppingList = ({ ingredients, onDelete }) => {
  const uniqueIngredients = [...new Set(ingredients)];

  return (
    <View style={styles.shoppingList}>
      <Text style={styles.title}>Shopping List</Text>
      {uniqueIngredients.map((ingredient) => (
        <View key={ingredient} style={styles.listItem}>
          <Text>{ingredient}</Text>
          <TouchableOpacity onPress={() => onDelete(ingredient)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingList: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    color: '#e74c3c',
  },
});

export default ShoppingList;
