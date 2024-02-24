import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToastMessage = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const getMessageStyle = () => {
    switch (type) {
      case 'removedFromShoppingList':
        return { backgroundColor: '#45050e' };
      default:
        return { backgroundColor: '#091f2b' };
    }
  };

  return (
    <View style={{ ...styles.toastMessage, ...getMessageStyle(), display: isVisible ? 'flex' : 'none' }}>
      <Text style={{ color: 'white' }}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastMessage: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default ToastMessage;
