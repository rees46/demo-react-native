import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  itemContainer: {
    width: 160,
    alignItems: 'center',
    margin: 10,
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  itemName: {
    marginTop: 5,
    fontSize: 16,
    height: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemPrice: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
})
