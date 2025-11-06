import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList 
} from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const addItemHandler = () => {
    if (enteredItem.trim() !== '') {
      setItemList([...itemList, { id: Math.random().toString(), value: enteredItem }]);
      setEnteredItem('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MY LIST</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Item"
          placeholderTextColor="#B0B0B0"
          value={enteredItem}
          onChangeText={setEnteredItem}
        />

        <TouchableOpacity style={styles.addButton} onPress={addItemHandler}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itemList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.value}</Text>
          </View>
        )}
      />

      <Text style={styles.footer}>Designed by: Lourence S. Lariosa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820',
    padding: 25,
    paddingTop: 60,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FEE715',
    textAlign: 'center',
    marginBottom: 25,
    letterSpacing: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    flex: 1,
    backgroundColor: '#1E2A38',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#303F4A',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#00E676',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#00E676',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  addButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listItem: {
    backgroundColor: '#1F2F3D',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#FEE715',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
  },
  listText: {
    color: '#FFF',
    fontSize: 18,
  },
  footer: {
    textAlign: 'center',
    color: '#828282',
    marginTop: 25,
    fontSize: 12,
  },
});
