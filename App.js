import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from './src/components/SearchBar';
import CocktailCard from './src/components/CocktailCard';
import ShoppingList from './src/components/ShoppingList';
import ToastMessage from './src/components/ToastMessage';
import { useCocktailSearch } from './src/services/CocktailAPI';

const App = () => {
  const [query, setQuery] = useState('margarita');
  const [isInitialSearch, setIsInitialSearch] = useState(true);
  const { cocktails, loading, error } = useCocktailSearch(query);
  const [shoppingList, setShoppingList] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  useEffect(() => {
    // Handle logic for storing shoppingList in AsyncStorage
  }, [shoppingList]);

  const handleSearch = (newQuery) => {
    setIsInitialSearch(false);
    setQuery(newQuery);
    setToastMessage('Searching...');
    setToastType('searching');
  };

  useEffect(() => {
    if (!isInitialSearch) {
      if (cocktails.length === 0) {
        setToastMessage('No results found.');
        setToastType('noResultsFound');
      } else {
        setToastMessage('Here are the results.');
        setToastType('resultsFound');
      }
    }
  }, [query, cocktails, isInitialSearch]);

  const handleAddToShoppingList = (cocktail) => {
    // Handle logic for adding ingredients to the shopping list
    setToastMessage(`Cocktail "${cocktail.strDrink}" ingredients added to shopping list.`);
    setToastType('addedToShoppingList');
  };

  const handleDeleteFromShoppingList = (ingredient) => {
    // Handle logic for deleting an ingredient from the shopping list
    setToastMessage(`Ingredient "${ingredient}" removed from shopping list.`);
    setToastType('removedFromShoppingList');
  };

  const handlePrintShoppingList = () => {
    // Handle logic for printing the shopping list
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar onSearch={handleSearch} />
      </View>
      <View style={styles.mainContent}>
        {/* Cocktail Results */}
        <View style={styles.cocktailResults}>
          {/* Loading, Error, or Cocktail Cards */}
          {loading ? <Text>Loading...</Text> : error ? <Text>Error: {error}</Text> : (
            cocktails.map((cocktail) => (
              <CocktailCard
                key={cocktail.idDrink}
                cocktail={cocktail}
                onAdd={() => handleAddToShoppingList(cocktail)}
              />
            ))
          )}
        </View>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <ShoppingList ingredients={shoppingList} onDelete={handleDeleteFromShoppingList} />
          <TouchableOpacity onPress={handlePrintShoppingList}>
            <Text>Print Shopping List</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ToastMessage message={toastMessage} type={toastType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#091f2b',
    padding: 20,
    alignItems: 'center',
  },
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  cocktailResults: {
    flex: 1,
  },
  sidebar: {
    width: 300,
    marginLeft: 20,
  },
});

export default App;
